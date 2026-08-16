import { ServiceItem, ReviewItem, BarberItem, FaqItem, BusinessHours } from '../types';
import { getSafeImageUrl } from '../utils/imageHelper';

export const BUSINESS_INFO = {
  name: "City Center Barbershop & Hair Salon",
  shortName: "City Center Barbershop",
  legalName: "City Center Barbershop Amsterdam B.V.",
  tagline: "More Than a Cut. It's a Lifestyle.",
  eyebrow: "LOOK GOOD. FEEL CONFIDENT.",
  subheading: "Amsterdam Centraal's premier craft barbershop. Precision fades, sharp beard trims, and timeless grooming — right at Stationsplein 41M.",
  address: "Stationsplein 41M, 1012 AB Amsterdam",
  shortAddress: "Stationsplein 41M, Amsterdam Centraal",
  phone: "+31 6 46308882",
  phoneRaw: "+31646308882",
  email: "info@citycenterbarbershop.nl",
  website: "https://citycenterbarbershop.nl",
  whatsAppUrl: "https://wa.me/31646308882?text=Hello%2C%20I%20would%20like%20to%20book%20a%20haircut%20or%20check%20wait%20time%20at%20City%20Center%20Barbershop%20Amsterdam",
  googleRating: 4.9,
  reviewCount: 1343,
  walkInNote: "Walk-ins Welcome • No Reservation Required",
  logoUrl: getSafeImageUrl("logo-2.webp"),
  heroImageUrl: getSafeImageUrl("herenkapper-ervaring-amsterdam-centrum.webp"),
  aboutImageUrl: getSafeImageUrl("herenkapper-aan-het-werk-amsterdam.webp"),
  videoUrl: "/images/hair-cutting-at-city-center-barbershop-amsterdam.mp4",
  socials: {
    instagram: "https://www.instagram.com/citycenterbarbershop/",
    facebook: "https://www.facebook.com/citycenterbarbershop",
    tiktok: "https://www.tiktok.com/@citycenterbarbershop",
    youtube: "https://www.youtube.com/@citycenterbarbershop"
  },
  mapsDirectionsUrl: "https://maps.google.com/?q=City+Center+Barbershop+%26+Hair+Salon+Stationsplein+41M+Amsterdam",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.6568212173167!2d4.898862276906232!3d52.37666997202359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c1186718d7%3A0xa3c2f68a23be38f4!2sStationsplein%2041M%2C%201012%20AB%20Amsterdam!5e0!3m2!1sen!2snl!4v1700000000000!5m2!1sen!2snl"
};

// 6 Primary Featured Services with authentic downloaded images from citycenterbarbershop.nl
export const FEATURED_SERVICES: ServiceItem[] = [
  {
    id: 'haircut',
    name: 'Haircut & Styling',
    category: 'barber',
    price: '€30',
    duration: '30 min',
    description: 'Precision scissor & clipper cut, finished with razor neck clean & styling.',
    image: getSafeImageUrl('heren-opscheren-fade-herenkapper-amsterdam.webp'),
    icon: 'scissors',
    popular: true
  },
  {
    id: 'beard-trim',
    name: 'Beard Trim & Sculpt',
    category: 'beard',
    price: '€20',
    duration: '20 min',
    description: 'Sharp razor lines, clipper shaping, and nourishing botanical beard oil.',
    image: getSafeImageUrl('baard-trimmen-amsterdam-gold-clipper.webp'),
    icon: 'razor',
    popular: false
  },
  {
    id: 'hot-towel-shave',
    name: 'Hot Towel Shave',
    category: 'beard',
    price: '€30',
    duration: '30 min',
    description: 'Steaming herbal towels, rich lather, and straight razor precision.',
    image: getSafeImageUrl('baardverzorging-olie-massage-amsterdam.webp'),
    icon: 'towel',
    popular: false
  },
  {
    id: 'kids-haircut',
    name: 'Kids & Teens Haircut',
    category: 'barber',
    price: '€25',
    duration: '25 min',
    description: 'Patient, trendy haircuts and fades tailored for young gentlemen.',
    image: getSafeImageUrl('jeugd-kapper-low-fade-amsterdam.webp'),
    icon: 'child',
    popular: false
  },
  {
    id: 'hair-design',
    name: 'Burst Fade & Design',
    category: 'specialty',
    price: '€35',
    duration: '35 min',
    description: 'Custom razor lines, graphic edge details, and skin tapers.',
    image: getSafeImageUrl('trendy-herenkapsel-burst-fade-amsterdam.webp'),
    icon: 'star',
    popular: false
  },
  {
    id: 'hair-wash',
    name: 'Scalp Care & Hair Wash',
    category: 'salon',
    price: '€15',
    duration: '20 min',
    description: 'Deep cleansing scalp wash with invigorating massage & conditioning mask.',
    image: getSafeImageUrl('haar-masker-verzorging-washoek-amsterdam.webp'),
    icon: 'droplet',
    popular: false
  }
];

