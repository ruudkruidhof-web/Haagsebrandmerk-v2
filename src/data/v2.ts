// ════════════════════════════════════════════════════════════════════
//  V2 CONTENT — drie-sporen-model (preview onder /v2, niet geïndexeerd)
//  Volledig additief: dit raakt de live content (src/data/content.ts) niet.
//  Veel copy hergebruikt t.* zodat we 1 bron houden; alleen de nieuwe
//  structuur (sporen, kruispunt, instapproduct, ROI) staat hier.
//
//  LET OP — prijzen gemarkeerd met (VOORSTEL) zijn ter bevestiging door Ruud.
// ════════════════════════════════════════════════════════════════════

export const V2 = "/v2";

export interface Spoor {
  id: "snel" | "maatwerk" | "groei";
  href: string;
  eyebrow: string;
  title: string;
  tagline: string;
  who: string;
  /** retro-kleurnaam zonder var() — bijv. "mustard" */
  accent: "mustard" | "terracotta" | "olive";
  icon: string;
  bullets: string[];
  cta: string;
}

export const sporen: Spoor[] = [
  {
    id: "snel",
    href: "/v2/snel",
    eyebrow: "Spoor 1",
    title: "Snel & helder",
    tagline: "Snel een nette site, zonder gedoe",
    who: "Je wilt snel professioneel online, tegen een vaste prijs die vooraf vaststaat.",
    accent: "mustard",
    icon: "rocket",
    bullets: ["Binnen 2 weken live", "Vaste prijs vooraf", "Eén aanspreekpunt"],
    cta: "Snel online",
  },
  {
    id: "maatwerk",
    href: "/v2/maatwerk",
    eyebrow: "Spoor 2",
    title: "Maatwerk & merk",
    tagline: "Een site die je positionering waarmaakt",
    who: "Je vraagstuk is complexer. Je wilt strategie, merkdenken en een traject op maat.",
    accent: "terracotta",
    icon: "sparkles",
    bullets: ["Strategie & positionering", "Volledig op maat", "Op aanvraag"],
    cta: "Ontdek maatwerk",
  },
  {
    id: "groei",
    href: "/v2/groei",
    eyebrow: "Spoor 3",
    title: "Groei & resultaat",
    who: "Je ziet je site als investering. Je wilt meer klanten, en cijfers die dat bewijzen.",
    tagline: "Een site die klanten blijft opleveren",
    accent: "olive",
    icon: "bar-chart",
    bullets: ["Maandelijks optimaliseren", "Inzicht in je cijfers", "Partnerschap, geen project"],
    cta: "Werk aan groei",
  },
];

// ── Homepage (kruispunt) ────────────────────────────────────────────
export const v2home = {
  hero: {
    badge: "Beschikbaar voor nieuwe projecten",
    title1: "Een website om",
    titleHighlight: "trots",
    title2: "op te zijn.",
    subtitle:
      "Ik bouw websites voor ondernemers in Den Haag en daarbuiten. Persoonlijk gemaakt, goed vindbaar in Google, en gebouwd om bezoekers klant te laten worden.",
    // Neutrale trust-balk: geen universele snelheidsbelofte meer (die leeft op /snel)
    usps: ["Persoonlijk gemaakt", "Vaste prijs vooraf", "Eén vast aanspreekpunt"],
    ctaPrimary: "Plan een kennismaking",
    ctaSecondary: "Bekijk mijn werk",
  },
  crossroads: {
    eyebrow: "Waar sta jij?",
    title: "Wat past bij jou?",
    subtitle:
      "Iedere ondernemer zoekt iets anders. Kies waar jij staat, dan laat ik je precies het juiste zien. Twijfel je? Begin gewoon met een kennismaking.",
    helper: "Niet zeker welk spoor bij je past?",
    helperCta: "Plan een vrijblijvende kennismaking",
  },
  // Stats: bewust de échte bedrijfscijfers (geen verzonnen klantresultaten).
  // TODO Ruud: vervang/v vul aan met één echt klantresultaat ("gem. +X% aanvragen").
  stats: [
    { value: "4", suffix: " jaar", label: "Bouw ik al websites" },
    { value: "25", suffix: "+", label: "Tevreden ondernemers" },
    { value: "50", suffix: "%", label: "Nieuwe klanten via doorverwijzing" },
  ],
};

