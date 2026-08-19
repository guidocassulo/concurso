import sys
sys.path.insert(0, r'D:\python_packages\Python311\site-packages')
import cv2
import numpy as np

# 1. Load original image
img_orig = cv2.imread(r'C:\Users\gcassulo\Downloads\IMG_20260818_213840.jpg')
# Rotate 90 clockwise
img_rot = cv2.rotate(img_orig, cv2.ROTATE_90_CLOCKWISE)

# 2. Define source points for perspective alignment
# In img_rot:
# The blue box has 4 corners:
# TL: [925, 95]
# TR: [3928, 150]
# BR: [3946, 2246]
# BL: [925, 2228]

src_box = np.array([
    [925.0, 95.0],
    [3928.0, 150.0],
    [3946.0, 2246.0],
    [925.0, 2228.0]
], dtype=np.float32)

# Page size: 3508 x 2480 (A4 at 300 DPI)
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
warped = cv2.warpPerspective(img_rot, M, (W_out, H_out), flags=cv2.INTER_LANCZOS4, borderMode=cv2.BORDER_CONSTANT, borderValue=(255, 255, 255))

cv2.imwrite(r'D:\proyecto\warped_aligned.jpg', warped)
print("Aligned warped image saved successfully!")