// Complete Service Catalog for modal and full pricing
export const ALL_SERVICES: ServiceItem[] = [
  ...FEATURED_SERVICES,
  {
    id: 'cut-beard-combo',
    name: 'Signature Cut + Beard Combo',
    category: 'combo',
    price: '€45',
    duration: '50 min',
    description: 'Our top-requested package: Custom tailored haircut or skin fade paired with precision beard shaping and hot lather neck shave.',
    image: getSafeImageUrl('baard-strak-maken-hals-trimmen-amsterdam.webp'),
    popular: true,
    tag: 'Best Value'
  },
  {
    id: 'keratine-treatment',
    name: 'Keratin Smoothing Treatment',
    category: 'salon',
    price: '€60+',
    duration: '60 min',
    description: 'Professional smoothing & strengthening treatment for sleek, healthy hair.',
    image: getSafeImageUrl('keratine-behandeling-haar-stijlen-amsterdam.webp'),
    popular: false,
    tag: 'Treatment'
  },
  {
    id: 'dames-balayage',
    name: 'Hair Coloring & Balayage',
    category: 'salon',
    price: '€65+',
    duration: '75 min',
    description: 'Expert hair colouring, grey blending, and modern balayage highlights.',
    image: getSafeImageUrl('dames-haar-kleuren-balayage-amsterdam.webp'),
    popular: false
  },
  {
    id: 'blow-dry-styling',
    name: 'Blow Dry & Volume Styling',
    category: 'salon',
    price: '€25',
    duration: '30 min',
    description: 'Salon blow-dry finish with premium thermal protection and volume boost.',
    image: getSafeImageUrl('heren-haar-fohnen-styling-amsterdam.webp'),
    popular: false
  }
];

export const SERVICES = ALL_SERVICES;

export const REVIEWS: ReviewItem[] = [
  {
    id: '1',
    author: 'Mark van Dijk',
    role: 'Local Commuter',
    rating: 5,
    date: '2 days ago',
    content: 'Hands down the best barbershop in Amsterdam Centraal! Perfect skin fade every time, no waiting around, and super friendly atmosphere.',
    verified: true,
    avatar: getSafeImageUrl('tevreden-klant-herenkapper-amsterdam.webp')
  },
  {
    id: '2',
    author: 'Samir B.',
    role: 'Regular Client',
    rating: 5,
    date: '1 week ago',
    content: 'Razor-sharp beard lines and hot towel treatment. The barbers take their time and treat every customer like royalty.',
    verified: true,
    avatar: getSafeImageUrl('kapper-advies-herenkapsel-amsterdam-centrum.webp')
  },
  {
    id: '3',
    author: 'David L.',
    role: 'Tourist from UK',
    rating: 5,
    date: '2 weeks ago',
    content: "Needed a fresh haircut before my meeting near Central Station. Walked straight in, chair was ready in 2 mins, and cut was absolute 10/10.",
    verified: true,
    avatar: getSafeImageUrl('nek-schoonmaken-nekborstel-barber-amsterdam.webp')
  },
  {
    id: '4',
    author: 'Lucas Jansen',
    role: 'Amsterdam Resident',
    rating: 5,
    date: '3 weeks ago',
    content: 'Clean salon, sterile equipment, master barbers. 1,300+ 5-star reviews on Google speak for themselves!',
    verified: true,
    avatar: getSafeImageUrl('tevreden-klant-herenkapper-amsterdam.webp')
  }
];

export const MASTER_BARBERS: BarberItem[] = [
  {
    id: 'barber-1',
    name: 'Ali & Team',
    title: 'Head Barber & Master Stylist',
    experience: '12+ Years Exp.',
    image: getSafeImageUrl('fresha-image-14.jpeg'),
    specialty: 'Skin Fades, Scissor Craft & Beard Sculpting'
  },
  {
    id: 'barber-2',
    name: 'Master Barber',
    title: 'Senior Artisan Barber',
    experience: '9+ Years Exp.',
    image: getSafeImageUrl('fresha-image-15.jpeg'),
    specialty: 'Hot Razor Shaves & Modern Tapers'
  },
  {
    id: 'barber-3',
    name: 'Fade Specialist',
    title: 'Hair & Salon Specialist',
    experience: '8+ Years Exp.',
    image: getSafeImageUrl('fresha-image-16.jpeg'),
    specialty: 'Burst Fades, Keratin & Curly Hair Design'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Do I need an appointment, or can I just walk in?',
    answer: 'Walk-ins are always warmly welcomed! We are located right at Stationsplein 41M next to Amsterdam Centraal. You can also book online to skip the line.'
  },
  {
    id: 'faq-2',
    question: 'Where exactly is City Center Barbershop located?',
    answer: 'We are at Stationsplein 41M, 1012 AB Amsterdam — directly in front of Amsterdam Central Station, easily accessible by train, tram, metro, or bike.'
  },
  {
    id: 'faq-3',
    question: 'What is included in the Hot Towel Shave?',
    answer: 'Our traditional straight-razor shave includes herbal steam prep, warm lather, dual steaming towels, razor edging, and soothing organic aftershave balm.'
  },
  {
    id: 'faq-4',
    question: 'What payment methods do you accept?',
    answer: 'We accept PIN, Maestro, V-Pay, Visa, MasterCard, Apple Pay, Google Pay, and Cash.'
  }
];

export const HOURS_LIST: BusinessHours[] = [
  { day: 'Monday', hours: '09:00 – 20:00', isOpenToday: false },
  { day: 'Tuesday', hours: '09:00 – 20:00', isOpenToday: false },
  { day: 'Wednesday', hours: '09:00 – 20:00', isOpenToday: false },
  { day: 'Thursday', hours: '09:00 – 20:00', isOpenToday: false },
  { day: 'Friday', hours: '09:00 – 20:00', isOpenToday: false },
  { day: 'Saturday', hours: '09:00 – 20:00', isOpenToday: false },
  { day: 'Sunday', hours: '10:00 – 18:00', isOpenToday: false }
];


