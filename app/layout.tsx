import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@/components/analytics';

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.patricklai.workers.dev'),
  title: 'Patrick Lai | Web Developer',
  description: 'Web applications, Shopify development and workflow automation by Patrick Lai. Review project work and discuss your requirements on Upwork.',
  openGraph: { title: 'Patrick Lai | Web Apps And Shopify Development', description: '10+ years of development experience. Web apps, business dashboards, Shopify and workflow automation.' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<Analytics/></body></html>;
}
