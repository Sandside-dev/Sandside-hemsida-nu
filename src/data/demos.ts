// Exempelsamtal för chattdemon i toppen av sidan.
// Företagen är påhittade exempel (märkta "Exempel" på sidan). Byt gärna mot
// riktiga samtal från era kunder när ni har fått lov att visa dem.

export type DemoMessage = { from: 'kund' | 'bot'; text: string; action?: string };
export type Demo = {
  id: string;
  tab: string;
  business: string;
  time: string;
  messages: DemoMessage[];
  outcome: { type: 'solved' | 'handover'; text: string };
};

export const demos: Demo[] = [
  {
    id: 'trafikskola',
    tab: 'Trafikskola',
    business: 'Trafikskolan',
    time: 'Ons 21:47',
    messages: [
      { from: 'kund', text: 'Hej! Hur många körlektioner brukar man behöva innan uppkörningen?' },
      { from: 'bot', text: 'Det varierar, men de flesta behöver 15–25 lektioner. Har du övningskört hemma räcker det ofta med färre. Vill du boka en första lektion så att läraren kan se var du ligger?' },
      { from: 'kund', text: 'Ja! Vad kostar en lektion?' },
      { from: 'bot', text: 'En lektion på 40 minuter kostar 750 kr. Här ser du lediga tider:', action: 'Boka lektion' },
    ],
    outcome: { type: 'solved', text: 'Besvarat av chattbotten' },
  },
  {
    id: 'frisor',
    tab: 'Frisör',
    business: 'Salongen',
    time: 'Lör 07:58',
    messages: [
      { from: 'kund', text: 'Har ni någon tid för klippning i dag?' },
      { from: 'bot', text: 'I dag är det tyvärr fullbokat. I morgon finns 10:30 och 14:00 lediga. Passar någon av dem?' },
      { from: 'kund', text: '10:30 blir perfekt!' },
      { from: 'bot', text: 'Toppen. Här bokar du 10:30 i morgon:', action: 'Boka 10:30' },
    ],
    outcome: { type: 'solved', text: 'Besvarat av chattbotten' },
  },
  {
    id: 'tatuerare',
    tab: 'Tatuerare',
    business: 'Studion',
    time: 'Tor 22:18',
    messages: [
      { from: 'kund', text: 'Vad kostar en liten tatuering på handleden?' },
      { from: 'bot', text: 'Små motiv börjar på 1 200 kr, men priset beror på storlek och detaljer. Har du en skiss kan du skicka den här.' },
      { from: 'kund', text: 'Den är ganska detaljerad. Kan någon titta på den?' },
      { from: 'bot', text: 'Absolut. Jag har skickat din fråga och skissen till Elin. Hon hör av sig i morgon förmiddag.' },
    ],
    outcome: { type: 'handover', text: 'Skickat vidare till personalen' },
  },
  {
    id: 'pt',
    tab: 'PT',
    business: 'Träningsstudion',
    time: 'Sön 20:14',
    messages: [
      { from: 'kund', text: 'Kan man testa en PT-timme innan man köper ett kort?' },
      { from: 'bot', text: 'Ja! Första timmen är en prova-på för 395 kr. Ni går igenom dina mål och kör ett första pass tillsammans.' },
      { from: 'kund', text: 'Finns det tider på morgonen?' },
      { from: 'bot', text: 'Ja, tisdagar och torsdagar från 06:30. Här ser du lediga tider:', action: 'Boka prova-på' },
    ],
    outcome: { type: 'solved', text: 'Besvarat av chattbotten' },
  },
  {
    id: 'hantverkare',
    tab: 'Hantverkare',
    business: 'Rörfirman',
    time: 'Mån 07:12',
    messages: [
      { from: 'kund', text: 'Hej! Det läcker under diskbänken. Kan ni komma i dag?' },
      { from: 'bot', text: 'Stäng gärna av vattnet under diskbänken så länge. Jag skickar ärendet till den som har jour. Vilken adress gäller det?' },
      { from: 'kund', text: 'Linnégatan 8 i Göteborg.' },
      { from: 'bot', text: 'Tack! Jouren har fått ditt ärende och ringer dig så snart de kan.' },
    ],
    outcome: { type: 'handover', text: 'Skickat vidare till jouren' },
  },
];