// ── /snel ───────────────────────────────────────────────────────────
export const v2snel = {
  hero: {
    eyebrow: "Snel & helder online",
    title: "Snel een nette website. Zonder gedoe.",
    subtitle:
      "Je wilt geen maandenlang traject, maar gewoon snel professioneel online tegen een prijs die vooraf vaststaat. Dat is precies wat dit spoor doet.",
    usps: ["Binnen 2 weken live", "Vaste prijs vanaf €795", "Geen abonnement nodig"],
  },
  forWho: {
    title: "Voor wie dit spoor is",
    items: [
      "Je begint net en wilt snel een professionele eerste site",
      "Je hebt een kleine zaak en wilt zonder gedoe online",
      "Je weet wat je wilt en houdt van duidelijkheid en tempo",
    ],
  },
  packagesIntro: {
    title: "Kies je startpunt",
    subtitle: "Heb je al een site? Dan fris ik 'm op. Begin je bij nul? Dan zetten we iets nieuws neer.",
  },
  // VOORSTEL: nieuw instapproduct dicht het gat (starter zonder site landde op €2.295)
  packages: [
    {
      name: "Starterssite",
      tag: "Nieuw · one-pager",
      price: "vanaf €795",
      note: "excl. btw, eenmalig · (VOORSTEL)",
      description: "Nog geen site? Eén sterke pagina die alles vertelt: wie je bent, wat je doet en hoe mensen je bereiken. Snel en betaalbaar online.",
      features: ["Eén professionele pagina", "Responsive & snel", "Basis SEO", "Contact- en WhatsApp-knop", "Binnen 2 weken live"],
      best: "Voor wie nog géén site heeft",
    },
    {
      name: "Website Opfrisbeurt",
      tag: "Bestaande site",
      price: "€995",
      note: "excl. btw, eenmalig",
      description: "Je hebt al een site, maar hij mag strakker, sneller en moderner. Ik pak het ontwerp aan en check de SEO-basis.",
      features: ["Visueel redesign bestaande pagina's", "Responsive & sneller", "Basis SEO-check", "2 feedbackrondes", "Binnen 2 weken klaar"],
      best: "Voor wie al een site heeft",
    },
    {
      name: "Volledige Redesign",
      tag: "Compleet",
      price: "€2.295",
      note: "excl. btw, eenmalig",
      description: "Een nieuwe site op maat, vanaf nul opgebouwd. Sterke SEO, mooie animaties en analytics die inzicht geven.",
      features: ["Tot 5 pagina's herbouwd", "Strategisch plan", "SEO-optimalisatie", "Analytics & tracking", "Binnen 3 weken live"],
      best: "Voor een complete, nieuwe site",
    },
  ],
};

// ── /maatwerk ───────────────────────────────────────────────────────
export const v2maatwerk = {
  hero: {
    eyebrow: "Maatwerk & merk",
    title: "Een website die je positionering waarmaakt",
    subtitle:
      "Soms is een pakket te krap. Je merk verdient een eigen verhaal, een doordachte structuur en een ontwerp dat nergens anders bestaat. Dat begint niet bij een prijs, maar bij een goed gesprek.",
  },
  what: {
    title: "Wat maatwerk hier betekent",
    intro: "Geen template waar jouw logo in wordt geplakt, maar een traject dat begint bij de vraag: wat maakt jouw bedrijf uniek, en wie wil je daarmee bereiken?",
    items: [
      { icon: "sparkles", title: "Positionering eerst", body: "We bepalen samen je verhaal en je onderscheid, nog voordat er één scherm wordt ontworpen." },
      { icon: "settings", title: "Volledig op maat", body: "Meerdere diensten, locaties, een eigen CMS, koppelingen of een meertalige site. We bouwen wat jouw zaak nodig heeft." },
      { icon: "heart", title: "Een merk dat klopt", body: "Een ontwerp dat voelt als jouw zaak en vertrouwen wekt nog voordat iemand een woord heeft gelezen." },
    ],
  },
  process: {
    title: "Hoe een maatwerktraject verloopt",
    subtitle: "Geen vaste doorlooptijd, maar een tempo dat past bij de complexiteit van je vraagstuk.",
    steps: [
      { step: "01", title: "Strategie & verdieping", body: "We duiken in je markt, je merk en je doelgroep. Wat is je positie, en waar wil je naartoe?" },
      { step: "02", title: "Concept & ontwerp", body: "Ik vertaal de strategie naar een uniek ontwerp en laat je onderweg meekijken en bijsturen." },
      { step: "03", title: "Bouw & verfijning", body: "De site wordt op maat gebouwd, met oog voor elk detail, snelheid en techniek." },
      { step: "04", title: "Livegang & doorgroeien", body: "We gaan live, en als je wilt blijven we samen verbeteren via het Groei-spoor." },
    ],
  },
  offer: {
    eyebrow: "Het aanbod",
    title: "Maatwerk — op aanvraag",
    body: "Omdat geen twee maatwerktrajecten hetzelfde zijn, werk ik hier niet met een vast tarief. Na een goed gesprek weet ik wat je nodig hebt en krijg je een heldere offerte op maat. Geen verrassingen, wel ruimte voor wat jouw merk echt verdient.",
    points: ["Meerdere diensten of locaties", "Eigen CMS — zelf updates doen", "Boekings-, offerte- of checkoutflow", "Meertalig of koppelingen op maat"],
    cta: "Plan een strategiegesprek",
  },
};

