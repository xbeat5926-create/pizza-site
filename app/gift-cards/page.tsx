import { OrderButton } from '@/components/Buttons';
import { PageShell } from '@/components/Layout';

export const metadata = { title: 'Gift Cards', description: 'Future-ready Panino’s Pizza & Pasta gift card page.' };

export default function GiftCardsPage() {
  return <PageShell><section className="page-hero"><div className="container card padded"><h1 className="serif">Gift cards</h1><p className="lead">Digital and physical gift card details can be connected here when available through Toast or another provider.</p><div className="cta-row"><OrderButton label="Check Toast for Gift Cards" /></div></div></section></PageShell>;
}
