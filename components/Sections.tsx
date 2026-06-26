import type { ReactNode } from 'react';
import { site } from '@/content/site';
import { CallButton, DirectionsButton, OrderButton } from './Buttons';

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Downtown Orlando · Since 2008</p>
          <h1 className="serif">New York-Style Pizza in the Heart of Downtown Orlando</h1>
          <p className="lead">Panino’s Pizza & Pasta serves foldable slices, classic pies, pasta, wings, subs, gelato, lunch specials, and late-night favorites in a freshly renovated restaurant.</p>
          <div className="cta-row"><OrderButton /><CallButton /><DirectionsButton /></div>
        </div>
        <div className="photo" role="img" aria-label="Panino's pizza photography placeholder" />
      </div>
    </section>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return <section className="section"><div className="container"><h2 className="section-title serif">{title}</h2>{children}</div></section>;
}

export function LocationBlock() {
  return (
    <div className="location-grid">
      <div className="card padded">
        <h3 className="serif">Find us downtown</h3>
        <p className="muted">{site.address.street}, {site.address.city}, {site.address.region} {site.address.postalCode}</p>
        <p><a className="brand" href={site.phoneHref}>{site.phone}</a></p>
        <div className="cta-row"><DirectionsButton /><OrderButton label="Order on Toast" /></div>
      </div>
      <div className="card map-placeholder">Google Maps embed placeholder — replace with verified Google Business Profile map iframe.</div>
    </div>
  );
}
