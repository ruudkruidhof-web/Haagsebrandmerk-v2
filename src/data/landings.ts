// Landingspagina's — SEO + GEO + conversie geoptimaliseerd.
// Elke pagina target één high-intent zoekwoord met een exact-match H1,
// een direct antwoord (GEO), unieke benefits, lokale/persona-content en FAQ-schema.

export interface LandingBenefit { icon: string; title: string; body: string; }
export interface LandingFaq { q: string; a: string; }
export interface LandingContent {
  slug: string;
  keyword: string;
  metaTitle: string;
  metaDesc: string;
  eyebrow: string;
  h1: string;
  heroSub: string;
  /** GEO: bondig, feitelijk antwoord (40-60 woorden) bovenaan de pagina */
  directAnswer: string;
  heroBullets: string[];
  serviceName: string;
  serviceDescription: string;
  areaServed: string[];
  benefitsTitle: string;
  benefitsIntro: string;
  benefits: LandingBenefit[];
  /** Unieke sectie: wijken (lokaal) of pijnpunten (persona) */
  deepTitle: string;
  deepIntro: string;
  deepItems: { title: string; body: string }[];
  /** Optionele kostentabel (kosten-pagina) */
  costTable?: { name: string; price: string; note: string; best: string }[];
  faqTitle: string;
  faqs: LandingFaq[];
  related: { label: string; href: string }[];
}

const PORTFOLIO = { label: "Bekijk mijn werk", href: "/portfolio" };
const PRIJZEN = { label: "Bekijk de prijzen", href: "/prijzen" };
const OVER = { label: "Maak kennis met Ruud", href: "/over" };

