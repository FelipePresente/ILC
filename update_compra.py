
import re

file_path = r'c:\Users\felip\Desktop\ILC\compra.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Body Background
content = content.replace('bg-gray-50', 'bg-[#f0f0f2]')

# 2. Replace Header
new_header = """        <header class="w-full p-10 min-h-20 flex items-center justify-between md:text-xl text-[#322f43]">
            <nav class="flex gap-20">
                <a href="index.html" class="text-3xl font-bold">ILC</a>
                <ul class="flex gap-10 max-lg:hidden">
                    <li class="cursor-pointer hover:text-gray-600"><a href="index.html#about">Sobre nós</a></li>
                    <li class="cursor-pointer hover:text-gray-600"><a href="index.html#inter">Intercâmbios</a></li>
                    <li class="cursor-pointer hover:text-gray-600">Contato</li>
                </ul>
            </nav>
            <div class="flex gap-5 items-center justify-center max-lg:hidden md:text-xl">
                 <!-- Troca de idioma -->
                <img src="img/BR-icon.png" alt="pt-br" class="max-w-10 cursor-pointer">
            </div>
        </header>"""

# Regex to find the hidden header block
header_pattern = re.compile(r'<header class="hidden">.*?</header>', re.DOTALL)
content = header_pattern.sub(new_header, content)

# 3. Remove "Detalhes ida | Detalhes volta"
content = content.replace('<span class="ml-auto text-xs text-gray-500">Detalhes ida | Detalhes volta</span>', '<span class="ml-auto text-xs text-gray-500"></span>')

# 4. Remove "Detalhes do hotel"
content = content.replace('<span class="ml-auto text-xs text-gray-500">Detalhes do hotel</span>', '<span class="ml-auto text-xs text-gray-500"></span>')

# 5. Remove "Alterar voo" button
# Using regex to match the button block
alterar_voo_pattern = re.compile(r'\s*<button\s+class="w-full md:w-auto px-6 py-2 border border-\[#322f43\] text-\[#322f43\] rounded font-medium hover:bg-gray-100 transition text-sm">Alterar\s+voo</button>', re.DOTALL)
content = alterar_voo_pattern.sub('', content)

# 6. Remove "Alterar hotel" button container
alterar_hotel_pattern = re.compile(r'\s*<div class="mt-6 pt-4 border-t border-gray-100">\s*<button class="w-full text-center text-gray-400 text-sm hover:text-gray-600">Alterar\s+hotel</button>\s*</div>', re.DOTALL)
content = alterar_hotel_pattern.sub('', content)

# 7. Update Footer Text Color
content = content.replace('<p class="text-sm text-slate-400">Copyright © 2025 ILC - Intercâmbio, Linguagem e Cultura</p>', '<p class="text-sm text-white">Copyright © 2025 ILC - Intercâmbio, Linguagem e Cultura</p>')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("compra.html updated successfully.")
