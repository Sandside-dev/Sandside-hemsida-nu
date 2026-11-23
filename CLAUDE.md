# Sandside – hemsida

Sandside UF är ett UF-företag (Ung Företagsamhet) i Göteborg som drivs av fem elever. Det här är företagets hemsida, byggd med Astro, Tailwind 4 och three.js.

Versioner sparas i git: taggen `version-1` är första versionen (3D, Smartsvar-stil), `version-2` bygger på `docs/analys-version-2.md`. Grenen `version-3-smartsvar` är byggd från grunden som en nära kopia av smartsvar.se, men bara för chattbottar och i orange, svart och vitt. Från version 1 kommer bara loggan, 3D-animationen av loggan och teamets namn och roller.

## Företaget (från affärsplanen – håll texterna i linje med detta)

- Affärsidé: Sandside hittar det som tar onödig tid i småföretag och bygger enkla digitala lösningar som gör jobbet snabbare, smidigare och billigare.
- I version 3 säljer vi **bara chattbottar**. Nämn inte AI-receptionist, hemsidor, flöden eller AI-genomgångar som tjänster.
- Målgrupp: mikro- och småföretag i tjänstebranscher – trafikskolor, frisörer, tatuerare, PT/träningsstudios, hantverk och bygg.
- Löften: fast pris innan vi börjar, kunden testar innan leverans, uppföljning efter en vecka, skriftlig instruktion, vanliga verktyg (inga låsningar).
- Leveranstid: 4–20 timmars arbete, men en till några veckor i kalendertid eftersom vi går i skolan. Lova inte "live på en vecka".
- Pris i version 3: tre planer i `src/data/site.ts` (Start, Standard, Företag). **Alla priser, villkor och årsrabatten är platshållare** tills Sandside bestämt dem.
- Data: n8n i Frankfurt, webbhotell inom EU. Personuppgiftsbiträdesavtal finns inte på plats än – skriv inte att vi har det.
- Ledningsgrupp: Oscar Westdahl (VD), Axel Larsson (ekonomi), Eskil Frånlund (produktion och kvalitet), Armin Madanee (försäljning), William de Andrade (marknad).

Starta lokalt: `npm run dev` (öppnas på http://localhost:4321). Bygg: `npm run build`.

## Var saker finns

- `src/data/site.ts` – **all företagsfakta**: mejl, telefon, sociala länkar, team, meny, branscher och priser. Ändra här först.
- `src/styles/global.css` – färger, typsnitt, typografi (`.h1`, `.h2`, `.h3`, `.lead`, `.mono`), knappar (`.btn-*`), avskurna hörn (`.cut-tr`, `.cut-br`), linjen med strecket (`.rule`) och inglidning (`data-reveal`).
- `src/components/` – en fil per avsnitt, i samma ordning som på startsidan: Header, Hero, Notifications (kundfrågorna som spelas upp som en kort film, utan att låsa scrollen), Solutions, Reference (kundcase och omdöme från JC Trafikskola), Cases, Security, Pricing, Booking, Faq, Footer, ChatWidget. Delar: Button, SectionLabel, Logo.
- `src/pages/` – `index.astro`, `om-oss.astro` (process och team), `integritetspolicy.astro`.
- `src/scripts/three-stage.ts` + `logo3d.ts` – loggan i 3D (från version 1). Används i hero, sidfoten och på om oss-sidan.
- `src/scripts/icons3d.ts` – 3D-ikonerna på korten under "Vår chattbot".
- `src/scripts/main.ts` – inglidning och texten som "scramblar" fram i etiketterna.
- `src/assets/sandside-logo.svg` – loggan (samma som i `/logo`).

## Ton i texterna

- Svenska, du-/ni-tilltal, korta meningar. Som en kunnig kollega, inte en reklambyrå.
- Konkret före snyggt: exempel från riktiga situationer och riktiga siffror.
- Förbjudna ord och fraser: revolutionera, sömlös, lås upp, nästa nivå, kraften i AI, i dagens digitala värld, skräddarsydd, banbrytande, framtidens.
- **Hitta aldrig på** kunder, recensioner, kundloggor, statistik eller certifieringar. Saknas något: skriv `ÄNDRA:` i en kommentar och använd en platshållare.

## Design (version 3, efter smartsvar.se)

- **Färger:** vitt, svart (`ink` #131313), ljusgrå yta (`surface` #f3f3f3) för kort och hero, och Sandsides orange (`orange` #ff6a13) där Smartsvar har sin gröna färg: pilrutor i knappar, aktiva val, bockar och detaljer. Orange text bara på svart bakgrund (kontrasten räcker inte på vitt).
- **Typsnitt:** Satoshi (lokala filer i `public/fonts`) i vikt 700 för rubriker och 500 för brödtext, Roboto Mono för etiketter som `/PRISER`.
- **Mått:** innehållsbredd 1240 px. H1 80 px, H2 64 px, H3 32 px på dator (48/40/26 på mobil), tät spärrning (−0,04em). Avsnitt har ungefär 100 px luft upp och ner.
- **Knappar:** `Button.astro` – 52 px höga, 4 px hörn, pilruta till höger som byts vid hover. `dark` som huvudknapp, `light` som andraval, `orange` på svart bakgrund.
- **Detaljer som hör till stilen:** etikett med linje och kort streck över varje avsnitt, avskurna hörn (hero, omdöme, kundcase, priskort, sidfot, FAQ), notiserna som spelas upp runt rubriken, chattknapp nere till höger.
- **Inget får låsa scrollen.** Inga fastnålade avsnitt eller extra höga sektioner som håller kvar besökaren.
- Rutnät: lägg `min-w-0` på kolumner med brett innehåll, annars sticker det ut på mobilen.
- Testa alltid både dator (1440 px) och mobil (375 px). Animationer ska respektera `prefers-reduced-motion`.
- Kopiera inte Smartsvars texter, bilder, logga, kundloggor, recensioner eller namnen på deras assistenter. Layouten får gärna likna.

## Kvar före lansering (sök efter `ÄNDRA` i koden)

- Rätt mejl, telefon, org.nr och sociala länkar i `src/data/site.ts`.
- Priser, planernas innehåll och årsrabatten i `src/data/site.ts`.
- Omdömet från JC Trafikskola i `Reference.astro` är ett utkast. Låt Jennifer godkänna texten innan sidan publiceras, och byt den skrivna loggan mot JC:s riktiga.
- `Cases.astro` visar exempel, inga riktiga kunder.
- Foton på teamet – lägg i `public/team/` och fyll i `photo` i `src/data/site.ts`.
- Stäm av punkterna i `Security.astro` mot de tjänster ni faktiskt använder.
- Bokningen skickar ett förifyllt mejl – koppla till Cal.com eller ett formulärverktyg och sätt rätt tider i `Booking.astro`.
- Chattwidgeten är en demo med färdiga svar – byt mot er riktiga chattbot.
- Skriv integritetspolicyn (`src/pages/integritetspolicy.astro`).
- Analysverktyg: använd ett cookiefritt (t.ex. Plausible) eller lägg till samtyckesbanner.
