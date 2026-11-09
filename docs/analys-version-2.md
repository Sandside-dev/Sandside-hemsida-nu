# Analys: varför version 1 känns AI-gjord och vad version 2 ändrar

Datum: 9 november 2026. Version 1 är sparad i git med taggen `version-1`.

## Kort sammanfattning

Version 1 ser ut som en mall. Det beror inte på ett enskilt fel. Problemet är att nästan varje val är standardvalet för hemsidor som byggs med AI och Framer-mallar under 2025–26: fet Satoshi, jättestora rubriker överallt, "/ Etikett"-text i monospace som "scramblar", avskurna hörn, en rullande faktaremsa, abstrakt 3D, ikoner i rundade rutor och slagord i två korta meningar ("Ett pris. En gång.").

De proffsiga sajterna gör tvärtom. De **visar produkten direkt**, har **lugn typografi med tydlig hierarki** och **skriver vanliga, konkreta meningar** i stället för slagord. De lägger alla effekter på en sak, och den saken är produkten.

## Vad jag tittade på

Måtten är uppmätta direkt på sidorna (rubrikstorlek och vikt i webbläsaren på 1440 px bredd).

| Sajt | Målgrupp | Huvudrubrik | Avsnittsrubriker | Vad som syns direkt i hero |
|---|---|---|---|---|
| **Sierra** (sierra.ai) | Storföretag | 65 px, GT America | Måttliga | Helskärmsvideo med en sovande bebis, sedan ett riktigt AI-meddelande ("Hi, Nicholas! Ready to reorder your usual?") |
| **Decagon** (decagon.ai) | Storföretag | 72 px, vikt **500** | 40 px, vikt 450 | Rubrik, mejlfält, lugn bakgrund. Mycket luft. |
| **Intercom Fin** (fin.ai) | Alla storlekar | 72 px, serif, vikt **300** | 32 px | Ett riktigt ärende i chatten: kunden byter adress, laddar upp en PDF och får bekräftelse. Bakom: en orange 3D-rendering. |
| **Vapi** (vapi.ai) | Utvecklare | 80 px, vikt 600 | 40 px, vikt 500 | Röstdemo som går att starta direkt: välj scenario och tryck "Start call". Kundcitat direkt under. |
| **Goodcall** (goodcall.com) | **Småföretag** | 80 px, vikt 800 | 40 px | Ett exempel på en rörfirma, "Rosie's Plumbing", som sätts upp steg för steg (namn, röst, hälsning). |
| **Rosie** (heyrosie.com) | **Småföretag** | 53 px, vikt 700 | 28 px | Priset står i hero ("Starting at $49/month"), med tre konkreta fördelar och "Trusted by 2,000 local businesses". |
| **Lindy** (lindy.ai) | Småföretag/team | 104 px, serif, vikt **400** | 46 px | Ett textfält där man skriver en uppgift, med förslag som knappar. Hela sajten är skriven i jag-form av AI:n. |
| **Ebbot** (ebbot.com, svensk) | Kundtjänstteam | 65 px, vikt 500 | 65 px | Grönt "norrsken"-sken. Ser mest generisk ut av alla. |
| **Smartsvar** (förebilden) | Svenska företag | 56 px, vikt 700 | – | 3D-video och berättelsen med kundfrågor vid fel tider |
| **Sandside v1** | Småföretag | **88 px, vikt 700** | **76 px, vikt 700** | Abstrakt 3D-sol med vågor |

## Sju mönster hos de proffsiga sajterna

1. **Produkten syns i hero.** Sex av åtta visar ett riktigt samtal, en riktig inställning eller en demo som går att använda direkt. Ingen använder ett abstrakt objekt som enda bild. Fins 3D-rendering ligger *bakom* ett riktigt chattärende.
2. **Tydlig hierarki.** Huvudrubriken är 53–80 px och avsnittsrubrikerna 28–46 px, ungefär hälften. Hos oss är avsnittsrubrikerna nästan lika stora som huvudrubriken, så allt skriker lika högt.
3. **Lättare vikt.** De mest exklusiva använder vikt 300–500. Fet (700–800) används av de mer säljiga småföretagssajterna, och då med mindre storlek.
4. **Konkreta exempel i stället för abstrakta löften.** Goodcall visar "Rosie's Plumbing" och Fin visar en adressändring med PDF. Konkreta exempel är svåra att fejka, och det är därför de känns äkta.
5. **Rubriker är vanliga meningar.** Goodcall skriver "Forward your existing number, or get a brand new one." och "No per-minute charges. A bill you can predict.". Fin skriver "Transparent pricing". Inga ordvitsar, inga tvådelade slagord.
6. **Få effekter, med syfte.** Animationerna visar produkten: chatten skriver, samtalet startar. Ingen har scramble-text eller pulserande prickar på varje rubrik.
7. **Ett eget uttryck.** Lindy är skriven i jag-form av AI:n, Sierra använder mänskliga bilder och Goodcall låter Gabi bygga agenten. Varje sajt har en idé som håller hela vägen.

## Varför version 1 känns "medel AI-gjord"

Ärlig genomgång av den egna sidan:

