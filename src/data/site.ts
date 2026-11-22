// ─────────────────────────────────────────────────────────────
// Allt som är företagsfakta ligger här, så du ändrar på ett ställe.
// Rader märkta ÄNDRA är platshållare som måste bytas före lansering.
// Källa för det övriga: Affärsplan Sandside UF 2026.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Sandside',
  legalName: 'Sandside UF',
  email: 'info@sandside.se',
  salesPhone: '072-453 80 42',
  city: 'Göteborg',

  // Personen som visas vid bokningen. Lägg en bild i /public och skriv sökvägen i photo.
  contact: {
    name: 'Oscar Westdahl',
    role: 'VD',
    initials: 'OW',
    photo: '', // ÄNDRA: lägg bilden i /public/team/ och skriv t.ex. '/team/oscar.jpg'
  },

  // Chattassistenten på sidan
  bot: {
    name: 'Sol',
  },

  // Det som pågår just nu (visas i kund-avsnittet). Bara sanna saker.
  current: {
    label: 'Pågår nu',
    text: 'Vi bygger en chattbot åt en trafikskola som svarar på elevernas enklare frågor.', // Nämn inte kunden med namn än
  },

  // Det kunder får hos oss, oavsett lösning (från affärsplanen)
  promises: [
    'Vi gör upp om vad vi bygger och vad det kostar innan vi börjar',
    'Ni testar lösningen innan vi lämnar över den',
    'Vi följer upp efter en vecka och ni får en skriftlig instruktion',
  ],
};

// Lägg en extern bokningslänk här när den finns. Tom sträng använder företagsmejlen.
export const booking = {
  url: '',
};

const meetingSubject = 'Förslag på tid för ett första möte';
const meetingBody = [
  'Hej Sandside!',
  '',
  'Företag:',
  'Tider som passar oss:',
  '',
  'Vi vill gärna prata om en chatbot för vår hemsida.',
].join('\n');

export const meetingHref = booking.url || `mailto:${site.email}?subject=${encodeURIComponent(meetingSubject)}&body=${encodeURIComponent(meetingBody)}`;
export const meetingLabel = booking.url ? 'Boka ett möte' : 'Föreslå en mötestid';

// Ledningsgruppen. Stäm av med var och en att de vill synas på sidan.
// Lägg bilder i /public/team/ och skriv sökvägen i photo.
export const team = [
  { name: 'Oscar Westdahl', role: 'VD', text: 'Driver ett eget vedföretag sedan 2025 och vet hur det är att sköta allt själv.', photo: '' },
  { name: 'Axel Larsson', role: 'Ekonomi', text: 'Har byggt ett system som automatiskt samlar filer från databaser runt om i världen, åt ett riktigt företag.', photo: '' },
  { name: 'Eskil Frånlund', role: 'Produktion och kvalitet', text: 'Ser till att varje lösning fungerar som den ska innan den lämnas över.', photo: '' },
  { name: 'Armin Madanee', role: 'Försäljning', text: 'Ofta den ni pratar med först. Van vid högt tempo och många kunder.', photo: '' },
  { name: 'William de Andrade', role: 'Marknad', text: 'Tennistränare sedan fyra år och van att lyssna in vad folk behöver.', photo: '' },
];

export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`;

// Fakta som rullar under hero-sektionen. Bara saker som är sanna!
export const facts = [
  'UF-företag från Göteborg',
  'Fast pris innan vi börjar',
  'Ni testar innan leverans',
  'Ni äger er bot och era data',
  'Svar på vanliga kundfrågor',
  'Uppföljning efter en vecka',
  'Inga månadsavgifter till oss',
  'Vanliga verktyg, inga låsningar',
];

// Priser. Chattbot: 8 000 kr engångspris (bekräftat). Övriga får fast pris efter första mötet.
// Driften av AI och verktyg betalar kunden själv, i sitt eget konto.
export const plans = [
  {
    id: 'chattbot',
    name: 'Chattbot',
    tagline: 'Svarar era kunder dygnet runt',
    price: 8000 as number | null,
    recommended: true,
    features: [
      'Vi bygger och tränar botten på er information',
      'Vi sätter upp den i ert eget konto, så ni har full kontroll',
      'Ni testar den innan vi lämnar över',
      'Skriftlig instruktion och uppföljning efter en vecka',
      'Inga månadsavgifter till oss',
    ],
    cta: 'Boka ett första möte',
  },
];
