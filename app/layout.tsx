import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pakilai | Web developer',
  description: 'Web development portfolio of Pakilai. View project case studies and get in touch through Upwork.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
