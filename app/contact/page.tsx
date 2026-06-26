import { PageShell } from '@/components/Layout';
import { LocationBlock } from '@/components/Sections';
import { site } from '@/content/site';

export const metadata = { title: 'Contact', description: 'Call, visit, or contact Panino’s Pizza & Pasta in Downtown Orlando.' };

export default function ContactPage() {
  return <PageShell><section className="page-hero"><div className="container"><h1 className="serif">Contact Panino’s</h1><p><a className="brand" href={site.phoneHref}>{site.phone}</a></p><LocationBlock /><form className="card padded form-grid" style={{ marginTop: 24 }}><h2 className="serif">Send an inquiry</h2><p className="muted">Frontend-only form placeholder. Connect Formspree, Resend, or a server action before accepting submissions.</p><input className="input" aria-label="Name" placeholder="Name" /><input className="input" aria-label="Email" placeholder="Email" /><textarea className="input" aria-label="Message" placeholder="Message" rows={5} /><button className="btn btn-primary" type="button">Submit placeholder</button></form></div></section></PageShell>;
}
