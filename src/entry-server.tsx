import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.tsx'

// Used at build time (scripts/prerender.mjs) to render the home page into dist/index.html
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
