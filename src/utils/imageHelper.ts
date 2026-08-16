import type React from 'react';

// Helper to provide robust image fallback across local & production deployments

const CDN_BASE_MAP: Record<string, string> = {
  'logo-2.webp': 'https://citycenterbarbershop.nl/wp-content/uploads/2026/05/logo-2.webp',
  'cropped-fav-icon.png': 'https://citycenterbarbershop.nl/wp-content/uploads/2026/02/cropped-fav-icon.png',
  'herenkapper-ervaring-amsterdam-centrum.webp': 'https://citycenterbarbershop.nl/wp-content/uploads/2026/07/herenkapper-ervaring-amsterdam-centrum.webp',
  'herenkapper-aan-het-werk-amsterdam.webp': 'https://citycenterbarbershop.nl/wp-content/uploads/2026/07/herenkapper-aan-het-werk-amsterdam.webp',
  'trendy-herenkapsel-burst-fade-amsterdam.webp': 'https://citycenterbarbershop.nl/wp-content/uploads/2026/07/trendy-herenkapsel-burst-fade-amsterdam.webp',
  'baard-lijnen-strak-maken-amsterdam.webp': 'https://citycenterbarbershop.nl/wp-content/uploads/2026/07/baard-lijnen-strak-maken-amsterdam.webp',
  'krullend-haar-knippen-amsterdam-barber.webp': 'https://citycenterbarbershop.nl/wp-content/uploads/2026/07/krullend-haar-knippen-amsterdam-barber.webp',
  'heren-opscheren-fade-herenkapper-amsterdam.webp': 'https://citycenterbarbershop.nl/wp-content/uploads/2026/07/heren-opscheren-fade-herenkapper-amsterdam.webp',
  'baard-trimmen-amsterdam-gold-clipper.webp': 'https://citycenterbarbershop.nl/wp-content/uploads/2026/07/baard-trimmen-amsterdam-gold-clipper.webp',
  'professionele-wahl-trimmer-barber-gerei.webp': 'https://citycenterbarbershop.nl/wp-content/uploads/2026/07/professionele-wahl-trimmer-barber-gerei.webp',
  'baardverzorging-olie-massage-amsterdam.webp': 'https://citycenterbarbershop.nl/wp-content/uploads/2026/07/baardverzorging-olie-massage-amsterdam.webp',
  'haar-masker-verzorging-washoek-amsterdam.webp': 'https://citycenterbarbershop.nl/wp-content/uploads/2026/07/haar-masker-verzorging-washoek-amsterdam.webp',
  'tevreden-klant-herenkapper-amsterdam.webp': 'https://citycenterbarbershop.nl/wp-content/uploads/2026/07/tevreden-klant-herenkapper-amsterdam.webp',
  'kapper-advies-herenkapsel-amsterdam-centrum.webp': 'https://citycenterbarbershop.nl/wp-content/uploads/2026/07/kapper-advies-herenkapsel-amsterdam-centrum.webp',
  'nek-schoonmaken-nekborstel-barber-amsterdam.webp': 'https://citycenterbarbershop.nl/wp-content/uploads/2026/07/nek-schoonmaken-nekborstel-barber-amsterdam.webp',
  'jeugd-kapper-low-fade-amsterdam.webp': 'https://citycenterbarbershop.nl/wp-content/uploads/2026/07/jeugd-kapper-low-fade-amsterdam.webp',
  'heren-fade-knippen-zijaanzicht-amsterdam.webp': 'https://citycenterbarbershop.nl/wp-content/uploads/2026/07/heren-fade-knippen-zijaanzicht-amsterdam.webp',
  'barber-3.webp': 'https://citycenterbarbershop.nl/wp-content/uploads/2026/05/barber-3.webp',
  'keratine-behandeling-haar-stijlen-amsterdam.webp': 'https://citycenterbarbershop.nl/wp-content/uploads/2026/07/keratine-behandeling-haar-stijlen-amsterdam.webp',
  'dames-haar-kleuren-balayage-amsterdam.webp': 'https://citycenterbarbershop.nl/wp-content/uploads/2026/07/dames-haar-kleuren-balayage-amsterdam.webp',
  'heren-haar-fohnen-styling-amsterdam.webp': 'https://citycenterbarbershop.nl/wp-content/uploads/2026/07/heren-haar-fohnen-styling-amsterdam.webp',
  'baard-strak-maken-hals-trimmen-amsterdam.webp': 'https://citycenterbarbershop.nl/wp-content/uploads/2026/07/baard-strak-maken-hals-trimmen-amsterdam.webp'
};

const GENERIC_FALLBACK = 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80';

export function getSafeImageUrl(src: string): string {
  if (!src) return GENERIC_FALLBACK;
  if (src.startsWith('http://') || src.startsWith('https://')) return src;

  const filename = src.split('/').pop() || '';
  if (CDN_BASE_MAP[filename]) {
    return CDN_BASE_MAP[filename];
  }
  return src;
}

export function handleImageFallback(e: React.SyntheticEvent<HTMLImageElement, Event>, customFallback?: string) {
  const target = e.currentTarget;
  const currentSrc = target.src;
  const filename = currentSrc.split('/').pop()?.split('?')[0] || '';

  // If failed on local path, try remote CDN
  if (CDN_BASE_MAP[filename] && !currentSrc.startsWith('https://citycenterbarbershop.nl')) {
    target.src = CDN_BASE_MAP[filename];
    return;
  }

  // Otherwise fallback to curated high-res barber fallback
  target.src = customFallback || GENERIC_FALLBACK;
}
