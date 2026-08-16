import type React from 'react';

// Helper to provide robust image fallback across local & production deployments

const CDN_BASE_MAP: Record<string, string> = {
  'logo-2.webp': 'https://citycenterbarbershop.nl/wp-content/uploads/2026/05/logo-2.webp',
  'cropped-fav-icon.png': 'https://citycenterbarbershop.nl/wp-content/uploads/2026/05/logo-2.webp',
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
  'baard-strak-maken-hals-trimmen-amsterdam.webp': 'https://citycenterbarbershop.nl/wp-content/uploads/2026/07/baard-strak-maken-hals-trimmen-amsterdam.webp',
  'fresha-image-1.jpeg': 'https://images.fresha.com/locations/location-profile-images/665270/5548277/10e5d335-f441-43ff-ae9b-ba73ae088d51-CityCenterBarbershop-NL-Noord-Holland-Amsterdam-Amsterdam-centrum-Fresha.jpg?class=fallback',
  'fresha-image-2.jpeg': 'https://images.fresha.com/locations/location-profile-images/665270/5548278/e12edaa6-be0d-4238-9bf9-7d729b1ec61a-CityCenterBarbershop-NL-Noord-Holland-Amsterdam-Amsterdam-centrum-Fresha.jpg?class=venue-gallery-small&f_width=1200&f_quality=75',
  'fresha-image-3.jpeg': 'https://images.fresha.com/locations/location-profile-images/665270/5548279/e53f0e3e-a880-4289-a69b-3ec7869437aa-CityCenterBarbershop-NL-Noord-Holland-Amsterdam-Amsterdam-centrum-Fresha.jpg?class=venue-gallery-small&f_width=1200&f_quality=75',
  'fresha-image-4.jpeg': 'https://images.fresha.com/locations/location-profile-images/665270/5548280/876a0db3-a962-4686-9631-2806f7118cb3-CityCenterBarbershop-NL-Noord-Holland-Amsterdam-Amsterdam-centrum-Fresha.jpg?class=venue-gallery-small',
  'fresha-image-5.jpeg': 'https://images.fresha.com/locations/location-profile-images/665270/5548281/a55219a3-9405-4a27-ab2d-09fe76b0c466-CityCenterBarbershop-NL-Noord-Holland-Amsterdam-Amsterdam-centrum-Fresha.jpg?class=venue-gallery-small',
  'fresha-image-6.jpeg': 'https://images.fresha.com/locations/location-profile-images/665270/5548282/3e8d2019-9064-4c73-a439-b9fdd68da29a-CityCenterBarbershop-NL-Noord-Holland-Amsterdam-Amsterdam-centrum-Fresha.jpg?class=venue-gallery-small',
  'fresha-image-8.jpeg': 'https://images.fresha.com/partner-portfolios/providers/665270/dedc1dfa-3f3e-45b8-9ee4-1899e383b4ff.jpeg?class=square512&f_width=1200&f_quality=75',
  'fresha-image-9.png': 'https://images.fresha.com/partner-portfolios/providers/665270/7f14f975-0f21-4a6f-975d-6487b8965391.png?class=square512&f_width=1200&f_quality=75',
  'fresha-image-10.jpeg': 'https://images.fresha.com/partner-portfolios/providers/665270/38d456ad-c472-4820-89f7-8510ee8e2631.jpeg?class=square512&f_width=1200&f_quality=75',
  'fresha-image-11.jpeg': 'https://images.fresha.com/partner-portfolios/providers/665270/f459cceb-3134-4278-a3f9-a31d7e3eb0a4.jpeg?class=square512&f_width=1200&f_quality=75',
  'fresha-image-12.jpeg': 'https://images.fresha.com/partner-portfolios/providers/665270/2f93f218-0143-442a-97d4-9de93e12258c.jpeg?class=square512&f_width=1200&f_quality=75',
  'fresha-image-13.png': 'https://images.fresha.com/partner-portfolios/providers/665270/09b224fd-239b-444f-8119-64fed07cd6e1.png?class=square512&f_width=1200&f_quality=75',
  'fresha-image-14.jpeg': 'https://images.fresha.com/professional-profiles/profile/6495395/92d80b8f-d916-4d3f-a42c-3195442bf79d.jpeg?class=square512&f_width=1200&f_quality=75',
  'fresha-image-15.jpeg': 'https://images.fresha.com/professional-profiles/profile/6495395/7bfe5a12-303c-412d-9220-63356a4a97af.jpeg?class=square512&f_width=1200&f_quality=75',
  'fresha-image-16.jpeg': 'https://images.fresha.com/professional-profiles/profile/6495395/77870001-96b4-4b3c-a509-6b4944da04d3.jpeg?class=square512&f_width=1200&f_quality=75'
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
