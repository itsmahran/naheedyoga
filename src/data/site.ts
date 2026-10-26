export const site = {
  name: 'Naheed Yoga Classes',
  tagline: 'Riyadh Holistic Wellness & Yoga for Women and Children',
  description:
    'Naheed Yoga is a soft space for inner calm, flexibility, and healing through movement, stillness, and breath. Group, private, prenatal and kids yoga in Olaya, Riyadh.',
  phone: '+966 55 476 2072',
  whatsapp: '966554762072',
  address: 'Olaya District, Riyadh',
  mapUrl: 'https://maps.app.goo.gl/z93nswAfVZcCoxgs5',
};

/** Elfsight widget IDs (managed in the Elfsight dashboard). */
export const elfsight = {
  googleReviews: '6aa9b399-8257-49c1-aeb4-7a617431f002',
  whatsappChat: '8b78f00d-ff63-4070-b1ea-be1a44e91b9b',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Book Now', href: '/book-now' },
  { label: 'About', href: '/about' },
  { label: 'Classes', href: '/classes' },
  { label: 'Shop', href: '/shop' },
];

/** WhatsApp chat link, optionally with a pre-filled message. */
export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
