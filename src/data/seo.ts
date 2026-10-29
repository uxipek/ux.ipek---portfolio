export const SITE_NAME = "UXIPEK";
export const SITE_URL = "https://www.uxipek.com";
export const DEFAULT_OG_IMAGE = "/og-image.png";
export const SOCIAL_LINKS = [
  "https://www.behance.net/ipekbolakca",
  "https://www.linkedin.com/in/ipekbolakca",
  "https://medium.com/@ipekbolakca",
  "https://www.instagram.com/ux.ipek/",
];

type LocalizedSeo = { en: { title: string; description: string }; tr: { title: string; description: string } };

// Keyed by the path with the /:lang segment stripped, e.g. "/" for home, "/services" for services.
export const STATIC_SEO: Record<string, LocalizedSeo> = {
  "/": {
    en: {
      title: "UXipek | AI-Native Product Design and UX Audits",
      description:
        "UXipek provides UX audits, AI-native product design, and conversion-focused UX/UI solutions for SaaS products, AI platforms, and websites.",
    },
    tr: {
      title: "UXipek | AI-Native Ürün Tasarımı ve UX Röntgeni",
      description:
        "UXipek; SaaS, yapay zekâ destekli ürünler ve web siteleri için UX Röntgeni, ürün tasarımı ve dönüşüm odaklı UX/UI çözümleri sunar.",
    },
  },
  "/29-ekim": {
    en: {
      title: "29 October — Republic Day, 103rd Year | UXipek",
      description:
        "Explore the story of the Republic in its 103rd year, choose the value you carry forward and create your own 29 October keepsake card. (Content in Turkish.)",
    },
    tr: {
      title: "29 Ekim — Dünden ilham, yarına iz | UXipek",
      description:
        "Cumhuriyet’in 103. yılında hikâyesini keşfet, geleceğe taşıyacağın değeri seç ve sana özel 29 Ekim hatıra kartını oluştur.",
    },
  },
  "/services": {
    en: {
      title: "Product Design Services | UXipek",
      description:
        "Explore UX audits, AI-native product design, and UX/UI redesign services created to make digital products clearer, more usable, and measurable.",
    },
    tr: {
      title: "Hizmetler | UXipek",
      description:
        "UX Röntgeni, AI-native ürün tasarımı ve UX/UI redesign hizmetleriyle dijital ürünlerinizi daha açık, kullanılabilir ve ölçülebilir hâle getirin.",
    },
  },
  "/ux-audit": {
    en: {
      title: "UX Audit and Free Mini UX Evaluation | UXipek",
      description:
        "Identify where visitors experience friction. Get a free Mini UX Evaluation with priority usability issues and actionable improvement opportunities.",
    },
    tr: {
      title: "UX Röntgeni ve Mini UX Değerlendirmesi | UXipek",
      description:
        "Web sitenizde kullanıcıların zorlandığı noktaları görün. UXipek'in ücretsiz Mini UX Değerlendirmesiyle öncelikli sorunları ve iyileştirme alanlarını keşfedin.",
    },
  },
  "/process": {
    en: {
      title: "Product Design Process | UXipek",
      description:
        "Explore UXipek's product design process, from research and strategy to user flows, validation, interface design, and AI-assisted workflows.",
    },
    tr: {
      title: "Ürün Tasarım Süreci | UXipek",
      description:
        "Araştırmadan stratejiye, kullanıcı akışlarından test ve tasarıma uzanan UXipek ürün tasarım sürecini ve AI destekli çalışma yaklaşımını inceleyin.",
    },
  },
  "/contact": {
    en: {
      title: "Contact and Project Enquiries | UXipek",
      description:
        "Contact UXipek to discuss UX audits, AI-native product design, or UX/UI redesign projects, or schedule a free introductory call.",
    },
    tr: {
      title: "İletişim ve Proje Görüşmesi | UXipek",
      description:
        "UX Röntgeni, AI-native ürün tasarımı veya UX/UI redesign projenizi konuşmak için UXipek ile iletişime geçin ya da ücretsiz görüşme planlayın.",
    },
  },
  "/about": {
    en: {
      title: "About İpek Bolakça | AI-Native Product Designer",
      description:
        "Learn about İpek Bolakça's approach to UX strategy, AI-native product design, user research, and conversion-focused digital experiences.",
    },
    tr: {
      title: "Hakkında | İpek Bolakça — UX/UI ve Ürün Tasarımcısı",
      description:
        "İpek Bolakça'nın UX stratejisi, AI-native ürün tasarımı, kullanıcı araştırması ve dönüşüm odaklı dijital deneyim yaklaşımını keşfedin.",
    },
  },
  "/portfolio": {
    en: {
      title: "UX/UI and Product Design Portfolio | UXipek",
      description:
        "Explore UXipek's selected work across UX research, product strategy, UX/UI design, accessibility, and conversion-focused redesign.",
    },
    tr: {
      title: "UX/UI ve Ürün Tasarımı Portfolyosu | UXipek",
      description:
        "UX araştırması, ürün stratejisi, UX/UI tasarımı ve dönüşüm odaklı redesign çalışmalarından oluşan UXipek portfolyosunu inceleyin.",
    },
  },
  "/privacy-policy": {
    en: {
      title: "Privacy Policy | UXIPEK",
      description: "Privacy Policy for UXIPEK — how personal data is collected, used, and protected.",
    },
    tr: {
      title: "Gizlilik Politikası | UXIPEK",
      description: "UXIPEK Gizlilik Politikası — kişisel verilerin nasıl toplandığı, kullanıldığı ve korunduğu.",
    },
  },
  "/kvkk": {
    en: {
      title: "KVKK | UXIPEK",
      description: "KVKK aydınlatma metni — kişisel verilerin işlenmesine ilişkin bilgilendirme.",
    },
    tr: {
      title: "KVKK Aydınlatma Metni | UXIPEK",
      description: "KVKK kapsamında kişisel verilerin işlenmesine ilişkin aydınlatma metni.",
    },
  },
  "/cookie-policy": {
    en: {
      title: "Cookie Policy | UXIPEK",
      description:
        "Cookie Policy for UXIPEK — details on the cookies used across the site and how to manage preferences.",
    },
    tr: {
      title: "Çerez Politikası | UXIPEK",
      description: "UXIPEK Çerez Politikası — sitede kullanılan çerezler ve tercihlerin nasıl yönetileceği hakkında bilgi.",
    },
  },
  "/terms-of-use": {
    en: {
      title: "Terms of Use | UXIPEK",
      description: "Terms of Use for UXIPEK's website and services.",
    },
    tr: {
      title: "Kullanım Koşulları | UXIPEK",
      description: "UXIPEK web sitesi ve hizmetleri için Kullanım Koşulları.",
    },
  },
};
