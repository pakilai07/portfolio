import type { Metadata } from 'next';
import { PortfolioHome } from '@/components/portfolio-home';
export const metadata: Metadata = { title: 'Patrick Lai | Upwork Portfolio', description: 'Web apps, Shopify and automation services. Review Patrick Lai’s work and discuss your project on Upwork.' };
export default function UpworkHome() { return <PortfolioHome upworkOnly/>; }
