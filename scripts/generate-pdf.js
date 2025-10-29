#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

// Try to require puppeteer and show a helpful error if it's missing.
let puppeteer
try {
  puppeteer = require('puppeteer')
} catch (err) {
  console.error('\nError: puppeteer no está instalado.');
  console.error('Instálalo ejecutando desde la raíz del proyecto:');
  console.error('\n  npm install --save-dev puppeteer\n');
  console.error('O si prefieres no descargar Chromium, usa puppeteer-core y configura CHROME_PATH.');
  process.exit(1)
}

// Simple CLI: --url <url> --output <file>
// Minimal arg parsing to avoid adding dependencies
const args = process.argv.slice(2)
let url = 'http://localhost:3000'
let output = 'revista-ethics.pdf'
for (let i = 0; i < args.length; i++) {
  const a = args[i]
  if ((a === '--url' || a === '-u') && args[i+1]) { url = args[i+1]; i++ }
  else if ((a === '--output' || a === '-o') && args[i+1]) { output = args[i+1]; i++ }
}

;(async () => {
  console.log(`Generating PDF from ${url} → ${output}`)

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
  const page = await browser.newPage()

  // Set a large viewport so the page lays out like a desktop site
  await page.setViewport({ width: 1200, height: 800 })

  // Go to the URL and wait until network is idle to ensure images and styles are loaded
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 })

  // Optional: wait a short moment for any hydrate/animations to settle
  // some puppeteer versions may not expose page.waitForTimeout; use a Promise delay
  await new Promise((res) => setTimeout(res, 500))

  // Create header/footer templates (small example with page numbers)
  const headerTemplate = `<div style="font-size:10px; width:100%; text-align:center; color:#666;">
    <span>Ética en Red — Revista · ${new Date().getFullYear()}</span>
  </div>`

  const footerTemplate = `<div style="font-size:10px; width:100%; color:#666; display:flex; justify-content:space-between; padding:0 10mm;">
    <span>Universidad Mariano Gálvez</span>
    <span>Page <span class="pageNumber"></span> / <span class="totalPages"></span></span>
  </div>`

  const pdfPath = path.resolve(process.cwd(), output)

  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '12mm', bottom: '18mm', left: '10mm', right: '10mm' },
    displayHeaderFooter: true,
    headerTemplate,
    footerTemplate,
  })

  console.log('PDF generado en', pdfPath)
  await browser.close()
})().catch((err) => {
  console.error(err)
  process.exit(1)
})
