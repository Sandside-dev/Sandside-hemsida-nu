# Sandside – hemsida (version 1)

Hemsidan för **Sandside UF**, ett UF-företag i Göteborg som bygger chattbottar, hemsidor och automatiska flöden åt småföretag.

Det här är **version 1** av sidan: en 3D-sol med vågor i toppen, en scroll-berättelse med kundfrågor som kommer vid fel tider, tjänster, priser, bokningskalender, team och en chattdemo ("Fråga Sol").

Byggd med [Astro](https://astro.build), Tailwind CSS, GSAP och three.js.

## Kom igång

Du behöver [Node.js](https://nodejs.org) version 22 eller senare.

```bash
git clone https://github.com/eskilfranlund-sys/sandside-hemsida.git
cd sandside-hemsida
npm install
npm run dev
```

Öppna sedan http://localhost:4321 i webbläsaren.

För att bygga en färdig version att lägga upp på nätet: `npm run build`. Resultatet hamnar i mappen `dist/`.

## Var saker finns

| Fil eller mapp | Innehåll |
|---|---|
| `src/data/site.ts` | All företagsfakta: kontakt, team, priser och löften. Ändra här först. |
| `src/components/` | En fil per avsnitt på sidan |
| `src/scripts/hero3d.ts` | 3D-solen och vågorna i toppen |
| `src/styles/global.css` | Färger och typsnitt |
| `CLAUDE.md` | Regler för ton och design när man bygger vidare med Claude Code |

## Versioner

Taggen `version-1` pekar på exakt den här versionen av sidan.
