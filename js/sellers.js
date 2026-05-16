// ============================================================
// ECOXCHANGE — Verified Sellers Registry
// ============================================================
// This is the single source-of-truth for all sellers
// integrated into the EcoXchange trust ecosystem.
//
// SELLER TIERS:
//   platinum  — founding ecosystem partners (highest trust)
//   gold      — verified active partners
//   silver    — onboarded, verification in progress
//
// FUTURE FIELDS (scaffold ready, not yet rendered):
//   ecoIdCount   — number of products with EcoIDs registered
//   passportCount— number of Digital Product Passports issued
//   qrEnabled    — whether QR-linked passports are active
// ============================================================

const ECO_SELLERS = [
  {
    id: 'campuskartt',
    name: 'CampusKartt',
    tagline: 'The Student Marketplace — Powered by EcoXchange',
    description:
      'DTU\'s premier peer-to-peer marketplace for academic and hostel essentials. Every listing on CampusKartt is eligible for EcoXchange verification, giving buyers full product lifecycle transparency.',
    logo: '/static/images/sellers/campuskartt.png',
    logoFallback: '🛒',
    accentColor: '#F26522',
    tier: 'platinum',
    tierLabel: 'Founding Partner',
    rating: 4.9,
    reviewCount: 312,
    categories: ['Academic Gear', 'Electronics', 'Hostel Essentials', 'Bicycles', 'Textbooks'],
    location: 'Delhi Technological University, Rohini, Delhi',
    locationShort: 'DTU Campus',
    ecoIdCount: 480,
    passportCount: 218,
    qrEnabled: true,
    url: 'https://campuskartt.vercel.app',
    isExternal: true,
    verifiedSince: '2024',
    trustScore: 98,
    trustIndicators: ['Student Verified', 'KYC Active', 'EcoID Enabled', 'Escrow Payments'],
  },
  {
    id: 'booknest',
    name: 'BookNest',
    tagline: 'Pre-Loved Textbooks for Every Semester',
    description:
      'A curated used-book store operating near DTU and NSUT campuses. BookNest specialises in engineering textbooks, reference material, and lab manuals — all condition-scored and passport-ready.',
    logo: '/static/images/sellers/booknest.png',
    logoFallback: '📚',
    accentColor: '#0B8B8B',
    tier: 'gold',
    tierLabel: 'Verified Partner',
    rating: 4.7,
    reviewCount: 156,
    categories: ['Textbooks', 'Lab Manuals', 'Reference Books', 'Notes'],
    location: 'Bawana Road, Near DTU Gate 2, Delhi',
    locationShort: 'Near DTU',
    ecoIdCount: 920,
    passportCount: 540,
    qrEnabled: true,
    url: '#seller/booknest',
    isExternal: false,
    verifiedSince: '2024',
    trustScore: 94,
    trustIndicators: ['Shop Verified', 'EcoID Enabled', 'Condition Scored'],
  },
  {
    id: 'voltbox',
    name: 'VoltBox',
    tagline: 'Campus Electronics & Gadget Repair Hub',
    description:
      'VoltBox stocks pre-checked calculators, soldering kits, Arduino boards, and lab instruments. Every item carries an EcoXchange condition score so you know exactly what you\'re buying.',
    logo: '/static/images/sellers/voltbox.png',
    logoFallback: '⚡',
    accentColor: '#F5C842',
    tier: 'gold',
    tierLabel: 'Verified Partner',
    rating: 4.6,
    reviewCount: 89,
    categories: ['Electronics', 'Calculators', 'Lab Instruments', 'Repair Parts'],
    location: 'Main Market, Rohini Sector 16, Delhi',
    locationShort: 'Rohini',
    ecoIdCount: 340,
    passportCount: 160,
    qrEnabled: false,
    url: '#seller/voltbox',
    isExternal: false,
    verifiedSince: '2025',
    trustScore: 91,
    trustIndicators: ['Shop Verified', 'Condition Scored', 'Repair Warranty'],
  },
  {
    id: 'hostelhub',
    name: 'HostelHub',
    tagline: 'Hostel Essentials — Move In Without Buying New',
    description:
      'Chairs, lamps, mattresses, drawer units — HostelHub stocks everything a freshman needs for their hostel room, sourced from graduating seniors and verified for condition through EcoXchange.',
    logo: '/static/images/sellers/hostelhub.png',
    logoFallback: '🛋️',
    accentColor: '#E85D5D',
    tier: 'gold',
    tierLabel: 'Verified Partner',
    rating: 4.5,
    reviewCount: 201,
    categories: ['Hostel Furniture', 'Study Lamps', 'Mattresses', 'Storage', 'Fans & Coolers'],
    location: 'GTB Nagar Market, Delhi',
    locationShort: 'GTB Nagar',
    ecoIdCount: 270,
    passportCount: 98,
    qrEnabled: false,
    url: '#seller/hostelhub',
    isExternal: false,
    verifiedSince: '2025',
    trustScore: 88,
    trustIndicators: ['Shop Verified', 'Condition Scored', 'Pickup Available'],
  },
  {
    id: 'stationarywale',
    name: 'StationaryWale',
    tagline: 'Engineering & Art Stationery at Student Prices',
    description:
      'Drafting instruments, drawing boards, compasses, and art supplies — StationaryWale is the go-to store for Mech-Can students. Pre-owned kits verified and condition-tagged by EcoXchange.',
    logo: '/static/images/sellers/stationarywale.png',
    logoFallback: '📐',
    accentColor: '#22C55E',
    tier: 'silver',
    tierLabel: 'Onboarded Partner',
    rating: 4.3,
    reviewCount: 64,
    categories: ['Drafter Kits', 'Drawing Boards', 'Art Supplies', 'Geometry Sets'],
    location: 'Azadpur Market, Delhi',
    locationShort: 'Azadpur',
    ecoIdCount: 130,
    passportCount: 42,
    qrEnabled: false,
    url: '#seller/stationarywale',
    isExternal: false,
    verifiedSince: '2025',
    trustScore: 82,
    trustIndicators: ['Shop Verified', 'Onboarding Active'],
  },
  {
    id: 'cyclemart',
    name: 'CycleMart',
    tagline: 'Refurbished Cycles for Campus Life',
    description:
      'CycleMart specialises in refurbished student bicycles — cleaned, serviced, and EcoXchange condition-scored before every sale. Each cycle carries a digital passport with service history.',
    logo: '/static/images/sellers/cyclemart.png',
    logoFallback: '🚲',
    accentColor: '#38BDF8',
    tier: 'silver',
    tierLabel: 'Onboarded Partner',
    rating: 4.4,
    reviewCount: 47,
    categories: ['Bicycles', 'Helmets', 'Cycle Accessories', 'Repair Services'],
    location: 'Near BPIT, Rohini, Delhi',
    locationShort: 'Near BPIT',
    ecoIdCount: 85,
    passportCount: 55,
    qrEnabled: true,
    url: '#seller/cyclemart',
    isExternal: false,
    verifiedSince: '2025',
    trustScore: 85,
    trustIndicators: ['Shop Verified', 'Service History', 'QR Passport Active'],
  },
];

// ── Tier config (visual tokens per tier) ───────────────────────
const SELLER_TIERS = {
  platinum: {
    label: 'Founding Partner',
    color: '#F26522',
    glow: 'rgba(242,101,34,0.22)',
    border: 'rgba(242,101,34,0.35)',
    badgeBg: 'rgba(242,101,34,0.12)',
    icon: '⬡',
  },
  gold: {
    label: 'Verified Partner',
    color: '#F5C842',
    glow: 'rgba(245,200,66,0.18)',
    border: 'rgba(245,200,66,0.30)',
    badgeBg: 'rgba(245,200,66,0.10)',
    icon: '◈',
  },
  silver: {
    label: 'Onboarded Partner',
    color: '#94A3B8',
    glow: 'rgba(148,163,184,0.14)',
    border: 'rgba(148,163,184,0.22)',
    badgeBg: 'rgba(148,163,184,0.08)',
    icon: '◇',
  },
};

// ── Category filter list (auto-derived + custom) ────────────────
const SELLER_CATEGORIES = [
  'All',
  'Academic Gear',
  'Electronics',
  'Textbooks',
  'Hostel Essentials',
  'Bicycles',
  'Drafter Kits',
  'Lab Instruments',
];
