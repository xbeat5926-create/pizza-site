import { OrderButton } from '@/components/Buttons';
import { PageShell } from '@/components/Layout';

export const metadata = { title: 'Online Ordering', description: 'Order Panino’s Pizza & Pasta online through Toast for pickup or delivery in Downtown Orlando.' };

export default function OrderPage() {
  return <PageShell><section className="page-hero"><div className="container card padded"><h1 className="serif">Order online through Toast</h1><p className="lead">Choose pickup or delivery, customize pizzas and pasta, and check out securely on Toast. The website uses an external-link flow because Toast iframe embedding is not guaranteed.</p><div className="cta-row"><OrderButton label="Start Your Toast Order" /></div></div></section></PageShell>;
}
