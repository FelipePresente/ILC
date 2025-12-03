
$file = "c:\Users\felip\Desktop\ILC\index.html"
$lines = Get-Content $file

# Update lines with onclick events
# Note: Array indices are 0-based, so line 397 becomes index 396
$lines[396] = '                        <div onclick="window.location.href=''compra.html?title=Quilombas&country=Brasil&price=2.115&ida=01/12/2025&volta=15/12/2025''" class="bg-white rounded-xl grid snap-start w-60 shadow-md cursor-pointer hover:shadow-xl transition-shadow">'
$lines[422] = '                        <div onclick="window.location.href=''compra.html?title=Andes&country=Bolívia&price=3.240&ida=03/12/2025&volta=18/12/2025''" class="bg-white rounded-xl grid snap-start w-60 shadow-md cursor-pointer hover:shadow-xl transition-shadow">'
$lines[448] = '                        <div onclick="window.location.href=''compra.html?title=Guajira&country=Venezuela&price=2.430&ida=05/12/2025&volta=20/12/2025''" class="bg-white rounded-xl grid snap-start w-60 shadow-md cursor-pointer hover:shadow-xl transition-shadow">'
$lines[474] = '                        <div onclick="window.location.href=''compra.html?title=Mapuche&country=Chile&price=3.400&ida=09/12/2025&volta=24/12/2025''" class="bg-white rounded-xl grid snap-start w-60 shadow-md cursor-pointer hover:shadow-xl transition-shadow">'
$lines[500] = '                        <div onclick="window.location.href=''compra.html?title=Mamacha&country=Peru&price=4.100&ida=02/02/2026&volta=20/02/2026''" class="bg-white rounded-xl grid snap-start w-60 shadow-md cursor-pointer hover:shadow-xl transition-shadow">'

$lines | Set-Content $file -Encoding UTF8
Write-Host "Done."
