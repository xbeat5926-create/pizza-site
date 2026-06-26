import { PageShell } from '@/components/Layout';
import { Photo } from '@/components/Photo';
import { photos } from '@/content/photos';

export const metadata = { title: 'About Us', description: 'Learn about Panino’s Pizza & Pasta, serving Downtown Orlando since 2008.' };

export default function AboutPage() {
  return <PageShell><section className="page-hero"><div className="container split"><div><h1 className="serif">A Downtown Orlando pizza tradition, refreshed.</h1><p className="lead">Since 2008, Panino’s Pizza & Pasta has been a neighborhood stop for New York-style slices, Italian-American comfort food, and late-night downtown cravings. The renovated space brings a cleaner, warmer, more premium experience while keeping the food approachable and authentic.</p></div><Photo src={photos.interior.src} alt={photos.interior.alt} /></div></section></PageShell>;
}
