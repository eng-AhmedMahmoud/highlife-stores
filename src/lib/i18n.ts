export type Locale = "en" | "ar";

type Category = { title: string; count: string };
type Product = { name: string; price: string; tag: string | null };
type ValueItem = { title: string; body: string };

export type Dict = {
  nav: {
    shop: string;
    collections: string;
    about: string;
    journal: string;
    contact: string;
    cart: string;
    search: string;
    menu: string;
    close: string;
  };
  marquee: string[];
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stat1Label: string;
    stat1Value: string;
    stat2Label: string;
    stat2Value: string;
    stat3Label: string;
    stat3Value: string;
  };
  categories: {
    eyebrow: string;
    title: string;
    lead: string;
    items: Category[];
  };
  featured: {
    eyebrow: string;
    title: string;
    lead: string;
    viewAll: string;
    products: Product[];
  };
  story: {
    eyebrow: string;
    title: string;
    body: string;
    bullet1Title: string;
    bullet1Body: string;
    bullet2Title: string;
    bullet2Body: string;
    bullet3Title: string;
    bullet3Body: string;
    cta: string;
  };
  values: {
    eyebrow: string;
    title: string;
    items: ValueItem[];
  };
  newsletter: {
    eyebrow: string;
    title: string;
    lead: string;
    placeholder: string;
    cta: string;
    note: string;
  };
  footer: {
    tagline: string;
    shop: string;
    shopLinks: string[];
    help: string;
    helpLinks: string[];
    company: string;
    companyLinks: string[];
    rights: string;
    langLabel: string;
  };
};

