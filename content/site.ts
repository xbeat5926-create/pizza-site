export const site = {
  name: "Panino's Pizza & Pasta",
  tagline: 'New York-Style Pizza in the Heart of Downtown Orlando',
  description: "Established New York-style pizza and Italian-American restaurant serving Downtown Orlando since 2008, recently renovated for a modern dine-in, takeout, lunch, and late-night experience.",
  phone: '(407) 555-0198',
  phoneHref: 'tel:+14075550198',
  address: { street: '123 E Central Blvd', city: 'Orlando', region: 'FL', postalCode: '32801', country: 'US' },
  hours: ['Mon–Thu 11:00 AM–11:00 PM','Fri–Sat 11:00 AM–2:00 AM','Sun 12:00 PM–10:00 PM'],
  toastUrl: process.env.NEXT_PUBLIC_TOAST_ORDER_URL || 'https://www.toasttab.com/paninos-pizza-pasta-placeholder/order', // Replace with the real Toast ordering URL in .env.local or hosting env vars.
  directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Panino%27s%20Pizza%20%26%20Pasta%20Downtown%20Orlando%20FL',
  socials: { instagram: 'https://instagram.com/paninosplaceholder', facebook: 'https://facebook.com/paninosplaceholder' },
  geo: { latitude: 28.5421, longitude: -81.3770 },
  gaId: process.env.NEXT_PUBLIC_GA_ID,
  gtmId: process.env.NEXT_PUBLIC_GTM_ID,
};
export const nap = `${site.name} · ${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode} · ${site.phone}`;
