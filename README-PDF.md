Generar PDF reproducible (Puppeteer)
-----------------------------------

Este repositorio incluye un script que genera un PDF (A4) renderizando tu sitio con Puppeteer.

Pasos rápidos (Windows PowerShell):

1. Instala dependencias necesarias (ejecuta en la raíz del proyecto):

```powershell
# instala puppeteer como dependencia de desarrollo
npm install --save-dev puppeteer
```

2. Inicia tu servidor de desarrollo (u otra URL accesible):

```powershell
npm run dev
```

3. Genera el PDF (de forma opcional pasa --url y --output):

```powershell
npm run generate:pdf
# o bien
node ./scripts/generate-pdf.js --url http://localhost:3000 --output revista-ethics.pdf
```

Notas:
- El script abre la URL indicada y espera a que la red esté inactiva antes de guardar el PDF.
- Si necesitas encabezados/pies de página más personalizados, edita `scripts/generate-pdf.js`.
- En entornos sin GUI puede ser necesario ejecutar Puppeteer con opciones adicionales o usar una versión empaquetada (puppeteer-core + chrome instalado).
