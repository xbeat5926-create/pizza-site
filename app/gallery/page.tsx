import { PageShell } from '@/components/Layout';

export const metadata = { title: 'Gallery', description: 'Food and restaurant photography placeholders for Panino’s Pizza & Pasta.' };

export default function GalleryPage() {
  return <PageShell><section className="page-hero"><div className="container"><h1 className="serif">Gallery</h1><p className="lead">Replace these elegant placeholders with real pizza, pasta, interior, team, and street-front photography.</p><div className="gallery-grid">{Array.from({ length: 9 }, (_, index) => <div className="photo" key={index} />)}</div></div></section></PageShell>;
}
