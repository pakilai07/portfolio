import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pakilai — Developer portfolio',
  description: 'Selected development work, technical skills, and a straightforward way to work together.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
