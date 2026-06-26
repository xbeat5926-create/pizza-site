import type { ReactNode } from 'react';
import Link from 'next/link';
import { site } from '@/content/site';
import { CallButton, OrderButton } from './Buttons';

const navItems = [
  ['/', 'Home'],
  ['/menu', 'Menu'],
  ['/order', 'Order'],
  ['/lunch-specials', 'Lunch'],
  ['/about', 'About'],
  ['/location-hours', 'Location'],
  ['/contact', 'Contact'],
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand serif">Panino’s</Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.slice(1).map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <div className="header-actions"><CallButton /><OrderButton /></div>
        <a className="btn btn-primary mobile-order" href={site.toastUrl} target="_blank" rel="noopener noreferrer">Order</a>
      </div>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        {navItems.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h2 className="serif">{site.name}</h2>
          <p>Downtown Orlando NY-style pizza, pasta, slices, lunch specials, and late-night comfort since 2008.</p>
        </div>
        <div><h3>Visit</h3><p>{site.address.street}<br />{site.address.city}, {site.address.region} {site.address.postalCode}</p></div>
        <div><h3>Hours</h3>{site.hours.map((hour) => <p key={hour}>{hour}</p>)}</div>
        <div><h3>Order & Follow</h3><p><a href={site.phoneHref}>{site.phone}</a></p><p><a href={site.toastUrl}>Toast Online Ordering</a></p><p>Instagram / Facebook placeholders</p></div>
      </div>
    </footer>
  );
}

export function StickyMobileBar() {
  return <div className="sticky-mobile-bar"><CallButton /><OrderButton /></div>;
}

export function PageShell({ children }: { children: ReactNode }) {
  return <><Header /><main>{children}</main><Footer /><StickyMobileBar /></>;
}
