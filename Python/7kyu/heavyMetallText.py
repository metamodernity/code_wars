def heavy_metal_umlauts(boring_text):
    for i in boring_text:
        boring_text = boring_text.replace('A', 'Ä')
        boring_text = boring_text.replace('O', 'Ö')
        boring_text = boring_text.replace('a', 'ä')
        boring_text = boring_text.replace('o', 'ö')
        boring_text = boring_text.replace('E', 'Ë')
        boring_text = boring_text.replace('U', 'Ü')
        boring_text = boring_text.replace('e', 'ë')
        boring_text = boring_text.replace('u', 'ü')
        boring_text = boring_text.replace('I', 'Ï')
        boring_text = boring_text.replace('Y', 'Ÿ')
        boring_text = boring_text.replace('i', 'ï')
        boring_text = boring_text.replace('y', 'ÿ')
    heavy_metal_text = boring_text
    return heavy_metal_text
