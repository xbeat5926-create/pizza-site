import { OrderButton } from '@/components/Buttons';
import { PageShell } from '@/components/Layout';
import { Hero, LocationBlock, Section } from '@/components/Sections';

const featuredCategories = ['Pizza', 'Slices', 'Pasta', 'Wings', 'Subs', 'Gelato', 'Lunch Specials'];

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <Section title="Downtown cravings, covered">
        <div className="category-grid">
          {featuredCategories.map((category) => <div className="card category-card" key={category}>{category}</div>)}
        </div>
      </Section>
      <Section title="Built for the downtown lunch rush">
        <div className="card padded">
          <p className="lead">Quick slices, lunch bowls, subs, and office-friendly combos made for courthouse runs, office breaks, students, and meetings.</p>
          <div className="cta-row"><OrderButton label="Order Lunch on Toast" /></div>
        </div>
      </Section>
      <Section title="Late-night pizza after downtown Orlando nights">
        <div className="split">
          <div className="photo" />
          <div className="card padded"><p className="lead">Freshly renovated, fast, welcoming, and ready for post-event slices, pies, wings, and gelato.</p></div>
        </div>
      </Section>
      <Section title="Gallery preview">
        <div className="gallery-grid">{[1, 2, 3].map((item) => <div className="photo" key={item} />)}</div>
      </Section>
      <Section title="What guests say">
        <div className="card review">Review placeholders — connect verified Google reviews after launch. “Best slice downtown.”</div>
      </Section>
      <Section title="Location & hours"><LocationBlock /></Section>
    </PageShell>
  );
}