// ── /groei ──────────────────────────────────────────────────────────
export const v2groei = {
  hero: {
    eyebrow: "Groei & resultaat",
    title: "Een website die klanten blijft opleveren",
    subtitle:
      "Een site is geen eenmalig project, maar een investering die zich moet terugverdienen. In dit spoor bouwen we niet alleen je site, we laten 'm elke maand beter presteren.",
  },
  how: {
    title: "Van website naar verkoopkanaal",
    items: [
      { icon: "bar-chart", title: "Inzicht in je cijfers", body: "Een eigen dashboard met bezoekers, conversies en SEO. Je ziet zwart-op-wit wat je site oplevert." },
      { icon: "flask", title: "Maandelijks testen", body: "Elke maand verbeter ik één ding: een kop, een knop, een pagina. Kleine veranderingen, groeiende resultaten." },
      { icon: "file-text", title: "Heldere rapportage", body: "Geen tabellenbrij, maar een persoonlijk maandrapport: wat ging goed, wat kan beter, wat pak ik aan." },
    ],
  },
  // ROI-blok: expliciet als REKENVOORBEELD gelabeld (geen belofte)
  roi: {
    eyebrow: "Verdient het zichzelf terug?",
    title: "Even rekenen",
    body: "Het Groei-pakket kost €395 per maand. Stel dat een nieuwe klant je gemiddeld €750 oplevert. Dan is één extra klant per maand al genoeg om de investering ruim terug te verdienen — alles daarboven is winst.",
    note: "Rekenvoorbeeld ter illustratie. Jouw klantwaarde vullen we samen in tijdens een groeigesprek.",
    figures: [
      { value: "€395", label: "per maand" },
      { value: "1 klant", label: "om terug te verdienen*" },
      { value: "12 mnd", label: "met evaluatie na 3 mnd" },
    ],
  },
  commitment: {
    title: "Eerlijk over de looptijd",
    body: "Echte groei vraagt tijd, daarom werken we met een looptijd van 12 maanden. Maar je zit niet blind vast: na 3 maanden evalueren we samen of het werkt. Zo bewijzen we het resultaat in plaats van het te beloven.",
  },
};

// ── Prijzen (sporen-structuur) ──────────────────────────────────────
export const v2prijzen = {
  hero: {
    eyebrow: "Prijzen",
    title: "Heldere prijzen, altijd vooraf",
    subtitle:
      "Geen verrassingen op de rekening. Kies het spoor dat bij je past: een vaste prijs voor een snelle site, maatwerk op aanvraag, of een doorlopend groeipartnerschap.",
  },
  wizard: {
    title: "Welk spoor past bij mij?",
    rows: [
      { q: "Ik wil snel en betaalbaar online, zonder gedoe", a: "Spoor 1 — Snel & helder", href: "/v2/snel" },
      { q: "Mijn vraag is complexer; ik wil strategie en maatwerk", a: "Spoor 2 — Maatwerk & merk", href: "/v2/maatwerk" },
      { q: "Ik wil dat mijn site blijft groeien en klanten oplevert", a: "Spoor 3 — Groei & resultaat", href: "/v2/groei" },
    ],
  },
};
