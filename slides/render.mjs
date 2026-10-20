import { Marp } from '@marp-team/marp-core'
import fs from 'node:fs'

// WeasyPrint cannot render Marp's inline SVG wrappers, so emit plain sections
// and paginate them with @page instead.
const [src, out] = process.argv.slice(2)
const marp = new Marp({ html: true, inlineSVG: false, script: false })
const { html, css } = marp.render(fs.readFileSync(src, 'utf8'))
const page = `@page { size: 1280px 720px; margin: 0 }
html, body { margin: 0; padding: 0; background: #0a0a0a }
div.marpit > section { page-break-after: always; break-after: page; overflow: hidden }`
fs.writeFileSync(out, `<!doctype html><html><head><meta charset="utf-8"><style>${css}\n${page}</style></head><body>${html}</body></html>`)