export const dict: Record<Locale, Dict> = {
  en: {
    nav: {
      shop: "Shop",
      collections: "Collections",
      about: "About",
      journal: "Journal",
      contact: "Contact",
      cart: "Cart",
      search: "Search",
      menu: "Menu",
      close: "Close",
    },
    marquee: [
      "Free shipping over 30,000 EGP",
      "New arrivals weekly",
      "Crafted in Egypt",
      "5-year frame warranty",
    ],
    hero: {
      eyebrow: "Spring Collection 2026",
      title: "Furniture made to live with.",
      subtitle:
        "Considered pieces for the home and office — built from solid materials, designed to last, priced to be loved.",
      ctaPrimary: "Shop the collection",
      ctaSecondary: "Explore lookbook",
      stat1Label: "Pieces in collection",
      stat1Value: "240+",
      stat2Label: "Showrooms",
      stat2Value: "6",
      stat3Label: "Years crafting",
      stat3Value: "22",
    },
    categories: {
      eyebrow: "Browse",
      title: "Shop by category",
      lead: "From the desk you work at to the sofa you sink into — pieces designed for every corner of modern life.",
      items: [
        { title: "Sofas & Seating", count: "48 pieces" },
        { title: "Desks & Office", count: "62 pieces" },
        { title: "Chairs", count: "37 pieces" },
        { title: "Bedroom", count: "29 pieces" },
        { title: "Dining", count: "24 pieces" },
        { title: "Storage", count: "40 pieces" },
      ],
    },
    featured: {
      eyebrow: "Featured",
      title: "This season's essentials",
      lead: "Six pieces our design team can't stop recommending.",
      viewAll: "View all products",
      products: [
        { name: "Orla Lounge Chair", price: "12,400 EGP", tag: "New" },
        { name: "Soren Executive Desk", price: "24,900 EGP", tag: "Best seller" },
        { name: "Maren Modular Sofa", price: "48,200 EGP", tag: "Limited" },
        { name: "Eden Bookshelf", price: "18,750 EGP", tag: null },
        { name: "Atlas Task Chair", price: "9,300 EGP", tag: "New" },
        { name: "Noor Dining Table", price: "32,600 EGP", tag: null },
      ],
    },
    story: {
      eyebrow: "Our story",
      title: "Twenty-two years of careful making.",
      body:
        "High Life Stores began with a single workshop in Cairo and a simple belief — that furniture should be honest, well-made, and quietly beautiful. Today we design, craft and deliver across Egypt, but the craft hasn't changed.",
      bullet1Title: "Solid materials",
      bullet1Body: "Kiln-dried hardwoods, full-grain leathers and dense foams that hold their shape.",
      bullet2Title: "Considered design",
      bullet2Body: "Pieces drawn in-house, refined by makers, tested in real homes before they ship.",
      bullet3Title: "Direct pricing",
      bullet3Body: "We make and sell directly — no middle markups, no theatrical sales.",
      cta: "Read more about us",
    },
    values: {
      eyebrow: "Why High Life",
      title: "Built around the way you live.",
      items: [
        {
          title: "Free delivery & assembly",
          body: "On every order above 30,000 EGP, anywhere in Egypt.",
        },
        {
          title: "5-year frame warranty",
          body: "If the bones break, we replace them — no questions.",
        },
        {
          title: "30-day home trial",
          body: "Live with it. If it's not right, we'll take it back.",
        },
        {
          title: "Made in Egypt",
          body: "Designed and built in our own workshops outside Cairo.",
        },
      ],
    },
    newsletter: {
      eyebrow: "Stay in touch",
      title: "First look at new pieces.",
      lead: "Join the list for early access to drops, lookbooks and member-only pricing. No spam, ever.",
      placeholder: "your@email.com",
      cta: "Subscribe",
      note: "By subscribing you agree to our privacy policy.",
    },
    footer: {
      tagline: "Furniture, considered.",
      shop: "Shop",
      shopLinks: ["Sofas", "Desks", "Chairs", "Bedroom", "Dining", "Storage"],
      help: "Help",
      helpLinks: ["Delivery", "Returns", "Warranty", "Care guide", "Contact"],
      company: "Company",
      companyLinks: ["About", "Showrooms", "Journal", "Careers", "Press"],
      rights: "© 2026 High Life Stores. All rights reserved.",
      langLabel: "العربية",
    },
  },
  ar: {
    nav: {
      shop: "المتجر",
      collections: "المجموعات",
      about: "من نحن",
      journal: "المدونة",
      contact: "تواصل معنا",
      cart: "السلة",
      search: "بحث",
      menu: "القائمة",
      close: "إغلاق",
    },
    marquee: [
      "شحن مجاني للطلبات فوق ٣٠٬٠٠٠ جنيه",
      "وصل حديثًا كل أسبوع",
      "صناعة مصرية",
      "ضمان ٥ سنوات على الهيكل",
    ],
    hero: {
      eyebrow: "مجموعة ربيع ٢٠٢٦",
      title: "أثاث صُنع ليُعاش.",
      subtitle:
        "قطع مدروسة للمنزل والمكتب — مصنوعة من مواد متينة، مصممة لتدوم، وبأسعار تستحق الحب.",
      ctaPrimary: "تسوّق المجموعة",
      ctaSecondary: "تصفّح الكتالوج",
      stat1Label: "قطعة في المجموعة",
      stat1Value: "+٢٤٠",
      stat2Label: "صالات عرض",
      stat2Value: "٦",
      stat3Label: "سنة من الصناعة",
      stat3Value: "٢٢",
    },
    categories: {
      eyebrow: "تصفّح",
      title: "تسوّق حسب الفئة",
      lead: "من المكتب الذي تعمل عليه إلى الأريكة التي ترتاح فيها — قطع لكل ركن من حياتك.",
      items: [
        { title: "أرائك ومقاعد", count: "٤٨ قطعة" },
        { title: "مكاتب وأثاث مكتبي", count: "٦٢ قطعة" },
        { title: "كراسي", count: "٣٧ قطعة" },
        { title: "غرف نوم", count: "٢٩ قطعة" },
        { title: "غرف طعام", count: "٢٤ قطعة" },
        { title: "تخزين", count: "٤٠ قطعة" },
      ],
    },
    featured: {
      eyebrow: "مميّز",
      title: "أساسيّات هذا الموسم",
      lead: "ست قطع لا يتوقف فريق التصميم عن التوصية بها.",
      viewAll: "عرض كل المنتجات",
      products: [
        { name: "كرسي أورلا", price: "١٢٬٤٠٠ ج.م", tag: "جديد" },
        { name: "مكتب سورين التنفيذي", price: "٢٤٬٩٠٠ ج.م", tag: "الأكثر مبيعًا" },
        { name: "أريكة مارين", price: "٤٨٬٢٠٠ ج.م", tag: "محدود" },
        { name: "مكتبة إيدن", price: "١٨٬٧٥٠ ج.م", tag: null },
        { name: "كرسي أطلس", price: "٩٬٣٠٠ ج.م", tag: "جديد" },
        { name: "طاولة طعام نور", price: "٣٢٬٦٠٠ ج.م", tag: null },
      ],
    },
    story: {
      eyebrow: "قصّتنا",
      title: "اثنان وعشرون عامًا من الصناعة بعناية.",
      body:
        "بدأت هاي لايف ستورز بورشة صغيرة في القاهرة وفكرة بسيطة — أن يكون الأثاث صادقًا، متقن الصنع، وجميلًا بهدوء. اليوم نصمم ونصنع ونوصل في كل أنحاء مصر، لكن الحرفة لم تتغيّر.",
      bullet1Title: "مواد متينة",
      bullet1Body: "أخشاب صلبة مجفّفة بالفرن، جلود طبيعية، وإسفنج كثيف يحتفظ بشكله.",
      bullet2Title: "تصميم مدروس",
      bullet2Body: "قطع نرسمها داخليًا، يحسّنها صانعونا، ونختبرها في بيوت حقيقية قبل الشحن.",
      bullet3Title: "سعر مباشر",
      bullet3Body: "نصنع ونبيع مباشرة — بلا وسطاء، وبلا تخفيضات مسرحية.",
      cta: "اقرأ المزيد عنّا",
    },
    values: {
      eyebrow: "لماذا هاي لايف",
      title: "مبنيّ حول طريقة حياتك.",
      items: [
        {
          title: "توصيل وتركيب مجاني",
          body: "لكل طلب فوق ٣٠٬٠٠٠ جنيه، في أي مكان داخل مصر.",
        },
        {
          title: "ضمان ٥ سنوات على الهيكل",
          body: "إذا انكسرت العظام، نستبدلها — بلا أسئلة.",
        },
        {
          title: "تجربة منزلية ٣٠ يومًا",
          body: "عش معه. لو ما ناسبكش، نسترجعه.",
        },
        {
          title: "صناعة مصرية",
          body: "مصمّم ومصنوع في ورشنا خارج القاهرة.",
        },
      ],
    },
    newsletter: {
      eyebrow: "ابق على تواصل",
      title: "أول من يرى القطع الجديدة.",
      lead: "انضم للقائمة للوصول المبكر للمجموعات الجديدة وأسعار الأعضاء. بلا إزعاج أبدًا.",
      placeholder: "بريدك@الإلكتروني.com",
      cta: "اشترك",
      note: "بالاشتراك أنت توافق على سياسة الخصوصية.",
    },
    footer: {
      tagline: "أثاث، بعناية.",
      shop: "المتجر",
      shopLinks: ["أرائك", "مكاتب", "كراسي", "غرف نوم", "غرف طعام", "تخزين"],
      help: "المساعدة",
      helpLinks: ["التوصيل", "الإرجاع", "الضمان", "دليل العناية", "تواصل"],
      company: "الشركة",
      companyLinks: ["من نحن", "صالات العرض", "المدونة", "الوظائف", "الصحافة"],
      rights: "© ٢٠٢٦ هاي لايف ستورز. جميع الحقوق محفوظة.",
      langLabel: "English",
    },
  },
};
