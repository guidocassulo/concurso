import sys
sys.path.insert(0, r'D:\python_packages\Python311\site-packages')
import cv2
import numpy as np
from PIL import Image

def generate_perfect():
    orig = cv2.imread(r'C:\Users\gcassulo\Downloads\IMG_20260818_213840.jpg')
    rot = cv2.rotate(orig, cv2.ROTATE_90_CLOCKWISE)

    # 1. Perspective alignment
    src_box = np.array([
        [925.0, 95.0],
        [3928.0, 150.0],
        [3946.0, 2246.0],
        [925.0, 2228.0]
    ], dtype=np.float32)

    W_out = 3508
    H_out = 2480

    x_left = 110
    x_right = W_out - 110 # 3398
    y_top = 80
    y_bottom = H_out - 130 # 2350

    dst_box = np.array([
        [x_left, y_top],
        [x_right, y_top],
        [x_right, y_bottom],
        [x_left, y_bottom]
    ], dtype=np.float32)

    M = cv2.getPerspectiveTransform(src_box, dst_box)
    warped = cv2.warpPerspective(rot, M, (W_out, H_out), flags=cv2.INTER_LANCZOS4, borderMode=cv2.BORDER_CONSTANT, borderValue=(255, 255, 255))

    # 2. Top edge de-arching
    map_x, map_y = np.meshgrid(np.arange(W_out, dtype=np.float32), np.arange(H_out, dtype=np.float32))
    norm_x = np.clip((map_x - x_left) / (x_right - x_left), 0, 1)
    sag_profile = 28.0 * np.sin(np.pi * norm_x)
    decay_y = np.clip(1.0 - (map_y / float(y_bottom)), 0, 1)
    map_y_corrected = map_y + sag_profile * decay_y

    dewarped = cv2.remap(warped, map_x, map_y_corrected, interpolation=cv2.INTER_LANCZOS4, borderMode=cv2.BORDER_CONSTANT, borderValue=(255, 255, 255))

    # 3. Clean the tiny stray hair line in the dewarped image directly:
    # Hair arc is near x in [880..1060], y in [1200..1260]
    hair_roi = dewarped[1190:1270, 870:1080].copy()
    hair_gray = cv2.cvtColor(hair_roi, cv2.COLOR_BGR2GRAY)
    # Background in this ROI is smooth gradient ~150-165
    # Use Black Hat morphology to extract only the thin dark line:
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (9, 9))
    blackhat = cv2.morphologyEx(hair_gray, cv2.MORPH_BLACKHAT, kernel)
    # Threshold only the hair line
    _, hair_mask = cv2.threshold(blackhat, 7, 255, cv2.THRESH_BINARY)
    # Dilate slightly
    hair_mask = cv2.dilate(hair_mask, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3, 3)))
    hair_cleaned = cv2.inpaint(hair_roi, hair_mask, 5, cv2.INPAINT_TELEA)
    dewarped[1190:1270, 870:1080] = hair_cleaned

    # 4. Illumination leveling & Color calibration
    cert_area = dewarped[y_top:y_bottom, x_left:x_right].copy().astype(np.float32)

    # Color gains for neutral white balance
    b_gain = 255.0 / 152.0
    g_gain = 255.0 / 168.0
    r_gain = 255.0 / 185.0

    cert_calib = np.zeros_like(cert_area)
    cert_calib[:, :, 0] = cert_area[:, :, 0] * b_gain
    cert_calib[:, :, 1] = cert_area[:, :, 1] * g_gain
    cert_calib[:, :, 2] = cert_area[:, :, 2] * r_gain

    # Illumination shading correction
    h_c, w_c = cert_calib.shape[:2]
    gy, gx = np.meshgrid(np.linspace(0, 1, w_c, dtype=np.float32), np.linspace(0, 1, h_c, dtype=np.float32))
    light_field = 0.88 + 0.12 * gx + 0.05 * gy
    for c in range(3):
        cert_calib[:, :, c] = cert_calib[:, :, c] / light_field

    # Levels / Curves adjustment
    in_min = 28.0
    in_max = 248.0
    gamma = 0.95

    cert_norm = np.clip((cert_calib - in_min) / (in_max - in_min), 0.0, 1.0)
    cert_norm = np.power(cert_norm, 1.0 / gamma) * 255.0
    cert_proc = np.clip(cert_norm, 0, 255).astype(np.uint8)

    # 5. Scanner Sharpening
    blur = cv2.GaussianBlur(cert_proc, (0, 0), 1.5)
    cert_sharp = cv2.addWeighted(cert_proc, 1.35, blur, -0.35, 0)

    # 6. Assemble final scan
    final_sheet = np.full((H_out, W_out, 3), 255, dtype=np.uint8)
    final_sheet[y_top:y_bottom, x_left:x_right] = cert_sharp

    # 7. HILET Logo on bottom left margin
    logo_patch = dewarped[2370:2470, 130:520].copy().astype(np.float32)
    logo_gray = cv2.cvtColor(logo_patch.astype(np.uint8), cv2.COLOR_BGR2GRAY).astype(np.float32)
    logo_clean = np.clip((logo_gray - 55) / (155 - 55), 0, 1) * 255.0
    logo_clean = np.clip(logo_clean, 0, 255).astype(np.uint8)
    logo_bgr = cv2.merge([logo_clean, logo_clean, logo_clean])
    logo_blur = cv2.GaussianBlur(logo_bgr, (0, 0), 1.2)
    logo_sharp = cv2.addWeighted(logo_bgr, 1.3, logo_blur, -0.3, 0)
    final_sheet[2370:2470, 130:520] = logo_sharp

    # 8. Save outputs
    out_path_jpg = r'C:\Users\gcassulo\Downloads\IMG_20260818_213840_scanned.jpg'
    out_path_png = r'C:\Users\gcassulo\Downloads\IMG_20260818_213840_scanned.png'
    out_path_pdf = r'C:\Users\gcassulo\Downloads\IMG_20260818_213840_scanned.pdf'

    cv2.imwrite(r'D:\proyecto\final_scan.jpg', final_sheet, [cv2.IMWRITE_JPEG_QUALITY, 99])
    cv2.imwrite(out_path_jpg, final_sheet, [cv2.IMWRITE_JPEG_QUALITY, 99])
    cv2.imwrite(out_path_png, final_sheet)

    im_pil = Image.fromarray(cv2.cvtColor(final_sheet, cv2.COLOR_BGR2RGB))
    im_pil.save(out_path_pdf, "PDF", resolution=300.0)

    print("Perfect scan generated successfully!")

if __name__ == '__main__':
    generate_perfect()
