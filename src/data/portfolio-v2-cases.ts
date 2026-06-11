/**
 * V2 portfolio case studies.
 * Uses the <EditorialCaseStudyV2 /> layout:
 *   hero photo → (title + caseIntro side-by-side) → meta strip →
 *   full-width project overview → 2 mockups → full-width approach →
 *   scrollable in-page live preview → CTA.
 */

export interface CaseV2Meta {
  label: string;
  value: string;
}

export interface CaseV2Content {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  tagline: string;
  meta: CaseV2Meta[];
  liveUrl: string;
  liveDomain: string;
  heroImage: string;
  mockups: { src: string; caption?: string }[];
  /** "De case" paragraph shown next to the title */
  caseIntro: string;
  overviewHeading: string;
  overviewBody: string;
  approachHeading: string;
  approachBody: string;
  /** Accent color (hex) used for eyebrows, dividers, buttons */
  accent: string;
  /** Optional, kept for backwards compat (no longer used by layout) */
  background?: string;
  ink?: string;
}

const placeholders = (hero: string) => [
  { src: hero, caption: "Homepage" },
  { src: hero, caption: "Detailpagina" },
];

export const portfolioV2Cases: Record<string, { nl: CaseV2Content; en: CaseV2Content }> = {
  /* ════════════════════ NIEUWE CASES ════════════════════ */

  "mondzorg-de-pijp": {
    nl: {
      eyebrow: "PORTFOLIOCASE",
      title: "Mondzorg De Pijp",
      tagline: "Zorg die je voelt voordat je een woord leest.",
      meta: [
        { label: "Klant", value: "Mondzorg De Pijp (fictief)" },
        { label: "Sector", value: "Zorg & mondzorg" },
        { label: "Looptijd", value: "± 3 weken" },
        { label: "Rol", value: "Concept, ontwerp & realisatie" },
      ],
      liveUrl: "https://mondzorg-de-pijp.vercel.app/",
      liveDomain: "mondzorg-de-pijp.vercel.app",
      heroImage: "/images/portfolio/mondzorg-hero.png",
      mockups: [
        { src: "/images/portfolio/mondzorg-shot-1.jpg", caption: "Aanmelden in vier korte stappen" },
        { src: "/images/portfolio/mondzorg-shot-2.png", caption: "Tandheelkunde hoeft niet klinisch te voelen" },
      ],
      caseIntro:
        "De case Mondzorg De Pijp is een conceptcase: een moderne tandartspraktijk die ik bedacht in De Pijp, Amsterdam. Een hecht team van vier tandartsen en twee mondhygiënisten, in een buurt vol vaste gezichten. Het uitgangspunt dat ik mezelf gaf: de meeste tandartssites voelen klinisch en koel, terwijl bijna iedereen een beetje opziet tegen de stoel. De opdracht aan mezelf: een site die meteen rust en vertrouwen uitstraalt, het team een gezicht geeft en een afspraak maken tot een kwestie van seconden maakt.",
      overviewHeading: "Projectoverzicht",
      overviewBody:
        "Ik vertaalde een rustige, vertrouwde praktijk naar een warme one-page site, waar het gevoel het werk doet: je voelt de zorg voordat je een woord leest. Het verhaal, het team en het aanmelden komen samen op één pagina, met overal dezelfde heldere actie: een afspraak maken. De cijfers die vertrouwen geven staan meteen in beeld, en het team krijgt een gezicht in plaats van een logo. Het resultaat voelt net zo uitnodigend als de praktijk zelf en maakt het telefoontje naar de balie overbodig.",
      approachHeading: "De aanpak",
      approachBody:
        "Ik begon bij het gevoel. Voor ik aan het scherm ging, leefde ik me in: wat heeft iemand nodig die opziet tegen een bezoek? Dat werd rust en warmte, een zacht kleurenpalet weg van het klinische wit met blauw, ingetogen typografie en veel ruimte. Vanuit de denkbeeldige praktijk koos ik één duidelijk doel: drempelvrij aanmelden. Een meebewegende knop houdt die actie altijd binnen handbereik terwijl je door het verhaal scrolt, en een paar speelse details, zoals een interactieve gebitskaart en een voor-en-na om te slepen, verlagen de drempel zonder onrust te maken. De site werkt net zo soepel op de telefoon als op het grote scherm.",
      accent: "#2D5A3D",
    },
    en: {
      eyebrow: "PORTFOLIO CASE",
      title: "Mondzorg De Pijp",
      tagline: "Care you feel before you read a word.",
      meta: [
        { label: "Client", value: "Mondzorg De Pijp (fictional)" },
        { label: "Sector", value: "Healthcare & dental" },
        { label: "Timeline", value: "± 3 weeks" },
        { label: "Role", value: "Concept, design & build" },
      ],
      liveUrl: "https://mondzorg-de-pijp.vercel.app/",
      liveDomain: "mondzorg-de-pijp.vercel.app",
      heroImage: "/images/portfolio/mondzorg-hero.png",
      mockups: [
        { src: "/images/portfolio/mondzorg-shot-1.jpg", caption: "Sign-up in four short steps" },
        { src: "/images/portfolio/mondzorg-shot-2.png", caption: "Dentistry doesn't have to feel clinical" },
      ],
      caseIntro:
        "The Mondzorg De Pijp case is a concept case: a modern dental practice I imagined in De Pijp, Amsterdam. A close-knit team of four dentists and two dental hygienists, in a neighbourhood full of familiar faces. The starting point I gave myself: most dental sites feel clinical and cold, while almost everyone is a little wary of the chair. The brief I set myself: a site that radiates calm and trust the moment you land, gives the team a face, and turns booking an appointment into a matter of seconds.",
      overviewHeading: "Project overview",
      overviewBody:
        "I translated a calm, familiar practice into a warm one-page site where the feeling does the work: you sense the care before you read a single word. Story, team and sign-up come together on one page, with the same clear action throughout: book an appointment. The numbers that build trust sit right in view, and the team gets a face instead of a logo. The result feels as inviting as the practice itself, and makes the phone call to the front desk unnecessary.",
      approachHeading: "The approach",
      approachBody:
        "I started with the feeling. Before I went to the screen, I put myself in the visitor's shoes: what does someone who dreads a visit need? That became calm and warmth, a soft palette away from clinical white-on-blue, restrained typography and plenty of room. From the imagined practice I picked one clear goal: friction-free sign-up. A sticky button keeps that action within reach as you scroll through the story, and a few playful details, like an interactive tooth map and a draggable before-and-after, lower the threshold without adding noise. The site works just as smoothly on phone as on the big screen.",
      accent: "#2D5A3D",
    },
  },

  "den-hollander-schilderwerken": {
    nl: {
      eyebrow: "PORTFOLIOCASE",
      title: "Den Hollander Schilderwerken",
      tagline: "Vakwerk dat past bij de panden waar het op zit.",
      meta: [
        { label: "Klant", value: "Den Hollander Schilderwerken (fictief)" },
        { label: "Sector", value: "Schilder- en onderhoudsbedrijf" },
        { label: "Looptijd", value: "± 3 weken" },
        { label: "Rol", value: "Concept, copy, ontwerp & development" },
      ],
      liveUrl: "https://den-hollander-schilderwerken.vercel.app/",
      liveDomain: "den-hollander-schilderwerken.vercel.app",
      heroImage: "/images/portfolio/den-hollander-hero.png",
      mockups: [
        { src: "/images/portfolio/den-hollander-shot-1.png", caption: "Offerte-flow in vier stappen" },
        { src: "/images/portfolio/den-hollander-shot-2.png", caption: "Werkgebied - wijken van Den Haag" },
      ],
      caseIntro:
        "De case Den Hollander Schilderwerken is een conceptcase: een Haags schildersbedrijf dat ik bedacht om één vraag uit te werken: hoe ziet een site eruit voor een vakman die karakteristieke en monumentale woningen schildert? Het soort werk waar elk kozijn z'n eigen geschiedenis heeft. De uitdaging die ik mezelf stelde: een site die net zo verzorgd voelt als het werk zelf, vertrouwen wekt bij huiseigenaren die hun pand serieus nemen, en zonder gedoe naar een gesprek leidt.",
      overviewHeading: "Projectoverzicht",
      overviewBody:
        "De rode draad werd vakwerk dat laag voor laag wordt opgebouwd, doorgevoerd in elke hoek van de site. Het kernidee: een voor-en-na slider die met één beweging laat zien wat zorgvuldig werk doet met een Haagse gevel. De zij-navigatie kreeg de vorm van een verfstaal-strip, en met een verborgen schakelaar wissel je de accentkleur van de hele site, alsof je in de winkel een staal kiest. De opbouw neemt de bezoeker stap voor stap mee van eerste indruk naar offerteaanvraag, met sociale bewijslast, heldere diensten en een werkgebiedpagina die laat zien dat het bedrijf de wijken kent. De offerteflow vraagt in vier korte stappen om de juiste informatie, op telefoon net zo soepel als op desktop.",
      approachHeading: "De aanpak",
      approachBody:
        "Voor ik ook maar één scherm ontwierp, bepaalde ik eerst het verhaal: wat zou het vakmanschap van zo'n bedrijf precies zijn, en wie spreek je daarmee aan? Dat antwoord werd mijn houvast: de huiseigenaar die zijn jaren-dertig pand serieus neemt en geen marketingpraatjes wil, maar bewijs van zorg. Vanuit die denkbeeldige klant maakte ik elke keuze. Ik koos een ingetogen, monumentaal kleurenpalet, een display-serif die ambacht ademt en subtiele verftexturen die het vak voelbaar maken zonder cliché te worden. De structuur hield ik bewust simpel, zodat creativiteit nooit ten koste gaat van vertrouwen. Elke sectie kreeg een doel: de bezoeker dichter bij die ene knop brengen. De toon stemde ik af op hoe een vakman zijn klanten echt zou aanspreken: rustig, eerlijk en zonder verkooppraat.",
      accent: "#1E3A5F",
    },
    en: {
      eyebrow: "PORTFOLIO CASE",
      title: "Den Hollander Schilderwerken",
      tagline: "Craftsmanship that matches the buildings it lives on.",
      meta: [
        { label: "Client", value: "Den Hollander Schilderwerken (fictional)" },
        { label: "Sector", value: "Painting & maintenance" },
        { label: "Timeline", value: "± 3 weeks" },
        { label: "Role", value: "Concept, copy, design & development" },
      ],
      liveUrl: "https://den-hollander-schilderwerken.vercel.app/",
      liveDomain: "den-hollander-schilderwerken.vercel.app",
      heroImage: "/images/portfolio/den-hollander-hero.png",
      mockups: [
        { src: "/images/portfolio/den-hollander-shot-1.png", caption: "Quote flow in four steps" },
        { src: "/images/portfolio/den-hollander-shot-2.png", caption: "Service area - Hague neighbourhoods" },
      ],
      caseIntro:
        "The Den Hollander Schilderwerken case is a concept case: a Hague-based painting firm I invented to work out one question: what does a site look like for a craftsman who paints character properties and monuments? The kind of work where every window frame has its own history. The challenge I set myself: a site that feels as cared-for as the work itself, builds trust with homeowners who take their property seriously, and leads to a conversation without friction.",
      overviewHeading: "Project overview",
      overviewBody:
        "The thread became craftsmanship built up layer by layer, carried through every corner of the site. The core idea: a before-and-after slider that shows in one move what careful work does to a Hague façade. The side navigation is shaped like a paint-swatch strip, and a hidden switch lets you change the accent colour of the entire site, like picking a sample in the shop. The structure walks the visitor from first impression to quote request, with social proof, clear services and a service-area page that proves the firm knows the neighbourhoods. The quote flow asks for the right info in four short steps and works just as smoothly on phone as on desktop.",
      approachHeading: "The approach",
      approachBody:
        "Before I designed a single screen I defined the story: what would the craft of this firm actually be, and who are you speaking to? The answer became my compass: the homeowner who takes their 1930s house seriously and doesn't want marketing talk, but proof of care. From that imagined client I made every choice. I picked a restrained, monumental palette, a display serif that breathes craft, and subtle paint textures that make the trade tangible without turning into cliché. I kept the structure deliberately simple, so creativity never gets in the way of trust. Every section got a job: bring the visitor closer to the one button that matters. The tone matches how a craftsman would actually speak to clients: calm, honest and without sales talk.",
      accent: "#1E3A5F",
    },
  },

  "de-verse-gier": {
    nl: {
      eyebrow: "PORTFOLIOCASE",
      title: "De Verse Gier",
      titleAccent: "Verse",
      tagline: "Seizoensbistronomie, vertaald naar één vloeiende pagina.",
      meta: [
        { label: "Klant", value: "De Verse Gier (fictief)" },
        { label: "Sector", value: "Horeca" },
        { label: "Looptijd", value: "± 3 weken" },
        { label: "Rol", value: "Concept, ontwerp & realisatie" },
      ],
      liveUrl: "https://de-verse-gier.vercel.app/",
      liveDomain: "de-verse-gier.vercel.app",
      heroImage: "/images/portfolio/de-verse-gier-hero.png",
      mockups: [
        { src: "/images/portfolio/de-verse-gier-shot-1.png", caption: "Wat we doen - sectie" },
        { src: "/images/portfolio/de-verse-gier-shot-2.png", caption: "Sfeerimpressie keuken & wijn" },
      ],
      caseIntro:
        "De case De Verse Gier is een conceptcase: een seizoensbistro die ik bedacht in het hart van Den Haag. Een korte kaart die elke zes weken meebeweegt, groente in de hoofdrol, een natuurwijnkaart en een lange leestafel als hart van de zaak. Het uitgangspunt dat ik mezelf gaf: een zaak vol sfeer met een website die daar niets van laat zien, waar gasten nog bellen voor een tafel en de kaart als pdf online staat. De opdracht aan mezelf: een site die de warme, ongedwongen sfeer meteen laat voelen en reserveren tot een kwestie van seconden maakt.",
      overviewHeading: "Projectoverzicht",
      overviewBody:
        "Ik vertaalde de sfeer van een oud pakhuis naar een sfeervolle one-page site, waar foodfotografie het werk doet: je voelt de zaak voordat je een woord leest. De actuele kaart, het verhaal en het reserveren komen samen op één pagina, met overal dezelfde heldere actie: een tafel boeken. De wisselende kaart richtte ik zo in dat een keukenteam die zelf kan bijwerken, zonder een ontwerper te bellen. Het resultaat voelt net zo uitnodigend als de zaak zelf en maakt een telefoontje overbodig.",
      approachHeading: "De aanpak",
      approachBody:
        "Ik begon bij de sfeer. Voor ik aan het scherm ging, leefde ik me in: wat maakt zo'n zaak bijzonder, en hoe vertaal je dat naar een site? Dat werd rust en warmte: ingetogen typografie, veel ruimte en sterke foodfotografie als drager. Vanuit de denkbeeldige eigenaar koos ik één duidelijk doel: reserveren. Een meebewegende passbalk houdt die knop altijd binnen handbereik terwijl je door het verhaal en de kaart scrolt. De techniek eronder bouwde ik op snelheid en lokale vindbaarheid in hartje Den Haag, en de site werkt net zo soepel op de telefoon als op het grote scherm.",
      accent: "#E07A3F",
    },
    en: {
      eyebrow: "PORTFOLIO CASE",
      title: "De Verse Gier",
      titleAccent: "Verse",
      tagline: "Seasonal bistronomy, translated into one flowing page.",
      meta: [
        { label: "Client", value: "De Verse Gier (fictional)" },
        { label: "Sector", value: "Hospitality" },
        { label: "Timeline", value: "± 3 weeks" },
        { label: "Role", value: "Concept, design & build" },
      ],
      liveUrl: "https://de-verse-gier.vercel.app/",
      liveDomain: "de-verse-gier.vercel.app",
      heroImage: "/images/portfolio/de-verse-gier-hero.png",
      mockups: [
        { src: "/images/portfolio/de-verse-gier-shot-1.png", caption: "What we do - section" },
        { src: "/images/portfolio/de-verse-gier-shot-2.png", caption: "Kitchen & wine impression" },
      ],
      caseIntro:
        "The De Verse Gier case is a concept case: a seasonal bistro I imagined in the heart of The Hague. A short menu that shifts every six weeks, vegetables in the lead, a natural-wine list and a long reading table as the heart of the place. The starting point I gave myself: a venue full of atmosphere with a website that shows none of it, where guests still phone for a table and the menu is a PDF online. The brief to myself: a site that lets you feel the warm, easy mood right away and turns reserving into a matter of seconds.",
      overviewHeading: "Project overview",
      overviewBody:
        "I translated the warehouse atmosphere into an atmospheric one-page site where food photography does the work: you feel the place before you read a word. The current menu, the story and the reservation come together on one page, with the same clear action throughout: book a table. The rotating menu is set up so a kitchen team can update it themselves, no designer required. The result feels as inviting as the venue itself and makes phoning for a table unnecessary.",
      approachHeading: "The approach",
      approachBody:
        "I started with atmosphere. Before touching a screen, I imagined the place: what makes a venue like this special, and how do you translate that to a site? That became calm and warmth: restrained typography, lots of space and strong food photography as the driver. From the imagined owner I picked one clear goal: reserve. A sticky pass-bar keeps that button within reach as you scroll through story and menu. Underneath I built for speed and local findability in central The Hague, and the site works just as smoothly on phone as on a big screen.",
      accent: "#E07A3F",
    },
  },

  "maisonette-1897": {
    nl: {
      eyebrow: "EIGEN PROJECT",
      title: "Maisonette 1897",
      titleAccent: "1897",
      tagline: "Een Haags huis met karakter, als vaste shootlocatie.",
      meta: [
        { label: "Klant", value: "Maisonette 1897 (eigen project)" },
        { label: "Sector", value: "Shootlocatie, verhuur" },
        { label: "Looptijd", value: "± 2 weken" },
        { label: "Rol", value: "Concept, copy, ontwerp & development" },
      ],
      liveUrl: "https://maisonette1897.nl/",
      liveDomain: "maisonette1897.nl",
      heroImage: "/images/portfolio/maisonette-1897-hero.png",
      mockups: [
        { src: "/images/portfolio/maisonette-1897-shot-1.png" },
        { src: "/images/portfolio/maisonette-1897-shot-2.png" },
      ],

      caseIntro:
        "De case Maisonette 1897 is onze eigen woning uit 1897, die we verhuren als shootlocatie. De site heeft één doel: het huis op de kaart zetten bij merken, fotografen en productiebureaus die een plek met karakter zoeken. Geen ruimte te huur, maar een vaste locatiepartner.",
      overviewHeading: "Projectoverzicht",
      overviewBody:
        "Het huis is de ster: beeld voorop, tekst eromheen. Ik bouwde een rustige, sfeervolle site waarin de originele details uit 1897 alle ruimte krijgen. Niet alleen dát je er kunt shooten, maar vooral hoe het voelt en wat er kan. De ruimtes en hun mogelijkheden komen goed uit, zodat een merk of locatiescout snel ziet of het past en daarna contact opneemt. Volledig op mobiel afgestemd, want scouts beoordelen locaties net zo vaak vanaf de telefoon.",
      approachHeading: "De aanpak",
      approachBody:
        "Eerst bepaalden we hoe we het huis neerzetten: niet als kale ruimte, maar als een plek met een eigen verhaal en sfeer. Ik koos een ingetogen ontwerp dat de fotografie laat ademen, met veel rust zodat de details het werk doen. De opbouw is gericht op binden: eerst de sfeer en het karakter, dan de praktische mogelijkheden, en op het juiste moment een duidelijke uitnodiging om de locatie aan te vragen. Zo voelt het minder als een advertentie en meer als het begin van een samenwerking.",
      accent: "#E89A3C",
    },
    en: {
      eyebrow: "OWN PROJECT",
      title: "Maisonette 1897",
      titleAccent: "1897",
      tagline: "A Hague home with character, as a recurring shoot location.",
      meta: [
        { label: "Client", value: "Maisonette 1897 (own project)" },
        { label: "Sector", value: "Shoot location, rental" },
        { label: "Timeline", value: "± 2 weeks" },
        { label: "Role", value: "Concept, copy, design & development" },
      ],
      liveUrl: "https://maisonette1897.nl/",
      liveDomain: "maisonette1897.nl",
      heroImage: "/images/portfolio/maisonette-1897-hero.png",
      mockups: [
        { src: "/images/portfolio/maisonette-1897-shot-1.png" },
        { src: "/images/portfolio/maisonette-1897-shot-2.png" },
      ],

      caseIntro:
        "The Maisonette 1897 case is our own 1897 home, which we rent out as a shoot location. The site has one goal: put the house on the map for brands, photographers and production agencies looking for a place with character. Not just a room for rent, but a recurring location partner.",
      overviewHeading: "Project overview",
      overviewBody:
        "The house is the star: imagery first, copy around it. I built a calm, atmospheric site where the original 1897 details get all the room they need. Not just that you can shoot here, but how it feels and what's possible. The rooms and their possibilities get clear billing, so a brand or location scout quickly sees if it fits and then gets in touch. Fully tuned for mobile, because scouts review locations from their phone just as often.",
      approachHeading: "The approach",
      approachBody:
        "First we decided how to present the house: not as an empty room, but as a place with its own story and atmosphere. I picked a restrained design that lets the photography breathe, with lots of calm so the details do the work. The structure is aimed at binding brands: first the atmosphere and character, then the practical possibilities, and at the right moment a clear invitation to request the location. So it feels less like an ad and more like the start of a collaboration.",
      accent: "#E89A3C",
    },
  },

  "wild-en-wortel": {
    nl: {
      eyebrow: "PORTFOLIOCASE",
      title: "Wild & Wortel",
      titleAccent: "Wortel",
      tagline: "Een haarstudio met twee karakters in één vloeiende beweging.",
      meta: [
        { label: "Klant", value: "Wild & Wortel (fictief)" },
        { label: "Sector", value: "Haarsalon, lifestyle" },
        { label: "Looptijd", value: "± 2 weken" },
        { label: "Rol", value: "Concept, copy, ontwerp & development" },
      ],
      liveUrl: "https://wild-en-wortel.vercel.app/",
      liveDomain: "wild-en-wortel.vercel.app",
      heroImage: "/images/portfolio/wild-en-wortel-hero.png",
      mockups: [
        { src: "/images/portfolio/wild-en-wortel-shot-1.png", caption: "Studio - sinds 2021" },
        { src: "/images/portfolio/wild-en-wortel-shot-2.png", caption: "Vier richtingen op de kaart" },
      ],
      caseIntro:
        "De case Wild & Wortel is een conceptcase: een haarstudio die ik plaatste in het Haagse Zeeheldenkwartier, bedacht rond één idee: een merk met een dubbel karakter. Het wilde (durf, beweging, scherpe coupes) en de wortel (rust, natuurlijke producten, terug naar jezelf). De uitdaging die ik mezelf stelde: een site die dat dubbele gevoel echt laat voelen, vertrouwen wekt bij nieuwe klanten en zonder gedoe naar een boeking leidt.",
      overviewHeading: "Projectoverzicht",
      overviewBody:
        "De twee kanten van het merk komen samen in één vloeiende beweging: bezoekers schuiven met een slider van wortel naar wild en zien de hele studio van sfeer veranderen. De opbouw neemt de bezoeker stap voor stap mee van kennismaking naar boeking, met social proof, een duidelijke prijsindicatie en een FAQ die de laatste twijfels wegneemt. De boekingsmodule reserveert een stoel in vier korte stappen, op telefoon net zo prettig als op desktop.",
      approachHeading: "De aanpak",
      approachBody:
        "Voor ik ook maar één scherm ontwierp, kreeg ik eerst het verhaal scherp: wat is het wild, wat is de wortel, en wie wil je daarmee aanspreken? Dat dubbele werd mijn houvast bij elke keuze. Ik koos een warm, organisch palet en typografie die meebeweegt met het verhaal, en hield de structuur bewust simpel zodat de creativiteit nooit ten koste gaat van het gemak. Elke sectie kreeg een doel: niet mooi om het mooi, maar om de bezoeker een stap verder te brengen. De toon stemde ik af op hoe zo'n studio haar klanten echt zou aanspreken.",
      accent: "#C4583A",
    },
    en: {
      eyebrow: "PORTFOLIO CASE",
      title: "Wild & Wortel",
      titleAccent: "Wortel",
      tagline: "A hair studio with two characters in one flowing move.",
      meta: [
        { label: "Client", value: "Wild & Wortel (fictional)" },
        { label: "Sector", value: "Hair salon, lifestyle" },
        { label: "Timeline", value: "± 2 weeks" },
        { label: "Role", value: "Concept, copy, design & development" },
      ],
      liveUrl: "https://wild-en-wortel.vercel.app/",
      liveDomain: "wild-en-wortel.vercel.app",
      heroImage: "/images/portfolio/wild-en-wortel-hero.png",
      mockups: [
        { src: "/images/portfolio/wild-en-wortel-shot-1.png", caption: "Studio - since 2021" },
        { src: "/images/portfolio/wild-en-wortel-shot-2.png", caption: "Four directions on the map" },
      ],
      caseIntro:
        "The Wild & Wortel case is a concept case: a hair studio I placed in The Hague's Zeeheldenkwartier, built around one idea: a brand with a double character. The wild (daring, movement, sharp cuts) and the root (calm, natural products, back to yourself). The challenge I set myself: a site that truly conveys that duality, builds trust with new clients and leads to a booking without friction.",
      overviewHeading: "Project overview",
      overviewBody:
        "Both sides of the brand meet in one flowing move: visitors slide from root to wild and see the whole studio change atmosphere. The structure walks the visitor from intro to booking, with social proof, a clear price indication and a FAQ that removes any last doubt. The booking module reserves a chair in four short steps, on phone just as nicely as on desktop.",
      approachHeading: "The approach",
      approachBody:
        "Before I designed a single screen I sharpened the story: what is wild, what is root, and who do you want to reach? That duality became my compass. I picked a warm, organic palette and typography that moves with the story, and kept the structure deliberately simple so creativity never gets in the way of ease. Every section got a job: not pretty for pretty's sake, but to bring the visitor one step further. The tone matches how a studio like this would actually speak to clients.",
      accent: "#C4583A",
    },
  },

  "once-upon-a-room": {
    nl: {
      eyebrow: "PORTFOLIOCASE",
      title: "Once Upon a Room",
      titleAccent: "Once Upon",
      tagline: "Een sprookjeswereld die zich ontvouwt terwijl je scrolt.",
      meta: [
        { label: "Klant", value: "Once Upon a Room" },
        { label: "Sector", value: "Interieur & kinderkamerontwerp" },
        { label: "Looptijd", value: "± 3 weken" },
        { label: "Rol", value: "Concept, ontwerp & development" },
      ],
      liveUrl: "https://onceuponaroom.vercel.app/",
      liveDomain: "onceuponaroom.vercel.app",
      heroImage: "/images/portfolio/once-upon-a-room-hero.png",
      mockups: [
        { src: "/images/portfolio/once-upon-a-room-shot-1.png", caption: "Intro - een storybook studio" },
        { src: "/images/portfolio/once-upon-a-room-shot-2.png", caption: "Room One - The Carousel Room" },
      ],
      caseIntro:
        "De case Once Upon a Room is de studio van Lisa, die magische, verhalende kinderkamers ontwerpt. Ze had een website nodig die net zo betovert als haar kamers: een plek die haar werk laat spreken, vertrouwen wekt bij ouders en aanvragen oplevert. De vraag: vertaal het sprookjesconcept, met de magie van Disney als inspiratie, naar een online ervaring die je vasthoudt en rustig naar contact leidt.",
      overviewHeading: "Projectoverzicht",
      overviewBody:
        "De site voelt als een prentenboek dat opengaat, met de betovering van een Disney-klassieker als referentie: een handgetekende kasteelscène die zich voor je ogen intekent, een lucht die met je meescrollt van nacht naar zonsopkomst. Welke twee kamers de hoofdrol kregen, koos ik samen met Lisa, en de teksten schreef ik in haar eigen stem. Op rustige momenten verschijnt een uitnodiging om contact op te nemen. Sinds de livegang voelt de site precies als haar werk en raakt het ouders nog voordat ze de eerste mail sturen.",
      approachHeading: "De aanpak",
      approachBody:
        "De richting bepaalde ik in nauw overleg met Lisa: de magie centraal, zonder dat de boodschap verdwijnt. Het ontwerp, de animaties en de techniek nam ik voor mijn rekening, terwijl Lisa de wereld en het gevoel achter elke kamer aanleverde. Een heldere structuur leidt ouders vanzelf door het verhaal: wie Lisa is, wat ze maakt en hoe je begint. Alles is gericht op aanvragen, met uitnodigingen precies waar twijfel omslaat in vertrouwen. En omdat ouders vaak onderweg kijken, is de hele site licht en snel op mobiel.",
      accent: "#C28F3E",
    },
    en: {
      eyebrow: "PORTFOLIO CASE",
      title: "Once Upon a Room",
      titleAccent: "Once Upon",
      tagline: "A fairy-tale world that unfolds as you scroll.",
      meta: [
        { label: "Client", value: "Once Upon a Room" },
        { label: "Sector", value: "Interior & children's room design" },
        { label: "Timeline", value: "± 3 weeks" },
        { label: "Role", value: "Concept, design & development" },
      ],
      liveUrl: "https://onceuponaroom.vercel.app/",
      liveDomain: "onceuponaroom.vercel.app",
      heroImage: "/images/portfolio/once-upon-a-room-hero.png",
      mockups: [
        { src: "/images/portfolio/once-upon-a-room-shot-1.png", caption: "Intro - a storybook studio" },
        { src: "/images/portfolio/once-upon-a-room-shot-2.png", caption: "Room One - The Carousel Room" },
      ],
      caseIntro:
        "The Once Upon a Room case is Lisa's studio, designing magical, narrative children's rooms. She needed a site that enchants the way her rooms do: a place that lets her work speak, builds trust with parents and brings in requests. The brief: translate the fairy-tale concept, with the magic of Disney as inspiration, into an online experience that holds you and gently leads to contact.",
      overviewHeading: "Project overview",
      overviewBody:
        "The site feels like a picture book opening, with the spell of a Disney classic as reference: a hand-drawn castle scene that draws itself before your eyes, a sky that scrolls along from night to sunrise. Which two rooms got the lead I chose together with Lisa, and the copy I wrote in her own voice. At calm moments an invitation to get in touch appears. Since launch the site feels exactly like her work and moves parents before they send the first email.",
      approachHeading: "The approach",
      approachBody:
        "I shaped the direction in close conversation with Lisa: magic at the centre, without losing the message. The design, animations and technical build were mine, while Lisa supplied the world and feeling behind every room. A clear structure leads parents through the story: who Lisa is, what she makes, and how you begin. Everything is aimed at requests, with invitations exactly where doubt turns into trust. And because parents often look on the go, the entire site is light and fast on mobile.",
      accent: "#C28F3E",
    },
  },

  /* ════════════════════ OUDERE CASES (nu ook V2-layout) ════════════════════ */

  "angela-ceremonies": {
    nl: {
      eyebrow: "CASE STUDY",
      title: "Angela Ceremonies",
      tagline: "Van visitekaartje naar verhaal.",
      meta: [
        { label: "Klant", value: "Angela Bhagole-Mangre" },
        { label: "Sector", value: "Trouwambtenaar, ceremonieel spreker" },
        { label: "Looptijd", value: "± 4 weken" },
        { label: "Rol", value: "Concept, copy, ontwerp & development" },
      ],
      liveUrl: "https://angelaceremonies.com",
      liveDomain: "angelaceremonies.com",
      heroImage: "/images/angela-ceremonies.png",
      mockups: [
        { src: "/images/portfolio/angela-shot-1.png", caption: "Over Angela - liefdevol, persoonlijk, verbindend" },
        { src: "/images/portfolio/angela-shot-2.png", caption: "Welkom aanstaande bruidspaar" },
      ],
      caseIntro:
        "De case Angela Ceremonies is een trouwambtenaar uit Rotterdam met meer dan 490 ceremonies op haar naam. Haar kracht zit in het persoonlijke: ze leert stellen écht kennen en maakt van hun verhaal een ceremonie die raakt. Haar oude site was netjes en functioneel, maar die warmte die zij naar elk bruidspaar brengt, was online niet voelbaar. De vraag aan mij: een site die net zo persoonlijk voelt als haar werk, vertrouwen wekt bij stellen voordat ze bellen en haar coaching-aanbod voor startende BABS'en een eigen plek geeft.",
      overviewHeading: "Projectoverzicht",
      overviewBody:
        "De nieuwe site voelt als Angela zelf: warme, aardse tinten, elegante typografie en fotografie die de sfeer van haar ceremonies ademt. Geen template, maar een ontwerp dat specifiek voor haar is gemaakt. De structuur is opgebouwd rondom drie pijlers die Angela zelf benoemt: liefdevol, persoonlijk, verbindend. Elke pagina vertelt een stukje van dat verhaal, van de diensten tot het Over mij, waar je het gevoel krijgt haar al een beetje te kennen voordat je belt. Op SEO-vlak is de site ingericht op zoektermen als 'trouwambtenaar Rotterdam', 'BABS inhuren' en 'ceremonieel trouwen', met een apart coaching-gedeelte dat een nieuw publiek aanboort.",
      approachHeading: "De aanpak",
      approachBody:
        "Zoals altijd: begonnen met een goed gesprek. Ik wilde weten wat Angela uniek maakt, waar haar passie vandaan komt en welke stellen ze vooral wil helpen. Die antwoorden werden het fundament van alles wat daarna kwam. Vanuit dat verhaal koos ik elk element: kleur, typografie, beeldtaal, structuur en toon. De technische opbouw richtte ik in op snelheid en lokale vindbaarheid, zodat Angela niet alleen mooier voor de dag komt, maar ook beter gevonden wordt door de stellen die zoeken naar precies wat zij biedt.",
      accent: "#A47148",
    },
    en: {
      eyebrow: "CASE STUDY",
      title: "Angela Ceremonies",
      tagline: "From business card to story.",
      meta: [
        { label: "Client", value: "Angela Bhagole-Mangre" },
        { label: "Sector", value: "Wedding officiant, ceremonial speaker" },
        { label: "Timeline", value: "± 4 weeks" },
        { label: "Role", value: "Concept, copy, design & development" },
      ],
      liveUrl: "https://angelaceremonies.com",
      liveDomain: "angelaceremonies.com",
      heroImage: "/images/angela-ceremonies.png",
      mockups: [
        { src: "/images/portfolio/angela-shot-1.png", caption: "About Angela - loving, personal, connecting" },
        { src: "/images/portfolio/angela-shot-2.png", caption: "Welcome - for the couple to be" },
      ],
      caseIntro:
        "The Angela Ceremonies case is a Rotterdam-based wedding officiant with over 490 ceremonies to her name. Her strength is in the personal: she truly gets to know couples and turns their story into a ceremony that moves. Her old site was tidy and functional, but the warmth she brings to every couple wasn't tangible online. The brief: a site that feels as personal as her work, builds trust with couples before they call and gives her coaching for starting officiants its own place.",
      overviewHeading: "Project overview",
      overviewBody:
        "The new site feels like Angela herself: warm, earthy tones, elegant typography and photography that breathes the atmosphere of her ceremonies. No template, but a design made specifically for her. The structure is built around three pillars Angela names herself: loving, personal, connecting. Every page tells a piece of that story, from the services to the About, where you feel you already know her a little before you call. SEO-wise the site is built around terms like 'wedding officiant Rotterdam' and 'ceremonial wedding', with a separate coaching section that reaches a new audience.",
      approachHeading: "The approach",
      approachBody:
        "As always: started with a good conversation. I wanted to know what makes Angela unique, where her passion comes from and which couples she most wants to help. Those answers became the foundation of everything that followed. From that story I chose every element: colour, typography, imagery, structure and tone. Technically I built for speed and local findability, so Angela not only looks better but also gets found by the couples searching for exactly what she offers.",
      accent: "#A47148",
    },
  },

  "reuring-op-de-delle": {
    nl: {
      eyebrow: "CASE STUDY",
      title: "Reuring op de Delle",
      tagline: "Een digitaal podium voor een festival vol energie.",
      meta: [
        { label: "Klant", value: "Stichting Reuring" },
        { label: "Sector", value: "Cultureel festival" },
        { label: "Looptijd", value: "± 4 weken" },
        { label: "Rol", value: "Concept, copy, ontwerp & development" },
      ],
      liveUrl: "https://reuringopdedelle.nl",
      liveDomain: "reuringopdedelle.nl",
      heroImage: "/images/reuring-op-de-delle.png",
      mockups: [
        { src: "/images/portfolio/reuring-shot-1.png", caption: "Voor bezoekers - een dag op het platteland" },
        { src: "/images/portfolio/reuring-shot-2.png", caption: "Programma & kaart van de route" },
      ],
      caseIntro:
        "De case Reuring in de Delle is een cultureel festival midden op het Sallandse platteland. Zeven bijzondere locaties in Dijkerhoek en Espelo, waar muzikanten, theatermakers, zangers en dansers optreden voor een publiek dat per fiets van plek naar plek trekt. Vijf uur lang, zeven speelplekken, pure energie. Alleen: het festival bestond nog niet online. De vraag van de organisatie: een digitaal podium dat recht doet aan wat het festival in het echt is, professioneel, warm en even eigenwijs als het festival zelf.",
      overviewHeading: "Projectoverzicht",
      overviewBody:
        "Bij een festival dat draait om beleving moet de website dat gevoel meteen meegeven. Warme rood- en oranjetinten, aangevuld met crème en aardse kleuren die het Sallandse landschap weerspiegelen. De structuur volgt de logica van een bezoeker: wat is dit, wanneer is het, wat kan ik verwachten, hoe meld ik me aan. De homepage vertelt het hele verhaal in één vloeiende scroll. Een interactieve tijdlijn laat het programma zien, en de zeven speelplekken hebben elk hun eigen karakter gekregen op de site. Twee aparte flows houden alles overzichtelijk: één voor bezoekers, één voor artiesten.",
      approachHeading: "De aanpak",
      approachBody:
        "Voor één scherm de deur uit ging, bepaalde ik samen met de organisatie hoe Reuring online moest aanvoelen: niet als een advertentie, maar als een uitnodiging. Vanuit dat uitgangspunt koos ik kleur, typografie en opbouw. Elke sectie kreeg een doel, zodat een bezoeker stap voor stap van nieuwsgierig naar aangemeld gaat. De techniek eronder bouwde ik op snelheid en mobielvriendelijkheid, zodat de site net zo vlot werkt op de fiets als achter het bureau.",
      accent: "#B8401F",
    },
    en: {
      eyebrow: "CASE STUDY",
      title: "Reuring op de Delle",
      tagline: "A digital stage for a festival full of energy.",
      meta: [
        { label: "Client", value: "Stichting Reuring" },
        { label: "Sector", value: "Cultural festival" },
        { label: "Timeline", value: "± 4 weeks" },
        { label: "Role", value: "Concept, copy, design & development" },
      ],
      liveUrl: "https://reuringopdedelle.nl",
      liveDomain: "reuringopdedelle.nl",
      heroImage: "/images/reuring-op-de-delle.png",
      mockups: [
        { src: "/images/portfolio/reuring-shot-1.png", caption: "For visitors - a day in the countryside" },
        { src: "/images/portfolio/reuring-shot-2.png", caption: "Programme & route map" },
      ],
      caseIntro:
        "The Reuring in de Delle case is a cultural festival in the Salland countryside. Seven special locations in Dijkerhoek and Espelo, where musicians, theatre makers, singers and dancers perform for an audience that cycles from place to place. Five hours, seven venues, pure energy. The catch: the festival didn't yet exist online. The brief: a digital stage that does justice to what the festival is in real life, professional, warm and just as headstrong as the festival itself.",
      overviewHeading: "Project overview",
      overviewBody:
        "For a festival that's all about experience, the website had to convey that feeling right away. Warm reds and oranges, with cream and earthy tones reflecting the Salland landscape. The structure follows a visitor's logic: what is this, when is it, what can I expect, how do I sign up. The homepage tells the whole story in one flowing scroll. An interactive timeline shows the programme, and the seven venues each got their own character on the site. Two separate flows keep everything clear: one for visitors, one for artists.",
      approachHeading: "The approach",
      approachBody:
        "Before a single screen went out, I defined together with the organisation how Reuring should feel online: not like an ad, but like an invitation. From that I chose colour, typography and structure. Every section got a job, so a visitor moves step by step from curious to signed up. Underneath I built for speed and mobile-friendliness, so the site works just as smoothly from a bike as from a desk.",
      accent: "#B8401F",
    },
  },

  "digitale-hand": {
    nl: {
      eyebrow: "CASE STUDY",
      title: "Digitale Hand",
      tagline: "Technologie begrijpelijk gemaakt.",
      meta: [
        { label: "Klant", value: "Lisa Giasi" },
        { label: "Sector", value: "Digitale hulp aan huis" },
        { label: "Looptijd", value: "± 3 weken" },
        { label: "Rol", value: "Concept, copy, ontwerp & development" },
      ],
      liveUrl: "https://digitalehand.nl",
      liveDomain: "digitalehand.nl",
      heroImage: "/images/digitale-hand.png",
      mockups: [
        { src: "/images/portfolio/digitale-hand-shot-1.png" },
        { src: "/images/portfolio/digitale-hand-shot-2.png" },
      ],
      caseIntro:
        "De case De Digitale Hand helpt mensen met technologie, vaak ouderen die vastlopen met hun laptop, telefoon of wifi. Iemand die langskomt, rustig uitlegt hoe het werkt en pas vertrekt als alles weer doet wat het moet doen. Geduldig, persoonlijk, in gewone taal. De oude site sprak juist een heel andere taal, met onduidelijke navigatie en gedoe om een afspraak te maken. Lisa, de eigenaar, wilde een site die meegroeit met het bedrijf, goed vindbaar is en voor haar doelgroep écht makkelijk te gebruiken.",
      overviewHeading: "Projectoverzicht",
      overviewBody:
        "De nieuwe site straalt rust uit. Grote, leesbare tekst. Duidelijke knoppen. Een logische flow van 'ik heb een probleem' naar 'ik maak een afspraak'. Elke dienst kreeg een eigen pagina die precies vertelt wat je kunt verwachten, van computerhulp tot slim gebruik van AI. Vertrouwen speelt een grote rol bij deze doelgroep, dus echte klantverhalen staan prominent op de site. Tarieven staan open en transparant, zoals De Digitale Hand zelf ook werkt. Qua SEO is de site volledig ingericht op lokale vindbaarheid in Den Haag, met een bloggedeelte vol praktische tips voor organische groei op langere termijn.",
      approachHeading: "De aanpak",
      approachBody:
        "Ik ben begonnen bij de doelgroep. Wie belt De Digitale Hand, waar lopen ze tegenaan, wat vinden ze fijn en wat jaagt ze weg? Die vragen bepaalden alles: het ontwerp, de toon en de structuur van elke pagina. Vanuit dat startpunt koos ik kleur, typografie en opbouw met één doel voor ogen: dat de buurvrouw die haar wifi werkend wil hebben, zonder gedoe op de juiste knop komt. De site is bovendien gebouwd om mee te groeien, zodat nieuwe diensten of werkgebieden moeiteloos passen.",
      accent: "#2A8E8E",
    },
    en: {
      eyebrow: "CASE STUDY",
      title: "Digitale Hand",
      tagline: "Technology made understandable.",
      meta: [
        { label: "Client", value: "Lisa Giasi" },
        { label: "Sector", value: "Digital help at home" },
        { label: "Timeline", value: "± 3 weeks" },
        { label: "Role", value: "Concept, copy, design & development" },
      ],
      liveUrl: "https://digitalehand.nl",
      liveDomain: "digitalehand.nl",
      heroImage: "/images/digitale-hand.png",
      mockups: [
        { src: "/images/portfolio/digitale-hand-shot-1.png" },
        { src: "/images/portfolio/digitale-hand-shot-2.png" },
      ],
      caseIntro:
        "The Digitale Hand case helps people with technology, often elderly people who get stuck with their laptop, phone or wifi. Someone who visits, calmly explains how it works and only leaves once everything runs again. Patient, personal, in plain language. The old site spoke a completely different language, with unclear navigation and friction around booking. Lisa, the owner, wanted a site that grows with the business, is well-findable, and is genuinely easy to use for her audience.",
      overviewHeading: "Project overview",
      overviewBody:
        "The new site radiates calm. Large, readable text. Clear buttons. A logical flow from 'I have a problem' to 'I book an appointment'. Every service has its own page that explains exactly what to expect, from computer help to smart use of AI. Trust matters with this audience, so real customer stories sit prominently on the site. Pricing is open and transparent, just like Digitale Hand itself. SEO-wise the site is fully tuned for local findability in The Hague, with a blog section full of practical tips for long-term organic growth.",
      approachHeading: "The approach",
      approachBody:
        "I started with the audience. Who calls Digitale Hand, where do they get stuck, what works for them and what drives them away? Those questions determined everything: the design, the tone and the structure of every page. From there I picked colour, typography and structure with one goal in mind: that the neighbour who wants her wifi working reaches the right button without friction. The site is also built to grow, so new services or service areas slot in effortlessly.",
      accent: "#2A8E8E",
    },
  },

  "enjoy-the-breeze": {
    nl: {
      eyebrow: "CASE STUDY",
      title: "Enjoy The Breeze",
      tagline: "Van Airbnb naar eigen merk.",
      meta: [
        { label: "Klant", value: "Angela" },
        { label: "Sector", value: "Vakantieverhuur" },
        { label: "Looptijd", value: "± 3 weken" },
        { label: "Rol", value: "Concept, copy, ontwerp & development" },
      ],
      liveUrl: "https://enjoythebreezecuracao.com",
      liveDomain: "enjoythebreezecuracao.com",
      heroImage: "/images/enjoy-the-breeze.png",
      mockups: [
        { src: "/images/portfolio/enjoy-the-breeze-shot-1.png" },
        { src: "/images/portfolio/enjoy-the-breeze-shot-2.png" },
      ],
      caseIntro:
        "De case Enjoy The Breeze is een vakantieappartement op Blue Bay Beach Golf Resort in Curaçao. Schitterende locatie, topreviews, alles wat je maar wilt. Alleen kwamen alle boekingen via Airbnb, met flinke commissie en zonder eigen branding of contact met gasten voor aankomst. De wens: een eigen online aanwezigheid met dezelfde professionele uitstraling als de grote platformen, maar volledig op eigen naam. Directe boekingen, direct contact en zelf de regie over het merk.",
      overviewHeading: "Projectoverzicht",
      overviewBody:
        "De website doet één ding vooral heel goed: het vakantiegevoel overbrengen en de bezoeker laten denken 'ja, hier wil ik naartoe'. Sfeervolle foto's van het appartement en de omgeving, heldere info over wat je kunt verwachten en een boekingsflow die net zo soepel werkt als bij de grote jongens. De structuur is bewust simpel: wat bieden we, hoe ziet het eruit, wat is er in de buurt, hoe boek je. Geen overbodige pagina's, alles wijst naar die ene actie: van bezoeker naar gast. Op SEO-vlak is de site geoptimaliseerd op zoektermen rondom vakantie op Curaçao, Blue Bay en vakantieappartementen op het eiland.",
      approachHeading: "De aanpak",
      approachBody:
        "Voor ik begon, bepaalde ik samen met de eigenaar hoe Enjoy The Breeze online moest aanvoelen: niet als een advertentie, maar als de eerste stap van een vakantie. Vanuit dat uitgangspunt koos ik kleur, beeldtaal en opbouw. Elke sectie kreeg een doel, met directe boekingsmogelijkheden via Micazu én via WhatsApp, zodat gasten precies kunnen kiezen wat bij hen past. Resultaat: een eigen stek op het web die het appartement onafhankelijk maakt van externe platforms.",
      accent: "#2A7DA8",
    },
    en: {
      eyebrow: "CASE STUDY",
      title: "Enjoy The Breeze",
      tagline: "From Airbnb to own brand.",
      meta: [
        { label: "Client", value: "Angela" },
        { label: "Sector", value: "Holiday rental" },
        { label: "Timeline", value: "± 3 weeks" },
        { label: "Role", value: "Concept, copy, design & development" },
      ],
      liveUrl: "https://enjoythebreezecuracao.com",
      liveDomain: "enjoythebreezecuracao.com",
      heroImage: "/images/enjoy-the-breeze.png",
      mockups: [
        { src: "/images/portfolio/enjoy-the-breeze-shot-1.png" },
        { src: "/images/portfolio/enjoy-the-breeze-shot-2.png" },
      ],
      caseIntro:
        "The Enjoy The Breeze case is a holiday apartment at Blue Bay Beach Golf Resort in Curaçao. Stunning location, top reviews, everything you could want. The catch: all bookings came through Airbnb, with hefty commission and no own branding or contact with guests before arrival. The wish: an own online presence with the same professional polish as the big platforms, but fully under own name. Direct bookings, direct contact and control over the brand.",
      overviewHeading: "Project overview",
      overviewBody:
        "The site does one thing especially well: convey the holiday feeling and make visitors think 'yes, I want to be there'. Atmospheric photos of the apartment and the surroundings, clear info on what to expect and a booking flow as smooth as on the big platforms. The structure is deliberately simple: what we offer, what it looks like, what's nearby, how to book. No redundant pages, everything points to that one action: from visitor to guest. SEO-wise the site is optimised around terms about holidays in Curaçao, Blue Bay and apartments on the island.",
      approachHeading: "The approach",
      approachBody:
        "Before I started, I defined together with the owner how Enjoy The Breeze should feel online: not like an ad, but like the first step of a holiday. From that starting point I chose colour, imagery and structure. Every section got a job, with direct booking options via Micazu and via WhatsApp, so guests can pick what suits them. The result: an own home on the web that makes the apartment independent of external platforms.",
      accent: "#2A7DA8",
    },
  },
};

export const V2_CASE_IDS = Object.keys(portfolioV2Cases);
