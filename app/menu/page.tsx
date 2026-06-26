import type { Metadata } from 'next';
import { OrderButton } from '@/components/Buttons';
import { PageShell } from '@/components/Layout';
import { menuCategories } from '@/content/menu';

export const metadata: Metadata = {
  title: 'Menu',
  description: 'Browse pizza, slices, pasta, wings, subs, gelato, drinks, and lunch specials in Downtown Orlando.',
};

export default function MenuPage() {
  return (
    <PageShell>
      <section className="page-hero">
        <div className="container">
          <h1 className="serif">Menu</h1>
          <p className="lead">Editable placeholder menu for Panino’s Pizza & Pasta. Final prices and availability should be matched to Toast before launch.</p>
          <nav className="menu-nav" aria-label="Menu categories">
            {menuCategories.map((category) => <a href={`#${category.slug}`} key={category.slug}>{category.name}</a>)}
          </nav>
          <div className="menu-list">
            {menuCategories.map((category) => (
              <section id={category.slug} key={category.slug}>
                <h2 className="section-title serif">{category.name}</h2>
                <p className="muted">{category.intro}</p>
                <div className="menu-items">
                  {category.items.map((item) => (
                    <article className="card menu-item" key={item.name}>
                      <div className="menu-item-head"><h3>{item.name} {item.popular ? <span aria-label="Popular">★</span> : null}</h3><strong>{item.price}</strong></div>
                      <p className="muted">{item.description}</p>
                      <OrderButton label="Order this on Toast" />
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
