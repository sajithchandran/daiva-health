# Daiva Health

The website for **Daiva Health**: free and open-source healthcare software for every hospital, clinic, and doctor.

Daiva Health is building a next-generation ecosystem of digital and AI-powered healthcare solutions so that healthcare providers of all sizes can adopt advanced technology without cost barriers. This site presents the product catalog, the vision, and the company's policies.

- **Live site:** https://daiva.health/
- **GitHub organization:** https://github.com/daivahealth

## Product catalog

| Product | Category | What it does | Links |
|---|---|---|---|
| **athma CE** | HIS / EMR | Open-source Hospital Information System (HIS) and Electronic Medical Record (EMR) for modern healthcare facilities. | [GitHub](https://github.com/daivahealth/athma-ce) |
| **OpenMedForm** | AI Forms | AI-powered clinical form builder for designing, scoring, and embedding structured clinical forms and assessments into any EMR/EHR. | [Website](https://openmedform.daiva.health/) · [GitHub](https://github.com/daivahealth/openmedform) |
| **athma edge** | BCP | Business Continuity solution that keeps clinical care running when the cloud HIS/EMR is unreachable: access active patient data, record notes, and register walk-ins locally. | [GitHub](https://github.com/daivahealth/athma-edge) |
| **padma** | Clinical Pathways | Standardizes care and improves patient outcomes through evidence-based protocols. | [GitHub](https://github.com/daivahealth/padma) |
| **aiorta** | Clinical Research | Uses AI and clinical data to accelerate medical discoveries and insights. | [GitHub](https://github.com/daivahealth/aiorta) |
| **SprintIQ** | Engineering | AI-powered Engineering Intelligence Platform that turns signals from planning, code, CI, and quality tools into delivery metrics, risks, and insights. | [GitHub](https://github.com/daivahealth/sprintiq) |

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for development and builds
- [Framer Motion](https://motion.dev/) for animations (respects the visitor's reduced-motion setting)
- [Lucide](https://lucide.dev/) icons
- [Outfit](https://fonts.google.com/specimen/Outfit) font, self-hosted via [@fontsource/outfit](https://fontsource.org/fonts/outfit) (weights 300, 400, 600, 700)

The site is a single-page app with no backend. The build output is plain static files.

## Getting started

Requires **Node.js 20.19+ or 22.12+** (needed by Vite).

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:5173.

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Type-check and build the production site into `dist/` |
| `npm run preview` | Serve the built `dist/` locally to check it |
| `npm run lint` | Run ESLint |

## Project structure

```
index.html                 Page shell: SEO meta tags, structured data (JSON-LD), logo preload
public/                    Files served as-is from the site root
  logo-600.webp            Header logo (logo-900.webp for high-resolution screens)
  favicon.png
  og-image.jpg             Image shown when the site is shared on social media
  robots.txt               Crawler rules, including AI crawlers
  sitemap.xml
  llms.txt                 Plain-text site summary for AI models
  site.webmanifest
  _headers                 Netlify caching rules
src/
  main.tsx                 App entry point
  App.tsx                  Home page, product list, footer, and page switching
  index.css                Global styles and theme colors
  components/
    Header.tsx             Logo header
    ProductCard.tsx        A product card in the catalog
    AboutUs.tsx            About Us page
    VisionDetails.tsx      Our Vision page
    TermsConditions.tsx    Terms & Conditions page
    PrivacyPolicy.tsx      Privacy Policy page
    PageLayout.tsx         Shared layout for the content pages
    DivineBackground.tsx   Page background
```

## Adding or changing a product

Products are listed in the `products` array in `src/App.tsx`. Each entry has a `title`, `category`, `description`, `githubUrl`, an optional `websiteUrl`, an `icon` from `lucide-react`, and an animation `delay`.

Product details also appear in places that search engines and AI assistants read. When you add, rename, or remove a product, update these too:

- `index.html`: the product list in the JSON-LD structured data, the FAQ answers if relevant, and the `<noscript>` fallback list
- `public/llms.txt`: the product list

## SEO, AEO, and GEO

The site is set up to be found by search engines (SEO), answer engines (AEO), and AI-powered search (GEO):

- **Meta tags** in `index.html`: title, description, canonical URL, Open Graph, and Twitter cards
- **Structured data** (JSON-LD) in `index.html`: Organization, WebSite, the product catalog as `SoftwareApplication` entries, and an FAQ
- **`<noscript>` fallback** so crawlers that don't run JavaScript still see the products
- **`robots.txt`** allowing all crawlers, including GPTBot, ClaudeBot, PerplexityBot, and Google-Extended
- **`sitemap.xml`** and **`llms.txt`**

All of these use `https://daiva.health/` as the site address. If the domain changes, update it in `index.html`, `public/robots.txt`, `public/sitemap.xml`, and `public/llms.txt`.

## Deployment

The site is hosted on [Netlify](https://www.netlify.com/). Run `npm run build` and publish the contents of `dist/`. No server-side code or environment variables are needed.

`public/_headers` tells Netlify to cache everything under `/assets/` permanently. Vite gives those files a content hash in their name, so any change produces a new URL. This also lets the font preloads (added at build time by the small plugin in `vite.config.ts`) be reused instead of re-checked with the server.
