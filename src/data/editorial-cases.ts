/**
 * Editorial case-study content.
 * Used by the premium <EditorialCaseStudy /> + <EditorialCaseStudyAngela /> layouts.
 */

export interface EditorialContent {
  eyebrow: string;
  client: string;
  industry: string;
  year: string;
  services: string;
  heroImage?: string;
  heroSubtitle: string;
  heroOneLiner?: string;
  intro: string;
  challenge: string[];
  approach: { title: string; body: string }[];
  quote: { text: string; name: string; role: string; avatar?: string };
  stats: { value: string; label: string; sub?: string }[];
  resultText: string;
  resultHeadline?: string;
  resultFootnote?: string;
  finalImage?: string;

  /** Angela-only: 3 kolom summary onder hero */
  summary?: { label: string; text: string }[];
  /** Angela-only: 4 verschillende pagina's voor de live website showcase */
  pages?: { src: string; label: string; device: "laptop" | "desktop" | "phone" }[];
  /** Angela-only: 3 design decisions met visual key */
  decisions?: { number: string; label: string; title: string; body: string; visual: "typography" | "palette" | "sitemap" }[];

  /** Reuring-only: marquee tekens tussen secties */
  marqueeWords?: string[];
  /** Reuring-only: 7 speelplekken met sfeer-omschrijving */
  venues?: { number: string; name: string; vibe: string; detail: string }[];
  /** Reuring-only: festival metadata (datum, tijden, etc.) */
  festivalMeta?: { label: string; value: string }[];
}

