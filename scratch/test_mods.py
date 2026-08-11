import sys

for mod in ['fitz', 'pdfplumber', 'pytesseract', 'PIL', 'pypdf', 'win32com']:
    try:
        __import__(mod)
        print('Available:', mod)
    except Exception as e:
        print('Not available:', mod, e)
