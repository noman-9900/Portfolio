Set-Location apps\portfolio
$env:PORT = "5173"
$env:BASE_PATH = "/"
pnpm run build
netlify deploy --prod --dir=dist/public --site=stalwart-piroshki-e0cfac
Set-Location ..\..~