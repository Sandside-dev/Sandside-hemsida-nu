// ─────────────────────────────────────────────────────────────
// Företagsfakta på ett ställe. Ändra här, så ändras hela sidan.
// Allt som är märkt ÄNDRA är platshållare som ska bytas före lansering.
// Från version 1 kommer bara namnen och rollerna i `team`.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Sandside',
  legalName: 'Sandside UF',
  city: 'Göteborg',
  email: 'hej@sandside.se', // ÄNDRA: rätt mejladress
  phone: '', // ÄNDRA: telefonnummer, t.ex. '070-000 00 00'. Tomt = visas inte.
  orgNr: '', // ÄNDRA: organisationsnummer. Tomt = visas inte.
  social: [
    { label: 'LinkedIn', href: '#' }, // ÄNDRA: länkar till era konton
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
  ],
  // Chatten nere i hörnet
  chat: {
    name: 'Sandside-chatten',
    button: 'Fråga oss',
  },
};

// Ledningsgruppen (namn och roller från version 1).
// ÄNDRA: lägg foton i /public/team/ och skriv sökvägen i photo, t.ex. '/team/oscar.jpg'.
export const team = [
  { name: 'Oscar Westdahl', role: 'VD', photo: '' },
  { name: 'Axel Larsson', role: 'Ekonomi', photo: '' },
  { name: 'Eskil Frånlund', role: 'Produktion och kvalitet', photo: '' },
  { name: 'Armin Madanee', role: 'Försäljning', photo: '' },
  { name: 'William de Andrade', role: 'Marknad', photo: '' },
];

// Den som visas i bokningen
export const bookingContact = team[0];

export const nav = [
  { label: 'Lösningen', href: '/#losningen' },
  { label: 'Exempel', href: '/#exempel' },
  { label: 'Priser', href: '/#priser' },
  { label: 'Om oss', href: '/om-oss' },
  { label: 'FAQ', href: '/#faq' },
];

// Branscherna som rullar under knapparna i hero
export const industries = ['Trafikskolor', 'Frisörer', 'Tatuerare', 'PT och gym', 'Hantverkare'];

// ÄNDRA: alla priser, gränser och villkor nedan är platshållare.
export const yearlyDiscount = 0.2; // ÄNDRA: rabatt vid årsvis betalning (0.2 = 20 %)

export const plans = [
  {
    id: 'start',
    name: 'Start',
    tagline: 'För er som vill komma igång',
    price: 999 as number | null,
    featured: false,
    features: [
      'Chattbot på hemsidan med er logga och era färger',
      'Tränad på innehållet på er hemsida',
      'Skickar vidare frågor den inte kan svara på',
      'Månadsrapport över vad kunderna frågar',
    ],
    cta: 'Välj Start',
  },
  {
    id: 'standard',
    name: 'Standard',
    tagline: 'För företaget med många kundfrågor',
    price: 1999 as number | null,
    featured: true,
    features: [
      'Allt i Start, plus:',
      'Tränas även på prislistor, PDF:er och dokument',
      'Samlar in kontaktuppgifter från intresserade kunder',
      'Egen ton och personlighet i svaren',
      'Vi går igenom samtalen med er varje månad',
    ],
    cta: 'Välj Standard',
  },
  {
    id: 'foretag',
    name: 'Företag',
    tagline: 'För flera orter, många besökare eller kopplingar till era system',
    price: null as number | null,
    featured: false,
    features: [
      'Allt i Standard, plus:',
      'Koppling till ert bokningssystem',
      'Svarar på flera språk',
      'Prioriterad support',
    ],
    cta: 'Få en offert',
  },
];

// 1999 → "1 999" (med hårt mellanslag så att siffrorna inte bryts isär)
export const formatKr = (n: number) => Math.round(n).toLocaleString('sv-SE').replace(/\s/g, ' ');
export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`;
