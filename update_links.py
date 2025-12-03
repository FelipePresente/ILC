
import os

file_path = r'c:\Users\felip\Desktop\ILC\index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Define replacements (line_index is 0-based, so subtract 1 from view_file lines)
replacements = {
    396: {
        'title': 'Quilombas',
        'country': 'Brasil',
        'price': '2.115',
        'ida': '01/12/2025',
        'volta': '15/12/2025'
    },
    422: {
        'title': 'Andes',
        'country': 'Bolívia',
        'price': '3.240',
        'ida': '03/12/2025',
        'volta': '18/12/2025'
    },
    448: {
        'title': 'Guajira',
        'country': 'Venezuela',
        'price': '2.430',
        'ida': '05/12/2025',
        'volta': '20/12/2025'
    },
    474: {
        'title': 'Mapuche',
        'country': 'Chile',
        'price': '3.400',
        'ida': '09/12/2025',
        'volta': '24/12/2025'
    },
    500: {
        'title': 'Mamacha',
        'country': 'Peru',
        'price': '4.100',
        'ida': '02/02/2026',
        'volta': '20/02/2026'
    }
}

for line_idx, data in replacements.items():
    original_line = lines[line_idx]
    if 'class="bg-white rounded-xl grid snap-start w-60 shadow-md cursor-pointer"' in original_line:
        new_line = f'                        <div onclick="window.location.href=\'compra.html?title={data["title"]}&country={data["country"]}&price={data["price"]}&ida={data["ida"]}&volta={data["volta"]}\'" class="bg-white rounded-xl grid snap-start w-60 shadow-md cursor-pointer hover:shadow-xl transition-shadow">\n'
        lines[line_idx] = new_line
        print(f"Updated line {line_idx + 1}")
    else:
        print(f"Warning: Line {line_idx + 1} did not match expected content: {original_line.strip()}")

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Done.")