export const landings: LandingContent[] = [
  /* ─────────────────────────── 1. DEN HAAG ─────────────────────────── */
  {
    slug: "website-laten-maken-den-haag",
    keyword: "website laten maken Den Haag",
    metaTitle: "Website laten maken in Den Haag (vanaf €995) | Haagse Brandmerk",
    metaDesc:
      "Website laten maken in Den Haag? Ik ben Ruud Kruidhof, freelance webdesigner uit Den Haag. Vaste prijs vanaf €995, binnen 2 weken live, persoonlijk contact en goed vindbaar in Google.",
    eyebrow: "Webdesigner uit Den Haag",
    h1: "Website laten maken in Den Haag",
    heroSub:
      "Persoonlijk gemaakt door een Hagenees. Een website die laat zien wie je bent, vertrouwen wekt en je lokaal vindbaar maakt — tegen een vaste prijs, zonder verrassingen.",
    directAnswer:
      "Een website laten maken in Den Haag kost bij Haagse Brandmerk vanaf €995 voor een opfrisbeurt en €2.295 voor een volledige website op maat. Je werkt rechtstreeks met Ruud Kruidhof, een freelance webdesigner uit Den Haag. De meeste sites staan binnen 2 tot 3 weken live, met een vaste prijs die vooraf vaststaat.",
    heroBullets: ["Vaste prijs vanaf €995", "Binnen 2–3 weken live", "100% tevredenheidsgarantie", "Lokaal: koffie in Den Haag"],
    serviceName: "Website laten maken Den Haag",
    serviceDescription:
      "Freelance webdesigner in Den Haag die professionele websites op maat bouwt voor ondernemers. Vaste prijs, snelle doorlooptijd en focus op lokale vindbaarheid.",
    areaServed: ["Den Haag", "Scheveningen", "Rijswijk", "Voorburg", "Leidschendam", "Wassenaar", "Zuid-Holland"],
    benefitsTitle: "Waarom ondernemers in Den Haag voor mij kiezen",
    benefitsIntro:
      "Geen bureau met accountmanagers en wachttijden, maar één vast aanspreekpunt dat de stad kent en je vak serieus neemt.",
    benefits: [
      { icon: "map-pin", title: "Lokaal en bereikbaar", body: "Geboren en getogen Hagenees. We doen een kop koffie in de stad, of bellen even. Korte lijnen, snelle schakels." },
      { icon: "search", title: "Lokaal goed vindbaar", body: "Ik richt je site zo in dat je gevonden wordt op zoektermen als jouw vak plus Den Haag, met technische SEO en lokale structuur." },
      { icon: "check", title: "Vaste prijs vooraf", body: "Je weet vooraf precies waar je aan toe bent. Geen nacalculatie, geen verrassingen op de rekening." },
      { icon: "rocket", title: "Snel live", body: "De meeste websites staan binnen 2 tot 3 weken online. Strak gepland, zonder eindeloze trajecten." },
    ],
    deepTitle: "Voor ondernemers in heel Den Haag en omstreken",
    deepIntro:
      "Van een praktijk in het Statenkwartier tot een horecazaak in het Zeeheldenkwartier of een dienstverlener in Scheveningen — ik werk voor ondernemers door de hele regio Haaglanden.",
    deepItems: [
      { title: "Den Haag centrum & de wijken", body: "Statenkwartier, Bezuidenhout, Benoordenhout, Zeeheldenkwartier, Archipelbuurt en meer. Een site die past bij jouw buurt en publiek." },
      { title: "Scheveningen & kust", body: "Horeca, verhuur en toerisme die het hele jaar door vindbaar moeten zijn voor bezoekers van buiten." },
      { title: "Rijswijk, Voorburg & Leidschendam", body: "Net buiten de stad, net zo dichtbij. Persoonlijk contact blijft, ook op afstand via videocall en WhatsApp." },
    ],
    faqTitle: "Veelgestelde vragen over een website laten maken in Den Haag",
    faqs: [
      { q: "Wat kost een website laten maken in Den Haag?", a: "Een website laten maken in Den Haag kost bij Haagse Brandmerk vanaf €995 voor een opfrisbeurt en €2.295 voor een volledige website op maat. Voor doorlopende groei is er een maandpakket vanaf €395 per maand. Alle prijzen zijn exclusief btw en staan vooraf vast." },
      { q: "Hoe lang duurt het om een website te laten maken?", a: "Een opfrisbeurt is meestal binnen 2 weken klaar, een volledige website binnen 2 tot 3 weken. De doorlooptijd hangt vooral af van hoe snel je teksten en foto's aanlevert. Dat stem ik vooraf met je af." },
      { q: "Werk je alleen voor bedrijven in Den Haag?", a: "Nee. Ik werk voor ondernemers door heel Nederland, volledig op afstand via videocall en WhatsApp. Maar zit je in Den Haag of omstreken, dan kom ik graag langs voor een kop koffie." },
      { q: "Zorg je ook dat ik in Google gevonden word?", a: "Ja. Elke website lever ik op met een technische SEO-basis: snelle laadtijd, nette structuur, mobielvriendelijk en lokale vindbaarheid. Bij het Groei-pakket werk ik daarna maandelijks aan hogere posities." },
      { q: "Met wie werk ik samen?", a: "Rechtstreeks met mij, Ruud Kruidhof. Geen tussenlagen of accountmanagers. Van eerste schets tot livegang ben ik je vaste aanspreekpunt." },
    ],
    related: [PORTFOLIO, PRIJZEN, OVER],
  },

  /* ─────────────────────────── 2. ZZP ─────────────────────────── */
  {
    slug: "website-laten-maken-zzp",
    keyword: "website laten maken ZZP",
    metaTitle: "Website laten maken voor ZZP'ers (vanaf €995) | Haagse Brandmerk",
    metaDesc:
      "Als ZZP'er een professionele website laten maken? Vaste prijs vanaf €995, binnen 2 weken live, persoonlijk contact en gebouwd om klanten op te leveren. Eén aanspreekpunt: Ruud Kruidhof.",
    eyebrow: "Voor zelfstandigen",
    h1: "Website laten maken voor ZZP'ers",
    heroSub:
      "Een professionele site die net zo serieus is als jij — zonder bureauprijzen en zonder gedoe. Persoonlijk gemaakt, betaalbaar en gericht op klanten die contact opnemen.",
    directAnswer:
      "Een ZZP'er laat een professionele website maken vanaf €995. Bij Haagse Brandmerk werk je rechtstreeks met webdesigner Ruud Kruidhof, krijg je een vaste prijs vooraf en staat je site doorgaans binnen 2 weken live. De site is gebouwd om bezoekers om te zetten in aanvragen, met een heldere structuur en duidelijke contactknoppen.",
    heroBullets: ["Betaalbaar vanaf €995", "Binnen 2 weken live", "Geen abonnementsverplichting", "Eén vast aanspreekpunt"],
    serviceName: "Website laten maken voor ZZP",
    serviceDescription:
      "Betaalbare, professionele websites voor zelfstandigen en freelancers. Vaste prijs, snelle oplevering en gericht op het opleveren van klanten.",
    areaServed: ["Nederland", "Den Haag", "Zuid-Holland"],
    benefitsTitle: "Een website die voor je werkt, ook als je het druk hebt",
    benefitsIntro:
      "Als ZZP'er ben je je eigen visitekaartje. Je site moet vertrouwen wekken en werk opleveren, zonder dat je er zelf omkijken naar hebt.",
    benefits: [
      { icon: "heart", title: "Past bij jou", body: "Je site voelt als jouw zaak, niet als een template. Jouw verhaal, jouw toon, jouw uitstraling." },
      { icon: "check", title: "Betaalbaar en helder", body: "Vaste prijs vanaf €995. Geen verplicht abonnement, geen verrassingen. Je weet vooraf wat je krijgt." },
      { icon: "rocket", title: "Levert klanten op", body: "Heldere opbouw, sterke teksten en knoppen die op het juiste moment verschijnen. Van bezoeker naar aanvraag." },
      { icon: "shield", title: "Zonder technisch gedoe", body: "Ik regel de techniek, hosting-advies en onderhoud. Jij focust op je vak." },
    ],
    deepTitle: "Voor welke zelfstandigen ik bouw",
    deepIntro:
      "Of je nu met je handen werkt, advies geeft of mensen ontvangt — een sterke site verlaagt de drempel om jou te kiezen.",
    deepItems: [
      { title: "Coaches, therapeuten & praktijken", body: "Een rustige, vertrouwde site die laat voelen dat mensen bij jou in goede handen zijn." },
      { title: "Vakmensen & dienstverleners", body: "Schilders, hoveniers, klusbedrijven: laat je werk zien en maak een offerte aanvragen makkelijk." },
      { title: "Creatieven & adviseurs", body: "Portfolio, expertise en persoonlijkheid in één site die opdrachtgevers overtuigt." },
    ],
    faqTitle: "Veelgestelde vragen van ZZP'ers",
    faqs: [
      { q: "Wat kost een website voor een ZZP'er?", a: "Een professionele website voor een ZZP'er kost bij Haagse Brandmerk vanaf €995 (opfrisbeurt) tot €2.295 (volledig op maat), exclusief btw en met een vaste prijs vooraf. Er is geen verplicht abonnement; doorlopende ondersteuning kan optioneel vanaf €395 per maand." },
      { q: "Heb ik als ZZP'er een dure website nodig?", a: "Nee. Een goede ZZP-website hoeft niet duur te zijn, maar moet wel vertrouwen wekken en makkelijk tot contact leiden. Vanaf €995 heb je een professionele, snelle en vindbare site die past bij je vak." },
      { q: "Kan ik zelf teksten aanpassen?", a: "Aanpassingen doe ik voor je, altijd in overleg en zonder gedoe. Wil je het Groei-pakket, dan zit er maandelijks tijd voor updates inbegrepen. Zo blijft je site actueel zonder dat je zelf hoeft te knutselen." },
      { q: "Hoe snel kan mijn site live?", a: "Voor de meeste ZZP'ers staat de site binnen 2 weken online. Lever je teksten en foto's snel aan, dan kan het soms sneller. We plannen het vooraf samen in." },
      { q: "Word ik ook gevonden in Google?", a: "Ja. Elke site krijgt een technische SEO-basis zodat je vindbaar bent op je vak en regio. Voor structureel hogere posities is er het doorlopende Groei-pakket." },
    ],
    related: [PRIJZEN, PORTFOLIO, OVER],
  },

  /* ─────────────────────────── 3. MKB ─────────────────────────── */
  {
    slug: "website-laten-maken-mkb",
    keyword: "website laten maken MKB",
    metaTitle: "Website laten maken voor het MKB | Haagse Brandmerk",
    metaDesc:
      "Een professionele website voor je MKB-bedrijf laten maken? Op maat, goed vindbaar in Google en gebouwd om te groeien. Vaste prijzen, persoonlijk contact en doorlopende optimalisatie mogelijk.",
    eyebrow: "Voor het MKB",
    h1: "Website laten maken voor het MKB",
    heroSub:
      "Een professionele website die meegroeit met je bedrijf. Goed vindbaar, overtuigend en gebouwd om bezoekers om te zetten in klanten — met de optie van doorlopende groei.",
    directAnswer:
      "Een MKB-bedrijf laat een website op maat maken vanaf €2.295, met de optie voor een doorlopend groeipakket vanaf €395 per maand. Bij Haagse Brandmerk krijg je een vaste prijs, een persoonlijk aanspreekpunt en een site die is gebouwd om te scoren in Google én bezoekers om te zetten in aanvragen en omzet.",
    heroBullets: ["Op maat & schaalbaar", "Sterke SEO-basis", "Analytics & rapportage", "Doorlopende groei mogelijk"],
    serviceName: "Website laten maken voor MKB",
    serviceDescription:
      "Professionele websites op maat voor het midden- en kleinbedrijf. Sterke SEO, conversiegerichte opbouw en doorlopende optimalisatie via een groeipakket.",
    areaServed: ["Nederland", "Den Haag", "Zuid-Holland"],
    benefitsTitle: "Een website die bijdraagt aan je omzet",
    benefitsIntro:
      "Voor het MKB is een website geen visitekaartje maar een verkoopkanaal. Hij moet vindbaar zijn, vertrouwen wekken en meetbaar resultaat leveren.",
    benefits: [
      { icon: "search", title: "Gevonden worden", body: "Sterke technische SEO en een doordachte structuur zodat de juiste klanten je vinden in Google." },
      { icon: "bar-chart", title: "Meetbaar resultaat", body: "Analytics en conversietracking laten zien wat werkt. Geen onderbuik, maar cijfers." },
      { icon: "settings", title: "Schaalbaar gebouwd", body: "Meerdere diensten, locaties of een team? De site groeit mee, met koppelingen en uitbreidingen op maat." },
      { icon: "monitor", title: "Doorlopende optimalisatie", body: "Met het Groei-pakket test, verbeter en rapporteer ik maandelijks. Zo wordt je site steeds beter." },
    ],
    deepTitle: "Gebouwd om mee te groeien",
    deepIntro:
      "Een MKB-website is nooit af. Daarom bouw ik niet alleen een site, maar bied ik ook een partnerschap waarin we blijven verbeteren.",
    deepItems: [
      { title: "Meerdere diensten of vestigingen", body: "Een heldere structuur die al je diensten en locaties overzichtelijk presenteert en lokaal vindbaar maakt." },
      { title: "Conversie-optimalisatie", body: "We testen koppen, knoppen en pagina-opbouw, zodat meer bezoekers ook echt klant worden." },
      { title: "Maandelijkse rapportage", body: "Een persoonlijk dashboard met bezoekers, conversies en aanbevelingen. Jij kijkt mee wanneer je wilt." },
    ],
    faqTitle: "Veelgestelde vragen vanuit het MKB",
    faqs: [
      { q: "Wat kost een MKB-website?", a: "Een MKB-website op maat kost bij Haagse Brandmerk vanaf €2.295, exclusief btw. Voor bedrijven die structureel willen groeien is er een doorlopend Groei-pakket vanaf €395 per maand, inclusief optimalisatie, analytics en maandelijkse rapportage." },
      { q: "Kunnen jullie koppelen met onze systemen?", a: "Ja. Voor het MKB bouw ik koppelingen op maat: een boekings- of offerteflow, een eigen CMS om zelf updates te doen, een webshop of integraties met je bestaande systemen. We bespreken vooraf wat je nodig hebt." },
      { q: "Krijgen we inzicht in de resultaten?", a: "Ja. Met het Groei-pakket krijg je een persoonlijk dashboard met bezoekers, conversies en SEO-data, plus een maandelijks rapport met inzichten en concrete verbeteracties." },
      { q: "Hoe zit het met onderhoud en beveiliging?", a: "Technisch onderhoud, snelheidsoptimalisatie en beveiliging horen bij het Groei-pakket. Zo blijft je site snel, veilig en up-to-date zonder dat je er zelf naar omkijkt." },
      { q: "Kunnen jullie ook een webshop bouwen?", a: "Ja. Vanaf een volledige website kan ik een webshop toevoegen met productpagina's, winkelwagen en iDeal. De toeslag is vanaf €995. Voor grotere shops maken we maatwerkafspraken." },
    ],
    related: [PRIJZEN, PORTFOLIO, OVER],
  },

  /* ─────────────────────────── 4. KOSTEN (GEO magneet) ─────────────────────────── */
  {
    slug: "website-laten-maken-kosten",
    keyword: "wat kost een website laten maken",
    metaTitle: "Wat kost een website laten maken in 2026? (Prijzen vanaf €995)",
    metaDesc:
      "Wat kost een website laten maken? Een professionele website kost in Nederland gemiddeld €995 tot €2.500. Bekijk de exacte prijzen, wat de prijs bepaalt en waar je op moet letten.",
    eyebrow: "Prijzen & kosten",
    h1: "Wat kost een website laten maken?",
    heroSub:
      "Een eerlijk en compleet antwoord op de meestgestelde vraag — inclusief vaste prijzen, wat de kosten bepaalt en waar je op moet letten voordat je tekent.",
    directAnswer:
      "Een professionele website laten maken kost in Nederland doorgaans tussen €995 en €2.500 voor een MKB- of ZZP-site. Bij Haagse Brandmerk begint een opfrisbeurt bij €995, een volledige website op maat bij €2.295 en een doorlopend groeipakket bij €395 per maand. Alle prijzen zijn exclusief btw en staan vooraf vast, zonder nacalculatie.",
    heroBullets: ["Vaste prijzen, geen nacalculatie", "Opfrisbeurt vanaf €995", "Volledig op maat vanaf €2.295", "Webshop vanaf €995 extra"],
    serviceName: "Website laten maken — prijzen",
    serviceDescription:
      "Transparante, vaste prijzen voor het laten maken van een professionele website in Nederland, vanaf €995.",
    areaServed: ["Nederland", "Den Haag", "Zuid-Holland"],
    benefitsTitle: "Wat bepaalt de prijs van een website?",
    benefitsIntro:
      "De kosten van een website hangen vooral af van de omvang, het maatwerk en de mate van vindbaarheid. Dit zijn de vier factoren die het verschil maken.",
    benefits: [
      { icon: "file-text", title: "Aantal pagina's & omvang", body: "Een one-pager is goedkoper dan een uitgebreide site met meerdere diensten of locaties." },
      { icon: "sparkles", title: "Maatwerk & design", body: "Een uniek ontwerp met animaties kost meer dan een standaard template, maar levert ook meer op." },
      { icon: "search", title: "SEO & vindbaarheid", body: "Een sterke SEO-basis en lokale vindbaarheid bepalen hoeveel klanten je site uiteindelijk oplevert." },
      { icon: "monitor", title: "Onderhoud & groei", body: "Eenmalig opleveren is goedkoper; doorlopende optimalisatie kost maandelijks maar levert blijvend resultaat." },
    ],
    deepTitle: "De prijzen op een rij",
    deepIntro:
      "Bij Haagse Brandmerk werk ik met vaste pakketten, zodat je vooraf precies weet waar je aan toe bent. Geen verrassingen achteraf.",
    deepItems: [
      { title: "Website Opfrisbeurt — €995", body: "Een visueel redesign van je bestaande site, sneller en met een SEO-check. Klaar binnen 2 weken." },
      { title: "Volledige Redesign — €2.295", body: "Een nieuwe site op maat met sterke SEO, animaties en analytics. Tot 5 pagina's, klaar binnen 3 weken." },
      { title: "Redesign + Groei — €395/mnd", body: "Een doorlopend partnerschap met A/B-testen, maandelijkse rapportage en onbeperkt pagina's." },
    ],
    costTable: [
      { name: "Website Opfrisbeurt", price: "€995", note: "eenmalig, excl. btw", best: "Bestaande site die een upgrade nodig heeft" },
      { name: "Volledige Redesign", price: "€2.295", note: "eenmalig, excl. btw", best: "Een nieuwe, professionele site op maat" },
      { name: "Redesign + Groei", price: "€395/mnd", note: "min. 12 maanden, excl. btw", best: "Structureel groeien met je website" },
    ],
    faqTitle: "Veelgestelde vragen over de kosten van een website",
    faqs: [
      { q: "Wat kost een website laten maken gemiddeld in Nederland?", a: "Een professionele website laten maken kost in Nederland gemiddeld tussen €995 en €2.500 voor ZZP'ers en MKB. Eenvoudige sites zijn goedkoper, uitgebreide sites met maatwerk en webshop kosten meer. Bij Haagse Brandmerk begint het bij €995 met een vaste prijs vooraf." },
      { q: "Wat kost een website per maand?", a: "Een website kan eenmalig of per maand. Eenmalig betaal je vanaf €995. Wil je doorlopende optimalisatie, hosting, onderhoud en rapportage, dan kan dat met een maandpakket vanaf €395 per maand (minimaal 12 maanden)." },
      { q: "Zijn er verborgen kosten?", a: "Nee. Bij Haagse Brandmerk staat de prijs vooraf vast, zonder nacalculatie. De enige variabele kosten zijn externe zaken zoals een domeinnaam (circa €10–15 per jaar) en eventueel hosting, die ik vooraf transparant met je bespreek." },
      { q: "Wat kost een webshop laten maken?", a: "Een webshop kost vanaf €995 bovenop een volledige website. Daarvoor krijg je productpagina's, een winkelwagen, checkout en iDeal-integratie. Voor grotere of complexere shops maken we maatwerkafspraken." },
      { q: "Waarom verschillen de prijzen van webdesigners zo sterk?", a: "Prijsverschillen komen vooral door maatwerk versus templates, de mate van SEO, en of er doorlopend onderhoud bij zit. Een lage prijs betekent vaak een standaard template zonder vindbaarheid; een hoge prijs is vaak een bureau met overhead. Een freelancer met vaste prijzen zit daar bewust tussenin." },
    ],
    related: [PRIJZEN, PORTFOLIO, OVER],
  },

  /* ─────────────────────────── 5. VERNIEUWEN / REDESIGN ─────────────────────────── */
  {
    slug: "website-vernieuwen",
    keyword: "website vernieuwen",
    metaTitle: "Website laten vernieuwen of redesignen (vanaf €995) | Haagse Brandmerk",
    metaDesc:
      "Je website laten vernieuwen? Ik geef je site een moderne uitstraling, snellere laadtijd en betere vindbaarheid. Vaste prijs vanaf €995, binnen 2 weken een frisse, werkende site.",
    eyebrow: "Redesign & vernieuwen",
    h1: "Je website laten vernieuwen",
    heroSub:
      "Je site is gedateerd, traag of levert te weinig op. Ik geef 'm een frisse uitstraling, snellere laadtijd en sterkere vindbaarheid — met behoud van wat al goed werkt.",
    directAnswer:
      "Een website laten vernieuwen kost bij Haagse Brandmerk vanaf €995 voor een visuele opfrisbeurt en €2.295 voor een volledige redesign op maat. Een opfrisbeurt is meestal binnen 2 weken klaar. Je krijgt een modernere uitstraling, een snellere en mobielvriendelijke site, en een verbeterde SEO-basis zodat je beter gevonden wordt.",
    heroBullets: ["Vanaf €995", "Binnen 2 weken fris", "Sneller & mobielvriendelijk", "Betere vindbaarheid"],
    serviceName: "Website laten vernieuwen",
    serviceDescription:
      "Bestaande websites vernieuwen en redesignen: moderne uitstraling, snellere laadtijd, mobielvriendelijk en een sterkere SEO-basis.",
    areaServed: ["Nederland", "Den Haag", "Zuid-Holland"],
    benefitsTitle: "Wanneer is het tijd om je site te vernieuwen?",
    benefitsIntro:
      "Een verouderde website kost je stilletjes klanten. Dit zijn de signalen dat een redesign zichzelf terugverdient.",
    benefits: [
      { icon: "phone", title: "Niet mobielvriendelijk", body: "Meer dan de helft van je bezoekers komt via mobiel. Werkt je site daar niet strak, dan haak je mensen af." },
      { icon: "rocket", title: "Traag laden", body: "Een trage site kost bezoekers én Google-posities. Ik maak 'm meetbaar sneller." },
      { icon: "sparkles", title: "Gedateerde uitstraling", body: "Een oud design wekt minder vertrouwen. Een frisse look laat zien dat je bij de tijd bent." },
      { icon: "search", title: "Slecht vindbaar", body: "Word je niet gevonden in Google? Bij een redesign leg ik meteen een sterke SEO-basis." },
    ],
    deepTitle: "Vernieuwen met behoud van wat werkt",
    deepIntro:
      "Een redesign is geen reden om alles overboord te gooien. Ik kijk eerst wat het al goed doet, en bouw daarop voort.",
    deepItems: [
      { title: "Behoud je posities", body: "We nemen bestaande content en SEO-waarde mee, zodat je niet terugzakt in Google na de vernieuwing." },
      { title: "Frisse, werkende uitstraling", body: "Een modern ontwerp dat past bij je merk én bezoekers naar contact leidt." },
      { title: "Sneller en veiliger", body: "Gebouwd met moderne technieken: snelle laadtijd, mobielvriendelijk en een veilige HTTPS-verbinding." },
    ],
    faqTitle: "Veelgestelde vragen over je website vernieuwen",
    faqs: [
      { q: "Wat kost het om mijn website te laten vernieuwen?", a: "Je website laten vernieuwen kost bij Haagse Brandmerk vanaf €995 voor een visuele opfrisbeurt en €2.295 voor een volledige redesign op maat, exclusief btw en met een vaste prijs vooraf." },
      { q: "Verlies ik mijn Google-posities bij een redesign?", a: "Nee, niet als het goed gebeurt. Ik neem bestaande content en SEO-waarde mee en zorg met redirects dat je posities behouden blijven. Vaak verbetert de vindbaarheid juist door de snellere, betere site." },
      { q: "Hoe lang duurt het vernieuwen van een website?", a: "Een opfrisbeurt is meestal binnen 2 weken klaar, een volledige redesign binnen 3 weken. De doorlooptijd hangt af van hoe snel je eventuele nieuwe teksten en foto's aanlevert." },
      { q: "Kan ik mijn huidige teksten en foto's hergebruiken?", a: "Zeker. Wat goed werkt nemen we mee. Waar nodig denk ik mee over scherpere teksten of betere beelden, maar je hoeft niet bij nul te beginnen." },
      { q: "Mijn site is nog niet zo oud, is vernieuwen dan zinvol?", a: "Dat hangt af van de prestaties, niet van de leeftijd. Laadt je site traag, werkt hij niet goed op mobiel of levert hij weinig op, dan is een opfrisbeurt vaak al genoeg om het verschil te maken." },
    ],
    related: [PRIJZEN, PORTFOLIO, OVER],
  },
];

export const landingSlugs = landings.map((l) => l.slug);
