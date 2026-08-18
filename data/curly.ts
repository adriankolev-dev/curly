/**
 * Централизирани данни за CURly Gabrovo.
 * Единствен източник на истина — готов за CMS/API интеграция.
 */

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price?: number | null;
  currency?: "BGN";
  verified: boolean;
  image?: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  verified: boolean;
  items: MenuItem[];
};

export const curly = {
  name: "CURly",
  fullName: "CURly Gabrovo",
  legalName: "КЪРЛИ БЪЛГАРИЯ ООД",
  city: "Габрово",

  tagline: "Нов ресторант в сърцето на Габрово",
  brandTagline: "Made to be enjoyed",

  description:
    "Съвременен ресторант в Габрово — суши, бургери и напитки на една маса, край Янтра.",

  offerings: ["Суши", "Бургери", "Напитки"],

  brandVoice: {
    tone: "топъл, енергичен, социален, без претенциозност",
    personality: [
      "модерен индустриален",
      "съвременен",
      "габровски хумор",
      "общност",
    ],
  },

  contact: {
    address: "ул. \u201eДунав\u201c 5",
    addressFull: "ул. \u201eДунав\u201c 5, 5300 Габрово, България",
    postalCode: "5300",
    phone: "+359 89 446 6246",
    phoneDisplay: "089 446 6246",
    phoneHref: "tel:+359894466246",
    email: null as string | null,
  },

  location: {
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Curly+Gabrovo+ул.+Дунав+5+Габрово",
    coordinates: {
      lat: 42.8738,
      lng: 25.3215,
    },
    context:
      "В сърцето на Габрово, в модерния бизнес комплекс Scientia — край брега на Янтра.",
  },

  openingHours: {
    verified: false,
    notice:
      "За актуално работно време — обадете се или проверете във Facebook/Instagram.",
    schedule: null as null | Record<string, string>,
  },

  social: {
    facebook: "https://www.facebook.com/p/Curly-Gabrovo-61590305827458/",
    instagram: "https://www.instagram.com/curly.gabrovo/",
    linkedin: "https://www.linkedin.com/company/curly-bulgaria",
  },

  booking: {
    verified: true,
    method: "phone" as const,
    url: null as string | null,
    cta: "Обади се и резервирай маса",
    phone: "+359 89 446 6246",
  },

  seo: {
    title: "CURly Gabrovo | Суши, бургери и напитки в Габрово",
    description:
      "CURly — ресторант на ул. \u201eДунав\u201c 5 в Габрово. Суши, бургери и коктейли. Резервации: 089 446 6246.",
    locale: "bg_BG",
    siteUrl: "https://curly-gabrovo.vercel.app",
  },

  images: {
    logo: "/images/curly/brand/logo.png",
    logoWhite: "/images/curly/brand/logo-white.png",
    hero: "/images/curly/hero/plating.jpg",
    garden: "/images/curly/space/garden.png",
  },

  stockNotice:
    "Визуален ориентир — докато имаме снимки от кухнята на CURly.",

  cinematic: {
    signature: {
      kicker: "CURly",
      title: "Подписът",
      line: "Моментът, в който го опитваш.",
      dish: "Curly Pink",
      note: "малини · грейпфрут · розмарин",
      image: "/images/curly/drinks/curly-pink.jpg",
      imageAlt: "Curly Pink — визуален ориентир за коктейла",
    },
  },

  menu: {
    isTemporary: false,
    notice:
      "Цените не са публикувани онлайн — за актуално меню и оферти обадете се или посетете ни на място.",
    categories: [
      {
        id: "sushi",
        name: "Суши",
        verified: true,
        items: [
          {
            id: "sushi-platter",
            name: "Суши сет",
            description: "hosomaki · uramaki",
            price: null as number | null,
            verified: true,
            image: "/images/curly/food/sushi-platter.jpg",
          },
          {
            id: "sushi-salmon",
            name: "Суши със сьомга",
            description: "сьомга · авокадо · краставица · cream cheese",
            price: null as number | null,
            verified: true,
            image: "/images/curly/food/sushi-salmon.jpg",
          },
        ],
      },
      {
        id: "burgers",
        name: "Бургери",
        verified: true,
        items: [
          {
            id: "burger",
            name: "Бургер",
            description: "Потвърден от официалните канали. Цена — на място.",
            price: null as number | null,
            verified: true,
            image: "/images/curly/food/burger.jpg",
          },
        ],
      },
      {
        id: "mains",
        name: "Основни",
        verified: true,
        items: [
          {
            id: "carbonara",
            name: "Спагети карбонара",
            description: "guanciale · пармезан · черен пипер",
            price: null as number | null,
            verified: true,
            image: "/images/curly/food/carbonara.jpg",
          },
          {
            id: "risotto",
            name: "Ризото с морски дарове",
            description: "скариди · миди · калмари · октопод",
            price: null as number | null,
            verified: true,
            image: "/images/curly/food/risotto.jpg",
          },
          {
            id: "pork",
            name: "Свинско филе с бекон",
            description: "медальони · пюре",
            price: null as number | null,
            verified: true,
            image: "/images/curly/food/pork-tenderloin.jpg",
          },
        ],
      },
      {
        id: "salads",
        name: "Салати",
        verified: true,
        items: [
          {
            id: "halloumi",
            name: "Салата с халуми",
            description: "халуми · ягоди · цитруси · орехи",
            price: null as number | null,
            verified: true,
            image: "/images/curly/food/halloumi-salad.jpg",
          },
          {
            id: "greek",
            name: "Гръцка салата",
            description: "домати · краставици · фета · крутони",
            price: null as number | null,
            verified: true,
            image: "/images/curly/food/greek-salad.jpg",
          },
        ],
      },
      {
        id: "cocktails",
        name: "Напитки",
        verified: true,
        items: [
          {
            id: "tropical-sunset",
            name: "Tropical Sunset",
            description: "маракуя · ананас",
            price: null as number | null,
            verified: true,
            image: "/images/curly/drinks/tropical-sunset.jpg",
          },
          {
            id: "lavender-dream",
            name: "Lavender Dream",
            description: "лавандула · боровинки",
            price: null as number | null,
            verified: true,
            image: "/images/curly/drinks/lavender-dream.jpg",
          },
          {
            id: "curly-pink",
            name: "Curly Pink",
            description: "малини · грейпфрут · розмарин",
            price: null as number | null,
            verified: true,
            image: "/images/curly/drinks/curly-pink.jpg",
          },
          {
            id: "mojito",
            name: "Mojito",
            description: "лайм · мента",
            price: null as number | null,
            verified: true,
            image: "/images/curly/drinks/mojito.jpg",
          },
        ],
      },
    ] satisfies MenuCategory[],
  },

  navigation: [
    { label: "Начало", href: "#content", image: "/images/curly/hero/plating.jpg" },
    { label: "Меню", href: "#menu", image: "/images/curly/food/sushi-platter.jpg" },
    { label: "Галерия", href: "#gallery", image: "/images/curly/space/interior.png" },
    { label: "Контакти", href: "#contact", image: "/images/curly/space/garden.png" },
  ],

  heroSlides: [
    {
      id: "hero-1",
      kicker: "Съвременна кухня в Габрово",
      title: "CURly",
      titleLine2: "Gabrovo",
    },
    {
      id: "hero-2",
      kicker: "Суши, бургери и напитки",
      title: "Една",
      titleLine2: "маса",
    },
    {
      id: "hero-3",
      kicker: "Край брега на Янтра",
      title: "Лятото",
      titleLine2: "навън",
    },
  ],

  heroImage: {
    src: "/images/curly/hero/plating.jpg",
    alt: "Платиране на ястие — визуален ориентир, не снимка от кухнята на CURly",
  },

  showcase: [
    {
      id: "show-1",
      name: "Суши сет",
      category: "Суши",
      image: "/images/curly/food/sushi-platter.jpg",
    },
    {
      id: "show-2",
      name: "Бургер",
      category: "Бургери",
      image: "/images/curly/food/burger.jpg",
    },
    {
      id: "show-3",
      name: "Curly Pink",
      category: "Напитки",
      image: "/images/curly/drinks/curly-pink.jpg",
    },
  ],

  specialties: [
    {
      id: "sushi",
      name: "Суши сет",
      category: "Суши",
      description: "hosomaki · uramaki — прясно, просто, неочаквано.",
      image: "/images/curly/food/sushi-platter.jpg",
    },
    {
      id: "burger",
      name: "Бургер",
      category: "Бургери",
      description: "Топъл, шумен, за делене на масата.",
      image: "/images/curly/food/burger.jpg",
    },
    {
      id: "drink",
      name: "Curly Pink",
      category: "Напитки",
      description: "малини · грейпфрут · розмарин",
      image: "/images/curly/drinks/curly-pink.jpg",
    },
  ],

  specialtiesFeature: {
    subtitle: "Нашата философия",
    titleLine1: "Нашите",
    titleLine2: "специалитети",
    body: "CURly е нов ресторант в сърцето на Габрово. Не разделяме вечерта на \u201eкухни\u201c — събираме я. Край Янтра, без церемонии.",
    smallImage: "/images/curly/stock/meat.jpg",
    smallImageAlt: "Готвене — визуален ориентир",
    largeImage: "/images/curly/stock/plating.jpg",
    largeImageAlt: "Платиране — визуален ориентир",
  },

  testimonials: [
    {
      id: "voice",
      quote:
        "Суши, бургери и напитки — на една маса, без церемонии. Това е CURly.",
      source: "CURly Gabrovo",
      meta: "Made to be enjoyed",
    },
    {
      id: "place",
      quote:
        "Индустриален интериор и летна градина на ул. Дунав — край брега на Янтра.",
      source: "Габрово",
      meta: "Scientia · ул. \u201eДунав\u201c 5",
    },
    {
      id: "invite",
      quote:
        "Формираме отзивите си — споделете впечатлението си в Google или Facebook.",
      source: "Вашето мнение",
      meta: "Очакваме ви",
    },
  ],

  owners: {
    verified: true,
    names: ["Мирела Венкова", "Мирослав Влашев"],
  },

  researchNotes: {
    sources: [
      "Официални материали от CURly Gabrovo (лого, снимки, меню)",
      "Facebook — Curly Gabrovo",
      "LinkedIn — Curly Bulgaria",
    ],
    registered: "30.10.2025",
    followers: "2.3K (Facebook, август 2026)",
  },
} as const;

export type CurlyData = typeof curly;
