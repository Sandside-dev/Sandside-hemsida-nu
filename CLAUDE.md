# Sandside – hemsida

Sandside UF är ett UF-företag (Ung Företagsamhet) i Göteborg som drivs av fem elever. Det här är företagets hemsida: en startsida med flera sektioner, byggd med Astro, Tailwind, GSAP och three.js.

## Företaget (från affärsplanen – håll texterna i linje med detta)

- Affärsidé: Sandside hittar det som tar onödig tid i småföretag och bygger enkla digitala lösningar som gör jobbet snabbare, smidigare och billigare.
- Tjänster: chattbottar (huvudprodukt), hemsidor (WordPress), automatiska arbetsflöden (n8n) och AI-genomgångar.
- Målgrupp: mikro- och småföretag i tjänstebranscher – trafikskolor, frisörer, tatuerare, PT/träningsstudios, hantverk och bygg.
- Löften: fast pris innan vi börjar, kunden testar innan leverans, uppföljning efter en vecka, skriftlig instruktion, botten ligger i kundens eget konto, vanliga verktyg (inga låsningar).
- Leveranstid: 4–20 timmars arbete, men en till några veckor i kalendertid eftersom vi går i skolan. Lova inte "live på en vecka".
- Pris: chattbot 8 000 kr i engångspris, uppsatt i kundens eget konto så att kunden har full kontroll. Inga månadsavgifter till Sandside; driften av AI och verktyg betalar kunden direkt till leverantören. Övriga tjänster: fast pris efter första mötet.
- AI-receptionist i telefon säljs också (bekräftat), även om den inte står i affärsplanen.
- Data: n8n i Frankfurt, webbhotell inom EU. Personuppgiftsbiträdesavtal finns inte på plats än – skriv inte att vi har det.
- Ledningsgrupp: Oscar Westdahl (VD), Axel Larsson (ekonomi), Eskil Frånlund (produktion, kvalitet, hållbarhet), Armin Madanee (försäljning), William de Andrade (marknad).

Starta lokalt: `npm run dev` (öppnas på http://localhost:4321). Bygg: `npm run build`.

## Var saker finns

- `src/data/site.ts` – **all företagsfakta**: telefon, mejl, kontaktperson, priser, pilotkundserbjudande, fakta i rullande listan. Ändra här först.
- `src/styles/global.css` – färger, typsnitt och återanvända klasser (`.display`, `.label`, `.cut-tr`, `.cut-br`).
- `src/components/` – en fil per sektion, i samma ordning som på sidan: Header, Hero, Problem, Solutions, Process, Pilot, Security, Pricing, Booking, Faq, Footer, ChatWidget.
- `src/scripts/hero3d.ts` – 3D-solen och vågorna i toppen. `icon3d.ts` – 3D-ikonerna på lösningskorten. `three-stage.ts` – gemensam 3D-uppsättning och material.
- `src/scripts/main.ts` – meny, inglidning (`data-reveal`) och scramble-text (`data-scramble`).

## Ton i texterna

- Svenska, du-/ni-tilltal, korta meningar. Som en kunnig kollega, inte en reklambyrå.
- Konkret före snyggt: exempel från riktiga situationer (stegen, mötet, kvällen) och riktiga siffror.
- Förbjudna ord och fraser: revolutionera, sömlös, lås upp, nästa nivå, kraften i AI, i dagens digitala värld, skräddarsydd, banbrytande, framtidens.
- Undvik tre-listor överallt och tankstreck som stilgrepp.
- Nämn inga kunder med namn förrän Sandside uttryckligen sagt att det är okej (just nu: "en trafikskola").
- **Hitta aldrig på** kunder, recensioner, kundloggor, statistik eller certifieringar. Saknas något: skriv `ÄNDRA:` i en kommentar och använd en platshållare.

## Design

- Färger: vitt, svart (`ink`), varma ljusa ytor (`sand`) och orange (`sun`) **bara som detalj**: knappfyrkanter, prickar, etiketter, solen.
- Typsnitt: Satoshi (rubriker och brödtext), JetBrains Mono (små etiketter). Båda ligger lokalt – länka inte in Google Fonts.
- Rubriker: `.display` (fet, tät, negativ bokstavsavstånd). Sektionsetikett ovanför: `<p class="label label-line" data-scramble>/ Namn</p>`.
- Knappar: `Button.astro` (svart med orange pilruta, eller vit variant).
- Avskurna hörn (`.cut-tr`, `.cut-br`) på stora ytor – ett återkommande drag.
- Inga gradienter i bakgrunder, inga glaseffekter, inga emoji-ikoner, inga stockfoton.
- Testa alltid både dator (1440 px) och mobil (375 px). Animationer ska respektera `prefers-reduced-motion`.

## Smartsvar som förebild

Sidan är inspirerad av smartsvar.se i struktur, layout och effekter. Kopiera aldrig deras texter, bilder, 3D-filmer, logga, kundloggor, recensioner eller namnen på deras assistenter.

## Kvar före lansering

- Alla rader märkta `ÄNDRA` i `src/data/site.ts` (telefon, mejl, org.nr, kontaktperson, foto, priser).
- Stäm av punkterna i `Security.astro` mot de tjänster ni faktiskt använder.
- Bokningen skickar just nu ett förifyllt mejl – koppla till Cal.com eller ett formulärverktyg.
- Chattwidgeten är en demo med färdiga svar – byt mot er riktiga chattbot.
- Skriv integritetspolicyn (`src/pages/integritetspolicy.astro`).
- Analysverktyg: använd ett cookiefritt (t.ex. Plausible) eller lägg till samtyckesbanner.
