import { CallButton } from '@/components/Buttons';
import { PageShell } from '@/components/Layout';

export const metadata = { title: 'Catering', description: 'Future-ready catering page for Downtown Orlando pizza, pasta, salads, and office events.' };

export default function CateringPage() {
  return <PageShell><section className="page-hero"><div className="container card padded"><h1 className="serif">Catering for offices, events, and downtown gatherings</h1><p className="lead">Catering menu coming soon. Call Panino’s for pizza, pasta, wings, salad, and dessert options for groups.</p><div className="cta-row"><CallButton /></div></div></section></PageShell>;
}
