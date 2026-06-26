import { PageShell } from '@/components/Layout';
import { Photo } from '@/components/Photo';
import { photos } from '@/content/photos';

export const metadata = { title: 'Gallery', description: 'Food and restaurant photography placeholders for Panino’s Pizza & Pasta.' };

export default function GalleryPage() {
  return <PageShell><section className="page-hero"><div className="container"><h1 className="serif">Gallery</h1><p className="lead">Original non-copyrighted visual assets are included now. Replace them with real pizza, pasta, interior, team, and street-front photography after a Panino’s photo shoot.</p><div className="photo-grid">{photos.gallery.map((photo) => <Photo src={photo.src} alt={photo.alt} key={photo.src} />)}</div></div></section></PageShell>;
}