1. **Samma uppbyggnad i varje avsnitt.** Etikett, jätterubrik till vänster, stycke till höger, kort under. Det upprepas sju gånger. Mönstret känns igen direkt från AI-genererade sidor.
2. **Typografin skriker hela tiden.** Satoshi Bold med tät spärrning på 76–88 px i nästan varje avsnitt. Satoshi är dessutom det vanligaste "proffsiga gratistypsnittet" i Framer-mallar. Smartsvar använder det också.
3. **Mall-effekter staplade på varandra.** Scramble-etiketter ("/ Priser"), avskurna hörn på allt, rullande faktaremsa, pulserande prickar, inglidning på varje element och jätteordbild i sidfoten. Var för sig går de an, men tillsammans blir det ett mallkatalog.
4. **Abstrakt 3D i stället för produkten.** Sol, vågor, pratbubblor och ljudvåg i blank plast är typiskt för "AI-blob"-estetiken. Besökaren ser aldrig vad en chattbot från Sandside faktiskt *gör*.
5. **Slagord i två korta meningar.** "Ta ledigt. Kunderna får svar ändå." och "Ett pris. En gång." samt "Kunderna hör av sig när det passar dem. Inte när det passar er." Den rytmen är en av de tydligaste tecknen på AI-skriven text.
6. **Ikoner i rundade rutor och orange bockar.** Det är standardkomponenter. Ingen av de stora sajterna använder dem i sina viktigaste delar.
7. **Initialer i stället för människor.** Platshållarna visar att något saknas. Då är en ren textlista bättre tills fotona finns.
8. **Chatten hoppar upp själv.** Pop-up efter några sekunder känns billigt. Fin och Sierra har bara en diskret knapp.
9. **Ingen siffra som besökaren kan känna igen sig i.** Affärsplanen har en bra uträkning: en frisör som lägger 30 minuter om dagen på samma frågor lägger cirka 10 timmar i månaden, värda 3 000 kr. Den syns inte på sidan.

## Det Sandside har som de stora inte har

- **Riktiga, lokala människor.** Fem namn i Göteborg, ingen anonym plattform.
- **Ett enkelt pris.** 8 000 kr, en gång. Rosie lägger priset i hero, och det kan vi också göra.
- **Kunden äger botten.** Den ligger i kundens eget konto, och ingen av de stora erbjuder det.
- **Ärlighet.** "Vi har inga kundcase än och tänker inte hitta på några." Det sticker ut i en bransch full av överdrifter.
- **Målbranscher med vardagliga frågor.** Trafikskolor, frisörer, tatuerare, PT och hantverkare gör det lätt att visa konkreta exempel, som Goodcall gör med rörfirman.

## Ändringar i version 2

| Problem | Ändring |
|---|---|
| Produkten syns inte | **Hero visar en riktig chattdemo** med fem branscher (trafikskola, frisör, tatuerare, PT och hantverkare) som skriver fram realistiska samtal. Ett av dem slutar med att botten skickar frågan vidare till personalen. |
| Abstrakt 3D | Tre.js och alla 3D-objekt är borta. Kvar finns en **platt orange sol** som går ned bakom horisonten, som ett grafiskt märke i stället för ett blankt plastobjekt. Sidan laddar också ~560 kB mindre JavaScript. |
| Typografin skriker | Nytt typsnitt, **Schibsted Grotesk** (nordiskt, gjort för Schibsteds tidningar), i vikt 500. Huvudrubrik ~72 px, avsnittsrubriker ~44 px. |
| Mall-effekter | Borttaget: scramble-text, "/ Etiketter", avskurna hörn, rullande faktaremsa, pulserande prickar, jätteordbild i sidfoten och pop-up-chatt. |
| Slagord | Alla rubriker är omskrivna till vanliga meningar: "En chattbot som svarar era kunder medan ni jobbar", "Det här bygger vi", "Vad kostar frågorna er i dag?" och "Boka ett möte med Oscar". |
| Samma avsnittsmall överallt | Varje avsnitt har en egen uppbyggnad: demo, notisberättelse, produktbilder, kalkylator, tidslinje, mörkt teamavsnitt, prislista och kalender. |
| Ikoner och bockar | Ersatta med små **produktbilder**: en hemsida med chatt i hörnet, en samtalssammanfattning och listor med tydlig typografi. |
| Ingen siffra att känna igen sig i | Ny **kalkylator** baserad på affärsplanen: frågor per dag, minuter per fråga, timvärde och hur stor andel botten klarar. Den visar tid och kronor per månad och när de 8 000 kr är intjänade. |
| Initialer | Teamet visas som en ren lista med namn, roll och en mening tills fotona finns. |
| Menyn | Länkar direkt i sidhuvudet på dator, och meny bara på mobilen. |

## Det bara ni kan göra för att lyfta sidan mer

1. **Riktiga foton** på er fem, gärna ute hos en kund eller i Göteborg. Inga studiofoton.
2. **Er riktiga chattbot** i stället för demon "Sol". Ni bygger dem redan i n8n.
3. **Ett första kundcitat** när trafikskolan är levererad, med siffror ("botten svarade på 140 frågor första månaden").
4. **Egen domän** (sandside.se) och en kort integritetspolicy.
