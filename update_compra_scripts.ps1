# Atualizar compra.html para incluir o script de traduções
$file = "c:\Users\felip\Desktop\ILC\compra.html"
$content = Get-Content $file -Raw -Encoding UTF8

# Substituir a referência aos scripts
$oldScripts = '<script src="assets/js/idioma.js"></script>
    <script src="assets/js/compra.js"></script>'

$newScripts = '<script src="assets/js/compra.js"></script>
    <script src="assets/js/compraTranslations.js"></script>'

$content = $content.Replace($oldScripts, $newScripts)

$content | Set-Content $file -Encoding UTF8
Write-Host "Scripts atualizados no compra.html!"
