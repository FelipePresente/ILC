# Fix encoding issues in index.html
$file = "c:\Users\felip\Desktop\ILC\index.html"
$content = Get-Content $file -Raw -Encoding UTF8

# Replace all incorrectly encoded characters
$replacements = @{
    'nÃ³s' = 'nós'
    'IntercÃ¢mbios' = 'Intercâmbios'
    'intercÃ¢mbio' = 'intercâmbio'
    'pÃ¡gina' = 'página'
    'EspaÃ§ador' = 'Espaçador'
    'conteÃºdo' = 'conteúdo'
    'JÃ¡' = 'Já'
    'CondiÃ§Ãµes' = 'Condições'
    'UsuÃ¡rio' = 'Usuário'
    'AmÃ©rica' = 'América'
    'vocÃª' = 'você'
    'experiÃªncias' = 'experiências'
    'agÃªncia' = 'agência'
    'conexÃ£o' = 'conexão'
    'espaÃ§o' = 'espaço'
    'Ã©' = 'é'
    'atravÃ©s' = 'através'
    'atÃ©' = 'até'
    'BolÃ­via' = 'Bolívia'
    'Â©' = '©'
}

foreach ($key in $replacements.Keys) {
    $content = $content.Replace($key, $replacements[$key])
}

$content | Set-Content $file -Encoding UTF8
Write-Host "index.html encoding fixed."
