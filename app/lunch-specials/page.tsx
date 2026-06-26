import { OrderButton } from '@/components/Buttons';
import { PageShell } from '@/components/Layout';
import { menuCategories } from '@/content/menu';

export const metadata = { title: 'Lunch Specials Downtown Orlando', description: 'Quick pizza slices, subs, salads, and pasta lunch specials for Downtown Orlando.' };

export default function LunchPage() {
  const lunch = menuCategories.find((category) => category.slug === 'lunch-specials')!;
  return <PageShell><section className="page-hero"><div className="container"><h1 className="serif">Lunch specials for Downtown Orlando</h1><p className="lead">Fast, satisfying specials for office workers, students, courthouse visitors, and downtown meetings.</p><div className="simple-grid">{lunch.items.map((item) => <div className="card padded" key={item.name}><h2>{item.name}</h2><p className="muted">{item.description}</p><strong>{item.price}</strong></div>)}</div><div className="cta-row"><OrderButton label="Order Lunch" /></div></div></section></PageShell>;
}
