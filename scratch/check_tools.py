import sys

def check_pkg(pkg):
    try:
        m = __import__(pkg)
        print(f"Package {pkg} is INSTALLED")
        return True
    except ImportError:
        print(f"Package {pkg} NOT installed")
        return False

check_pkg('reportlab')
check_pkg('fpdf2')
check_pkg('fpdf')
check_pkg('weasyprint')
check_pkg('fitz')
check_pkg('docx')
