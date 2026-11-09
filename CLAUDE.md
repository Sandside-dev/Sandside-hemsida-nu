# Sandside – hemsida

Sandside UF är ett UF-företag (Ung Företagsamhet) i Göteborg som drivs av fem elever. Det här är företagets hemsida: en startsida med flera sektioner, byggd med Astro, Tailwind och GSAP.

Versioner sparas i git: `version-1` är första versionen (3D, Smartsvar-stil). Version 2 bygger på analysen i `docs/analys-version-2.md` – läs den innan du ändrar designen.

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

- `src/data/site.ts` – **all företagsfakta**: telefon, mejl, kontaktperson, team, priser, löften. Ändra här först.
- `src/data/demos.ts` – exempelsamtalen i chattdemon högst upp (en per bransch).
- `src/styles/global.css` – färger, typsnitt och typografiklasser (`.h1`, `.h2`, `.h3`, `.lead`, `.eyebrow`, `.section`).
- `src/components/` – en fil per avsnitt, i samma ordning som på sidan: Header, Hero (+ ChatDemo), Problem, Solutions, Calculator, Pricing, Process, About, Security, Booking, Faq, Footer, ChatWidget.
- `src/scripts/main.ts` – sidhuvud, mobilmeny och inglidning (`data-reveal`).

## Ton i texterna

- Svenska, du-/ni-tilltal, korta meningar. Som en kunnig kollega, inte en reklambyrå.
- Konkret före snyggt: exempel från riktiga situationer (stegen, mötet, kvällen) och riktiga siffror.
- Förbjudna ord och fraser: revolutionera, sömlös, lås upp, nästa nivå, kraften i AI, i dagens digitala värld, skräddarsydd, banbrytande, framtidens.
- Undvik tre-listor överallt och tankstreck som stilgrepp.
- Nämn inga kunder med namn förrän Sandside uttryckligen sagt att det är okej (just nu: "en trafikskola").
- **Hitta aldrig på** kunder, recensioner, kundloggor, statistik eller certifieringar. Saknas något: skriv `ÄNDRA:` i en kommentar och använd en platshållare.

## Design (version 2)

Målet är att sidan ska kännas som ett riktigt företag, inte som en AI-mall. Se `docs/analys-version-2.md`.

- **Visa produkten, inte abstrakta bilder.** Chattdemon, samtalssammanfattningen och hemsidebilden är riktiga gränssnitt i HTML. Inga 3D-objekt, inga blobbar, inga ikoner i rundade rutor.
- **Typografi:** Schibsted Grotesk (variabel, lokal via fontsource) i vikt 500 för rubriker. `.h1` bara i hero, `.h2` för avsnitt (ca 44 px). Gör inte rubriker större eller fetare.
- **Rubriker är vanliga meningar** ("Vad det kostar", "Så går det till"). Inga tvådelade slagord som "Ett pris. En gång.", inga "/ Etiketter" i monospace.
- **Färger:** vitt, svart (`ink`), `sand` för omväxlande ytor, orange (`sun`) sparsamt: solen, steg 1, "skickat vidare"-markeringar.
- **Solen** är märket: en platt orange cirkel som skärs av en horisont (hero och sidfot). Inte blank, inte 3D.
- **Knappar:** `Button.astro`, rundade (pill). `dark` som huvudknapp, `text` för sekundära länkar.
- **Effekter med syfte:** chattdemon som skriver, notiserna i scroll-berättelsen och en lätt inglidning. Inte scramble-text, rullande remsor, pulserande prickar, avskurna hörn eller pop-up-chatt.
- **Variera uppbyggnaden.** Varje avsnitt ska ha egen layout, inte samma rubrik + stycke + kort-mall.
- Rutnät: lägg `min-w-0` på kolumner som innehåller brett innehåll, annars sticker det ut på mobilen.
- Testa alltid både dator (1440 px) och mobil (375 px). Animationer ska respektera `prefers-reduced-motion`.

## Smartsvar som förebild

Version 1 var inspirerad av smartsvar.se. Version 2 har gått vidare mot en egen stil, men berättelsen om kundfrågor vid fel tider finns kvar. Kopiera aldrig deras texter, bilder, 3D-filmer, logga, kundloggor, recensioner eller namnen på deras assistenter.

## Kvar före lansering

- Foton på teamet och Oscar (tas efter lovet) – lägg i `public/team/` och fyll i `photo` i `src/data/site.ts`.
- Stäm av punkterna i `Security.astro` mot de tjänster ni faktiskt använder.
- Bokningen skickar just nu ett förifyllt mejl – koppla till Cal.com eller ett formulärverktyg.
- Chattwidgeten är en demo med färdiga svar – byt mot er riktiga chattbot.
- Skriv integritetspolicyn (`src/pages/integritetspolicy.astro`).
- Analysverktyg: använd ett cookiefritt (t.ex. Plausible) eller lägg till samtyckesbanner.
