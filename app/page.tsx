import { OrderButton } from '@/components/Buttons';
import { PageShell } from '@/components/Layout';
import { Hero, LocationBlock, Section } from '@/components/Sections';
import { Photo } from '@/components/Photo';
import { photos } from '@/content/photos';

const featuredCategories = [
  { name: 'Pizza', photo: photos.gallery[0] },
  { name: 'Slices', photo: photos.gallery[1] },
  { name: 'Pasta', photo: photos.gallery[2] },
  { name: 'Wings', photo: photos.gallery[3] },
  { name: 'Gelato', photo: photos.gallery[4] },
  { name: 'Lunch Specials', photo: photos.lunch },
];

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <Section title="Downtown cravings, covered">
        <div className="simple-grid">
          {featuredCategories.map((category) => (
            <article className="card food-card" key={category.name}>
              <Photo src={category.photo.src} alt={category.photo.alt} />
              <div className="food-card-body"><h3>{category.name}</h3></div>
            </article>
          ))}
        </div>
      </Section>
      <Section title="Built for the downtown lunch rush">
        <div className="split">
          <Photo src={photos.lunch.src} alt={photos.lunch.alt} />
          <div className="card padded">
            <p className="lead">Quick slices, lunch bowls, subs, and office-friendly combos made for courthouse runs, office breaks, students, and meetings.</p>
            <div className="cta-row"><OrderButton label="Order Lunch on Toast" /></div>
          </div>
        </div>
      </Section>
      <Section title="Late-night pizza after downtown Orlando nights">
        <div className="split">
          <Photo src={photos.lateNight.src} alt={photos.lateNight.alt} />
          <div className="card padded"><p className="lead">Freshly renovated, fast, welcoming, and ready for post-event slices, pies, wings, and gelato.</p></div>
        </div>
      </Section>
      <Section title="Gallery preview">
        <div className="photo-grid">{photos.gallery.slice(0, 3).map((photo) => <Photo key={photo.src} src={photo.src} alt={photo.alt} />)}</div>
      </Section>
      <Section title="What guests say">
        <div className="card review">Review placeholders — connect verified Google reviews after launch. “Best slice downtown.”</div>
      </Section>
      <Section title="Location & hours"><LocationBlock /></Section>
    </PageShell>
  );
}
