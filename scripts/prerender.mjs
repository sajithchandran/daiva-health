// Renders the home page to static HTML and injects it into dist/index.html,
// so crawlers that don't run JavaScript still see the H1, intro and products.
import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const indexPath = `${root}dist/index.html`
const serverEntry = pathToFileURL(`${root}dist-ssr/entry-server.js`).href

const { render } = await import(serverEntry)
const template = await readFile(indexPath, 'utf8')
const placeholder = '<!--app-html-->'

if (!template.includes(placeholder)) {
  throw new Error(`prerender: ${placeholder} not found in dist/index.html`)
}

await writeFile(indexPath, template.replace(placeholder, render()))
await rm(`${root}dist-ssr`, { recursive: true, force: true })
console.log('prerender: home page rendered into dist/index.html')