export const editorialCaseContent: Record<string, { nl: EditorialContent; en: EditorialContent }> = {
  "angela-ceremonies": {
    nl: {
      eyebrow: "CASE STUDY / 01 — 2025",
      client: "Angela Bhagole-Mangre",
      industry: "Trouwambtenaar",
      year: "Rotterdam",
      services: "Strategie · Design · Build · SEO",
      heroImage: "/images/angela-ceremonies.png",
      heroSubtitle: "Van visitekaartje naar verhaal ✨",
      heroOneLiner: "Een trouwambtenaar die online precies zo warm overkomt als tijdens haar ceremonies.",
      intro: "Bij een trouwambtenaar moet je al bij de eerste klik voelen of het klikt. Dat werd onze meetlat.",
      summary: [
        { label: "De uitdaging", text: "Angela's website liet haar functioneel zien, maar niet haar warmte." },
        { label: "De oplossing", text: "Een nieuwe site opgebouwd rondom haar drie pijlers: liefdevol, persoonlijk, verbindend." },
        { label: "Het resultaat", text: "Eerste reacties via het contactformulier binnen een week na livegang." },
      ],
      pages: [
        { src: "/images/angela-ceremonies.png", label: "Homepage — de eerste indruk", device: "laptop" },
        { src: "/images/angela-ceremonies.png", label: "Trouwen — dienstenpagina", device: "desktop" },
        { src: "/images/angela-ceremonies.png", label: "Over Angela — het verhaal", device: "desktop" },
        { src: "/images/angela-ceremonies.png", label: "Mobile — onderweg goed", device: "phone" },
      ],
      decisions: [
        {
          number: "01",
          label: "Typografie",
          title: "Serifs voor emotie, sans voor helderheid",
          body: "Een display-serif met karakter voor de koppen, omdat trouwen om gevoel draait. Daaronder een rustige sans voor body-tekst, zodat alles makkelijk leesbaar blijft. Twee fonts, één duidelijke hiërarchie.",
          visual: "typography",
        },
        {
          number: "02",
          label: "Kleur",
          title: "Aardse tinten die warmte ademen",
          body: "Geen standaard wit-met-roze trouw-cliché. In plaats daarvan: warme crème, zacht terracotta en diep antraciet. Tinten die niet schreeuwen maar uitnodigen, en die elke foto van een ceremonie laten zingen.",
          visual: "palette",
        },
        {
          number: "03",
          label: "Structuur",
          title: "Opgebouwd rondom drie pijlers",
          body: "Liefdevol, persoonlijk, verbindend. De drie woorden die Angela zelf gebruikt om haar werk te omschrijven, vormen de ruggengraat van de site. Elke pagina vertelt een stukje van dat verhaal.",
          visual: "sitemap",
        },
      ],
      challenge: [],
      approach: [],
      quote: {
        text: "Ruud snapte meteen wat ik bedoelde. Het resultaat is een site die precies voelt zoals mijn ceremonies: warm, persoonlijk en uitnodigend. Stellen zeggen nu dat ze al een goed gevoel hadden nog voordat ze me spraken.",
        name: "Angela Bhagole-Mangre",
        role: "Angela Ceremonies · Zelfstandig trouwambtenaar",
        avatar: "/images/angela-photo.png",
      },
      stats: [
        { value: "490+", label: "Ceremonies", sub: "via de site aangevraagd" },
        { value: "< 1 wk", label: "Eerste reactie", sub: "via het contactformulier" },
        { value: "100%", label: "Op maat", sub: "geen template in zicht" },
      ],
      resultHeadline: "Een site die doet wat hij moet doen",
      resultText: "Een website die niet alleen mooi is, maar die ook werkt. Stellen krijgen een warm gevoel voordat het eerste gesprek heeft plaatsgevonden.",
      resultFootnote: "Ook bereikt: apart coaching-gedeelte voor startende BABS'en, lokale vindbaarheid flink verbeterd op 'trouwambtenaar Rotterdam'.",
      finalImage: "/images/angela-ceremonies.png",
    },
    en: {
      eyebrow: "CASE STUDY / 01 — 2025",
      client: "Angela Bhagole-Mangre",
      industry: "Wedding Officiant",
      year: "Rotterdam",
      services: "Strategy · Design · Build · SEO",
      heroImage: "/images/angela-ceremonies.png",
      heroSubtitle: "From business card to story ✨",
      heroOneLiner: "A wedding officiant who feels online exactly as warm as during her ceremonies.",
      intro: "With a wedding officiant, you should feel the click on the very first click. That became our benchmark.",
      summary: [
        { label: "The challenge", text: "Angela's website showed her functionally, but not her warmth." },
        { label: "The solution", text: "A new site built around her three pillars: loving, personal, connecting." },
        { label: "The result", text: "First contact form replies within a week after going live." },
      ],
      pages: [
        { src: "/images/angela-ceremonies.png", label: "Homepage — the first impression", device: "laptop" },
        { src: "/images/angela-ceremonies.png", label: "Weddings — services page", device: "desktop" },
        { src: "/images/angela-ceremonies.png", label: "About Angela — the story", device: "desktop" },
        { src: "/images/angela-ceremonies.png", label: "Mobile — good on the go", device: "phone" },
      ],
      decisions: [
        {
          number: "01",
          label: "Typography",
          title: "Serifs for emotion, sans for clarity",
          body: "A display serif with character for the headings, because weddings are about feeling. Below that a calm sans for body text, so everything stays easy to read. Two fonts, one clear hierarchy.",
          visual: "typography",
        },
        {
          number: "02",
          label: "Colour",
          title: "Earthy tones that breathe warmth",
          body: "No standard white-and-pink wedding cliché. Instead: warm cream, soft terracotta and deep charcoal. Tones that don't shout but invite, and that let every ceremony photo sing.",
          visual: "palette",
        },
        {
          number: "03",
          label: "Structure",
          title: "Built around three pillars",
          body: "Loving, personal, connecting. The three words Angela herself uses to describe her work form the backbone of the site. Every page tells part of that story.",
          visual: "sitemap",
        },
      ],
      challenge: [],
      approach: [],
      quote: {
        text: "Ruud immediately understood what I meant. The result is a site that feels exactly like my ceremonies: warm, personal, inviting. Couples now tell me they already had a good feeling before we even spoke.",
        name: "Angela Bhagole-Mangre",
        role: "Angela Ceremonies · Independent wedding officiant",
        avatar: "/images/angela-photo.png",
      },
      stats: [
        { value: "490+", label: "Ceremonies", sub: "requested via the site" },
        { value: "< 1 wk", label: "First reply", sub: "via the contact form" },
        { value: "100%", label: "Custom built", sub: "no template in sight" },
      ],
      resultHeadline: "A site that does what it should",
      resultText: "A website that's not just beautiful but also works. Couples get a warm feeling before the first conversation has even happened.",
      resultFootnote: "Also achieved: a separate coaching section for new officiants, and significantly better local visibility for 'wedding officiant Rotterdam'.",
      finalImage: "/images/angela-ceremonies.png",
    },
  },

  "reuring-op-de-delle": {
    nl: {
      eyebrow: "CASE STUDY / 02 — 2025",
      client: "Stichting Reuring",
      industry: "Cultureel Festival",
      year: "Dijkerhoek & Espelo",
      services: "Concept · Design · Build · SEO",
      heroImage: "/images/reuring-op-de-delle.png",
      heroSubtitle: "Een festival dat nog niet online bestond 🎭",
      heroOneLiner: "Zeven speelplekken, vijf uur muziek en theater, één digitaal podium dat de reuring al voelbaar maakt.",
      intro: "Bij een festival dat draait om beleving, moet de website dat gevoel meteen meegeven.",
      festivalMeta: [
        { label: "Datum", value: "Eind augustus" },
        { label: "Locatie", value: "Salland" },
        { label: "Speelplekken", value: "7" },
        { label: "Duur", value: "5 uur" },
      ],
      marqueeWords: [
        "REURING",
        "DIJKERHOEK",
        "5 UUR MUZIEK",
        "ESPELO",
        "7 PODIA",
        "OP DE FIETS",
        "SALLAND",
        "PURE ENERGIE",
      ],
      venues: [
        { number: "01", name: "De Deel", vibe: "De grote opening", detail: "Boerenschuur · 200 plaatsen" },
        { number: "02", name: "De Boerenschuur", vibe: "Akoestisch en intiem", detail: "Onder de balken" },
        { number: "03", name: "Onder de Bergkap", vibe: "Open en zonnig", detail: "Buitenpodium" },
        { number: "04", name: "De Dorsvloer", vibe: "Stoffig en authentiek", detail: "Historisch decor" },
        { number: "05", name: "Het Erf", vibe: "Doorloop en ontmoeting", detail: "Tussen de optredens door" },
        { number: "06", name: "De Hooizolder", vibe: "Klein, knus, bijzonder", detail: "Verstopt onder het dak" },
        { number: "07", name: "De Openlucht", vibe: "Afsluiting onder de sterren", detail: "Het slotmoment" },
      ],
      challenge: [
        "Reuring in de Delle is een cultureel festival midden op het Sallandse platteland. Zeven speelplekken in Dijkerhoek en Espelo. Muzikanten, theatermakers, zangers en dansers, voor een publiek dat per fiets van plek naar plek trekt.",
        "Alleen: het festival bestond nog niet online. Helemaal niet. Geen website, geen digitale aanwezigheid. Terwijl bezoekers, artiesten en vrijwilligers wel ergens terecht moesten.",
        "De vraag was helder: een online visitekaartje dat recht doet aan wat het festival in het echt is. Professioneel, warm, en even eigenwijs als het festival zelf.",
      ],
      approach: [
        { title: "Sfeer voor structuur", body: "Warme rood- en oranjetinten, aangevuld met crème en aardse kleuren die het Sallandse landschap weerspiegelen. Het moet aanvoelen alsof je er al bent." },
        { title: "Bezoeker-eerst flow", body: "Wat is dit, wanneer is het, wat kan ik verwachten, hoe meld ik me aan? De homepage vertelt het hele verhaal in één vloeiende scroll." },
        { title: "Zeven podia, zeven karakters", body: "Elke speelplek kreeg z'n eigen identiteit op de site. Dat bouwt verwachting op nog voordat je op de fiets stapt." },
        { title: "Twee aparte routes", body: "Eén flow voor bezoekers (aanmelden, info), één voor artiesten (eigen opgaveformulier). Iedereen vindt wat 'ie zoekt." },
      ],
      quote: {
        text: "Wat Ruud heeft neergezet, voelt precies zoals het festival zelf: warm, doordacht en met karakter. Bezoekers raken al enthousiast voordat ze op de fiets stappen.",
        name: "Stichting Reuring",
        role: "Reuring op de Delle · Festivalorganisatie",
      },
      stats: [
        { value: "7", label: "Speelplekken", sub: "elk met eigen sfeer" },
        { value: "0 → 1", label: "Online presence", sub: "vanaf scratch opgebouwd" },
        { value: "2", label: "Aanmeldflows", sub: "bezoekers en artiesten" },
      ],
      resultHeadline: "Een digitaal podium dat reuring maakt",
      resultText: "Een site die niet alleen informeert, maar vooral enthousiasmeert. Bezoekers weten meteen waar ze aan toe zijn en raken in de stemming voordat ze op de fiets stappen.",
      resultFootnote: "Ook bereikt: aparte aanmeldroute voor artiesten, mobielvriendelijke programma-tijdlijn, en vindbaarheid op 'festival Salland' opgebouwd vanaf nul.",
      finalImage: "/images/reuring-op-de-delle.png",
    },
    en: {
      eyebrow: "CASE STUDY / 02 — 2025",
      client: "Stichting Reuring",
      industry: "Cultural Festival",
      year: "Dijkerhoek & Espelo",
      services: "Concept · Design · Build · SEO",
      heroImage: "/images/reuring-op-de-delle.png",
      heroSubtitle: "A festival that didn't exist online yet 🎭",
      heroOneLiner: "Seven stages, five hours of music and theatre, one digital stage that makes the buzz tangible.",
      intro: "For a festival that's all about experience, the website has to convey that feeling immediately.",
      festivalMeta: [
        { label: "Date", value: "Late August" },
        { label: "Location", value: "Salland" },
        { label: "Stages", value: "7" },
        { label: "Duration", value: "5 hours" },
      ],
      marqueeWords: [
        "REURING",
        "DIJKERHOEK",
        "5 HOURS LIVE",
        "ESPELO",
        "7 STAGES",
        "BY BIKE",
        "SALLAND",
        "PURE ENERGY",
      ],
      venues: [
        { number: "01", name: "De Deel", vibe: "The grand opening", detail: "Barn · 200 seats" },
        { number: "02", name: "The Barn", vibe: "Acoustic and intimate", detail: "Under the beams" },
        { number: "03", name: "Under the Canopy", vibe: "Open and sunlit", detail: "Outdoor stage" },
        { number: "04", name: "The Threshing Floor", vibe: "Dusty and authentic", detail: "Historic setting" },
        { number: "05", name: "The Yard", vibe: "Crossroads and meetings", detail: "Between performances" },
        { number: "06", name: "The Hayloft", vibe: "Small, cosy, special", detail: "Hidden under the roof" },
        { number: "07", name: "The Open Air", vibe: "Closing under the stars", detail: "The final moment" },
      ],
      challenge: [
        "Reuring in de Delle is a cultural festival in the Salland countryside. Seven stages across Dijkerhoek and Espelo. Musicians, theatre makers, singers and dancers, for an audience that cycles from place to place.",
        "But the festival didn't exist online. No website, no digital footprint. While visitors, artists and volunteers all needed somewhere to go.",
        "The brief was clear: a digital business card that does justice to what the festival is in real life. Professional, warm, and as headstrong as the festival itself.",
      ],
      approach: [
        { title: "Atmosphere first", body: "Warm reds and oranges, alongside cream and earthy tones that mirror the Salland landscape. It should feel like you're already there." },
        { title: "Visitor-first flow", body: "What is this, when is it, what can I expect, how do I sign up? The homepage tells the whole story in one smooth scroll." },
        { title: "Seven stages, seven characters", body: "Each venue got its own identity on the site. That builds anticipation before you even hop on the bike." },
        { title: "Two separate routes", body: "One flow for visitors (sign-up, info), one for artists (their own form). Everyone finds what they need." },
      ],
      quote: {
        text: "What Ruud built feels exactly like the festival itself: warm, considered and with character. Visitors get excited before they even hop on the bike.",
        name: "Stichting Reuring",
        role: "Reuring op de Delle · Festival organisation",
      },
      stats: [
        { value: "7", label: "Stages", sub: "each with own vibe" },
        { value: "0 → 1", label: "Online presence", sub: "built from scratch" },
        { value: "2", label: "Sign-up flows", sub: "visitors and artists" },
      ],
      resultHeadline: "A digital stage that creates buzz",
      resultText: "A site that doesn't just inform, but excites. Visitors know exactly what's up and get in the mood before they hop on the bike.",
      resultFootnote: "Also achieved: separate artist sign-up route, mobile-friendly programme timeline, and visibility for 'festival Salland' built from zero.",
      finalImage: "/images/reuring-op-de-delle.png",
    },
  },

  "digitale-hand": {
    nl: {
      eyebrow: "CASE STUDY / 03 — 2025",
      client: "Lisa Giasi",
      industry: "Technische hulp aan huis",
      year: "Den Haag",
      services: "Strategie · Design · Build · Lokale SEO",
      heroImage: "/images/digitale-hand.png",
      heroSubtitle: "Technologie. Maar dan menselijk. 🤝",
      heroOneLiner: "Een website die net zo geduldig en helder is als de hulp die De Digitale Hand zelf biedt.",
      intro: "Een website die de doelgroep niet bang maakt, maar gerust stelt.",
      challenge: [
        "De Digitale Hand helpt mensen die vastlopen met hun computer, telefoon of wifi. Vaak ouderen. Iemand komt langs, legt het rustig uit en vertrekt pas als alles weer doet wat het moet doen.",
        "De oude site vroeg precies van die doelgroep dat ze door onhandige menu's moesten klikken om een afspraak te maken. Het tegenovergestelde van wat het bedrijf staat.",
        "Eigenaar Lisa wist het scherp: een nieuwe site moest meegroeien, vindbaar zijn op lokale zoektermen én begrijpelijk zijn voor mensen die zichzelf 'niet zo goed met computers' vinden.",
      ],
      approach: [
        { title: "Doelgroep eerst", body: "We zijn niet gestart bij design, maar bij de mensen die bellen. Wat houdt ze tegen, wat geeft vertrouwen? Die antwoorden vormden de hele site." },
        { title: "Rust in de structuur", body: "Grote leesbare letters, duidelijke knoppen en een logische flow van 'ik heb een probleem' naar 'ik maak een afspraak'. Geen drempels, geen jargon." },
        { title: "Echte verhalen", body: "Reviews van Mark, Irene en Ria krijgen prominent een plek. Mensen herkennen zichzelf. Dat werkt sterker dan welke marketingtekst ook." },
        { title: "Vindbaar in Den Haag", body: "Geoptimaliseerd op 'computerhulp Den Haag', 'wifi problemen oplossen' en 'digitale hulp aan huis'. Plus een blog voor organische groei op de lange termijn." },
      ],
      quote: {
        text: "Eindelijk een site die mijn klanten zelf kunnen gebruiken. Geen drempels, geen verwarring. Bellen ze me op? Dan hebben ze meestal al gezien wat ik doe en wat het kost. Dat scheelt mij tijd en hen onzekerheid.",
        name: "Lisa Giasi",
        role: "Eigenaar · De Digitale Hand",
      },
      stats: [
        { value: "16pt+", label: "Basis fontmaat", sub: "leesbaar voor iedereen" },
        { value: "3 klikken", label: "Naar een afspraak", sub: "vanuit elke pagina" },
        { value: "100%", label: "Transparant", sub: "tarieven openbaar" },
      ],
      resultHeadline: "Een site die werkt voor de mensen waarvoor hij bedoeld is",
      resultText: "Niet voor mij, niet voor Lisa, maar voor de oudere buurvrouw die haar wifi werkend wil hebben. Hij groeit moeiteloos mee als Lisa nieuwe diensten toevoegt of haar werkgebied uitbreidt.",
      resultFootnote: "Ook bereikt: betere lokale vindbaarheid in Den Haag, een blog voor organische autoriteit, en een toegankelijk fundament dat klaar is om mee op te schalen.",
      finalImage: "/images/digitale-hand.png",
    },
    en: {
      eyebrow: "CASE STUDY / 03 — 2025",
      client: "Lisa Giasi",
      industry: "Tech help at home",
      year: "The Hague",
      services: "Strategy · Design · Build · Local SEO",
      heroImage: "/images/digitale-hand.png",
      heroSubtitle: "Technology. But human. 🤝",
      heroOneLiner: "A website as patient and clear as the help Digitale Hand offers in person.",
      intro: "A website that doesn't intimidate, but reassures.",
      challenge: [
        "Digitale Hand helps people who get stuck with their computer, phone or wifi. Often the elderly. Someone visits, calmly explains, and leaves only when it all works again.",
        "The old website asked exactly this audience to muddle through clunky menus to book a visit. The opposite of what the company stands for.",
        "Owner Lisa was clear: a new site had to scale, rank for local terms, and be understandable for people who say they 'aren't good with computers'.",
      ],
      approach: [
        { title: "Audience first", body: "We didn't start with design, we started with the people calling in. What stops them, what builds trust? Those answers shaped the whole site." },
        { title: "Calm structure", body: "Large readable type, clear buttons and a logical flow from 'I have a problem' to 'I book an appointment'. No friction, no jargon." },
        { title: "Real stories", body: "Reviews from real customers get a prominent place. People see themselves and feel understood. That works better than any marketing copy." },
        { title: "Found locally", body: "Optimised for 'tech help The Hague', 'fix wifi problems' and 'digital help at home'. Plus a blog for long-term organic growth." },
      ],
      quote: {
        text: "Finally a site my clients can use themselves. No friction, no confusion. By the time they call me, they already know what I do and what it costs. Saves me time and them uncertainty.",
        name: "Lisa Giasi",
        role: "Owner · Digitale Hand",
      },
      stats: [
        { value: "16pt+", label: "Base font size", sub: "readable for everyone" },
        { value: "3 clicks", label: "To an appointment", sub: "from any page" },
        { value: "100%", label: "Transparent", sub: "pricing public" },
      ],
      resultHeadline: "A site that works for the people it's for",
      resultText: "Not for me, not for Lisa, but for the older neighbour who just wants her wifi to work. It scales effortlessly when Lisa adds services or expands her area.",
      resultFootnote: "Also: stronger local visibility in The Hague, a blog for organic authority, and an accessible foundation ready to scale with the business.",
      finalImage: "/images/digitale-hand.png",
    },
  },

  "enjoy-the-breeze": {
    nl: {
      eyebrow: "CASE STUDY / 04 — 2025",
      client: "Angela",
      industry: "Vakantieverhuur Curaçao",
      year: "Blue Bay Beach Resort",
      services: "Concept · Design · Build · Direct boeken",
      heroImage: "/images/enjoy-the-breeze.png",
      heroSubtitle: "Een eigen plek in de zon ☀️",
      heroOneLiner: "Een vakantieappartement op Curaçao bevrijd van Airbnb-commissie en eindelijk in eigen merk.",
      intro: "Eindelijk een site waar gasten direct boeken, en eigenaresse Angela de regie heeft.",
      challenge: [
        "Enjoy The Breeze is een appartement op Blue Bay Beach & Golf Resort op Curaçao. Schitterende plek, topreviews. Maar elke boeking liep via Airbnb of Micazu, met de bijbehorende 15% commissie en geen eigen merk.",
        "Angela wilde een online plek die de sfeer van het eiland en het resort overbrengt, maar die ook gewoon werkt: directe boekingen, helder contact, en volledige controle over hoe de gast haar verhaal binnenkomt.",
        "De uitdaging: concurreren met de polish van grote platformen, vanuit één klein vakantieappartement, zonder marketingteam.",
      ],
      approach: [
        { title: "Vakantiegevoel eerst", body: "De site moest de gast laten denken: 'ja, hier wil ik naartoe'. Sfeervolle foto's van het appartement, het resort en de zee. Ruimte om te ademen." },
        { title: "Eén pad naar boeken", body: "Wat is het, hoe ziet het eruit, wat is er in de buurt, hoe boek je. Geen overbodige pagina's, geen afleidingen. Alles wijst naar één moment: van bezoeker naar gast." },
        { title: "Lokale Curaçao-SEO", body: "Geoptimaliseerd op 'vakantie Curaçao', 'Blue Bay appartement' en 'vakantieverhuur Curaçao'. Gasten die zoeken vinden Angela direct." },
        { title: "Reviews als bewijs", body: "10/10 op Micazu, 4.57 op Airbnb. Die scores komen prominent in beeld, dus nieuwe gasten weten direct: dit is geen gok." },
      ],
      quote: {
        text: "Voor het eerst voelt het alsof het echt mijn appartement is dat verhuurd wordt, en niet zomaar een advertentie tussen duizenden andere. Gasten boeken nu rechtstreeks en het contact voor aankomst is veel persoonlijker.",
        name: "Angela",
        role: "Eigenaresse · Enjoy The Breeze Curaçao",
      },
      stats: [
        { value: "15%", label: "Commissie bespaard", sub: "per directe boeking" },
        { value: "10/10", label: "Micazu score", sub: "prominent zichtbaar" },
        { value: "1 merk", label: "Eigen verhaal", sub: "los van platformen" },
      ],
      resultHeadline: "Een eigen plek op het web, los van Airbnb",
      resultText: "Een eigen stek die het appartement onafhankelijk maakt van platformen. Mooie uitstraling, directe boekingen, en volledige controle over merk en gastbeleving.",
      resultFootnote: "Ook bereikt: WhatsApp-direct contact, vindbaarheid op Curaçao-zoektermen, en een fundering om straks meer panden onder hetzelfde merk te kunnen verhuren.",
      finalImage: "/images/enjoy-the-breeze.png",
    },
    en: {
      eyebrow: "CASE STUDY / 04 — 2025",
      client: "Angela",
      industry: "Curaçao holiday rental",
      year: "Blue Bay Beach Resort",
      services: "Concept · Design · Build · Direct booking",
      heroImage: "/images/enjoy-the-breeze.png",
      heroSubtitle: "A place in the sun ☀️",
      heroOneLiner: "A holiday apartment in Curaçao freed from Airbnb commission and finally with its own brand.",
      intro: "Finally a site where guests book direct and Angela owns the experience.",
      challenge: [
        "Enjoy The Breeze is an apartment at Blue Bay Beach & Golf Resort on Curaçao. Stunning location, top reviews. But every booking came through Airbnb or Micazu, with the 15% commission and zero brand of its own.",
        "Angela wanted a digital place that captures the island and resort vibe and just works: direct bookings, clear contact, and full control over how guests meet her story.",
        "The challenge: compete with the polish of the big platforms from one small holiday apartment, without a marketing team.",
      ],
      approach: [
        { title: "Holiday feel first", body: "The site had to make guests think: 'yes, this is where I want to be'. Atmospheric photos of the apartment, resort and sea. Room to breathe." },
        { title: "One path to booking", body: "What it is, what it looks like, what's nearby, how to book. No spare pages, no distractions. Everything points to one moment: from visitor to guest." },
        { title: "Local Curaçao SEO", body: "Optimised for 'holiday Curaçao', 'Blue Bay apartment' and 'Curaçao rental'. Guests searching find Angela right away." },
        { title: "Reviews as proof", body: "10/10 on Micazu, 4.57 on Airbnb. Those scores get prime real estate, so new guests know: this is not a gamble." },
      ],
      quote: {
        text: "For the first time it feels like it's actually my apartment that's being rented, not just one ad among thousands. Guests now book directly and the contact before arrival is much more personal.",
        name: "Angela",
        role: "Owner · Enjoy The Breeze Curaçao",
      },
      stats: [
        { value: "15%", label: "Commission saved", sub: "per direct booking" },
        { value: "10/10", label: "Micazu score", sub: "front and centre" },
        { value: "1 brand", label: "Own story", sub: "free from platforms" },
      ],
      resultHeadline: "A place on the web independent of Airbnb",
      resultText: "An own home on the web that makes the apartment independent of platforms. Beautiful presentation, direct bookings, and full control over brand and guest experience.",
      resultFootnote: "Also: WhatsApp direct contact, Curaçao search visibility, and a foundation ready to host additional properties under the same brand.",
      finalImage: "/images/enjoy-the-breeze.png",
    },
  },
};
