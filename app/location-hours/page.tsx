import { PageShell } from '@/components/Layout';
import { LocationBlock } from '@/components/Sections';

export const metadata = { title: 'Location & Hours', description: 'Find Panino’s Pizza & Pasta hours, address, phone, directions, and map in Downtown Orlando.' };

export default function LocationHoursPage() {
  return <PageShell><section className="page-hero"><div className="container"><h1 className="serif">Location & Hours</h1><LocationBlock /></div></section></PageShell>;
}
