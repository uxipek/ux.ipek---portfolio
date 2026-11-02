// Portfolio: 4 featured projects. Facts (role, tools, scope) are taken from the
// Behance case studies and the Akademi Ozalit case site. Leave a field empty ("")
// rather than guessing: empty fields are hidden on the project page.

type Localized = { en: string; tr: string };

export type Project = {
  id: string;
  title: string;
  category: Localized;
  description: Localized;
  coverImage: string;
  services: string[];
  timeline: string;
  role: string;
  tools: string[];
  behanceUrl?: string;
  /** Short context paragraph(s) shown on the generic project page */
  overview?: Localized[];
  /** Problems the project set out to solve */
  problems?: Localized[];
  /** Process stages in order */
  process?: { title: Localized; items: Localized }[];
  gallery?: { src: string; caption: Localized }[];
};

export const projects: Project[] = [
  {
    id: "akademi-ozalit",
    title: "Akademi Ozalit",
    category: {
      en: "UX Audit & Website Redesign",
      tr: "UX Analizi ve Web Sitesi Yeniden Tasarımı"
    },
    description: {
      en: "A UX audit-based website redesign for Akademi Ozalit, focused on usability, content hierarchy, accessibility, trust and the quote request journey.",
      tr: "Akademi Ozalit için UX analizi temelli web sitesi yeniden tasarımı. Kullanılabilirlik, içerik hiyerarşisi, erişilebilirlik, güven ve teklif alma deneyimine odaklanan bir vaka çalışması."
    },
    coverImage: "/projects/akademi-ozalit-cover.webp",
    services: ["UX Audit", "UX Strategy", "UI Design"],
    timeline: "2 Weeks",
    role: "UX/UI Designer",
    tools: ["Figma", "Stitch", "Codex"]
  },
  {
    id: "eventgo",
    title: "EventGO",
    category: {
      en: "Gamified Sport Event Planner",
      tr: "Oyunlaştırılmış Spor Etkinliği Planlayıcısı"
    },
    description: {
      en: "A gamified experience for planning and joining social sports events with a highly engaging interface.",
      tr: "Yüksek etkileşimli bir arayüzle spor etkinliklerini planlamayı ve katılımı oyunlaştıran bir deneyim."
    },
    coverImage: "/projects/eventgo-cover.webp",
    services: ["UX Research", "UX Strategy", "Information Architecture", "Wireframing", "UI Design", "Prototype"],
    timeline: "8 Weeks",
    role: "Lead Product Designer",
    tools: ["Figma", "Google Meet", "Trello"],
    behanceUrl: "https://www.behance.net/gallery/245540023/EventGO-Social-Sports-Event-Planner"
  },
  {
    id: "wedjuno",
    title: "WedJuno",
    category: {
      en: "Wedding Planning App",
      tr: "Düğün Planlama Uygulaması"
    },
    description: {
      en: "A smart planning app that simplifies wedding preparation and lightens the financial, organisational and emotional load on couples.",
      tr: "Düğün hazırlık sürecini sadeleştiren ve çiftlerin finansal, organizasyonel ve duygusal yükünü hafifleten akıllı bir planlama uygulaması."
    },
    coverImage: "/projects/wedjuno-cover.webp",
    services: ["User Interviews", "Competitor Analysis", "Affinity Mapping", "Persona", "Empathy Map", "Storyboard", "User Flow", "Information Architecture"],
    timeline: "",
    role: "UX Team Member",
    tools: ["Figma", "Google Meet", "Trello"],
    behanceUrl: "https://www.behance.net/gallery/242255949/WEDJUNO-UX-CASE-STUDY",
    overview: [
      {
        en: "WedJuno is a UX case study carried out by a 12-person team. The research looked at why wedding preparation feels overwhelming and how a single planning app could make it calmer and more predictable.",
        tr: "WedJuno, 12 kişilik bir ekiple yürütülen bir UX vaka çalışması. Araştırma, düğün hazırlığının neden bu kadar yorucu olduğunu ve tek bir planlama uygulamasının bu süreci nasıl daha sakin ve öngörülebilir kılabileceğini inceledi."
      }
    ],
    problems: [
      { en: "Guest list chaos", tr: "Davetli yönetimi karmaşası" },
      { en: "Going over budget", tr: "Bütçe aşımı" },
      { en: "A scattered planning process", tr: "Planlama sürecinin karmaşıklığı" },
      { en: "Pre-wedding stress", tr: "Hazırlık stresiyle başa çıkamamak" },
      { en: "No guidance along the way", tr: "Rehber eksikliği" }
    ],
    process: [
      { title: { en: "Discover", tr: "Keşfet" }, items: { en: "Research, competitor analysis, user interviews, surveys", tr: "Araştırma, rakip analizi, kullanıcı görüşmeleri, anketler" } },
      { title: { en: "Define", tr: "Tanımla" }, items: { en: "Problem statement, persona, empathy map, storyboard, user flow", tr: "Problem tanımı, persona, empati haritası, storyboard, kullanıcı akışı" } },
      { title: { en: "Design", tr: "Tasarla" }, items: { en: "How Might We, Hook Model canvas, information architecture", tr: "How Might We, Hook Model kanvası, bilgi mimarisi" } },
      { title: { en: "Prototype & Test", tr: "Prototiple ve Test Et" }, items: { en: "Prototype and validation", tr: "Prototip ve doğrulama" } }
    ]
  },
  {
    id: "wafflewanted",
    title: "WaffleWanted",
    category: {
      en: "Waffle Ordering App",
      tr: "Waffle Sipariş Uygulaması"
    },
    description: {
      en: "A mobile app that lets busy people customise and order Turkish waffles quickly and at an affordable price.",
      tr: "Yoğun programı olan kullanıcıların Türk waffle'ını hızlıca özelleştirip uygun fiyata sipariş verebilmesi için tasarlanmış bir mobil uygulama."
    },
    coverImage: "/projects/wafflewanted-cover.webp",
    services: ["User Persona", "User Flow", "Sitemap", "Wireframes", "UI Style Guide", "Visual Design"],
    timeline: "",
    role: "UI/UX Designer",
    tools: ["Adobe Illustrator"],
    behanceUrl: "https://www.behance.net/gallery/107368261/Wafflewanted-UIUX-Case-Study",
    overview: [
      {
        en: "A personal project for the CalArts UI/UX Design specialisation, designed for the Wafflewanted shop in İzmir. Users can pick from the menu or build their own waffle, and the app keeps ordering as short as possible.",
        tr: "CalArts UI/UX Design uzmanlık programı kapsamında, İzmir'deki Wafflewanted için hazırladığım kişisel proje. Kullanıcılar menüden seçim yapabiliyor ya da kendi waffle'ını oluşturabiliyor; uygulama sipariş adımlarını mümkün olduğunca kısa tutuyor."
      }
    ],
    process: [
      { title: { en: "Strategy", tr: "Strateji" }, items: { en: "Target audience, personas, user and client needs", tr: "Hedef kitle, personalar, kullanıcı ve işletme ihtiyaçları" } },
      { title: { en: "Scope", tr: "Kapsam" }, items: { en: "Content and functionality requirements", tr: "İçerik ve işlev gereksinimleri" } },
      { title: { en: "Sitemap", tr: "Site Haritası" }, items: { en: "Screen structure and navigation", tr: "Ekran yapısı ve gezinme" } },
      { title: { en: "Wireframes", tr: "Wireframe" }, items: { en: "Mobile and desktop layouts", tr: "Mobil ve masaüstü yerleşimleri" } },
      { title: { en: "Visual Design", tr: "Görsel Tasarım" }, items: { en: "Style guide, onboarding, ordering and customisation screens", tr: "Stil rehberi, onboarding, sipariş ve özelleştirme ekranları" } }
    ],
    gallery: [
      { src: "/projects/wafflewanted-strategy.webp", caption: { en: "Target audience and personas", tr: "Hedef kitle ve personalar" } },
      { src: "/projects/wafflewanted-style-guide.webp", caption: { en: "UI style guide", tr: "Arayüz stil rehberi" } },
      { src: "/projects/wafflewanted-onboarding.webp", caption: { en: "Onboarding screens", tr: "Onboarding ekranları" } },
      { src: "/projects/wafflewanted-screens.webp", caption: { en: "Ordering and waffle customisation flow", tr: "Sipariş ve waffle özelleştirme akışı" } }
    ]
  }
];
