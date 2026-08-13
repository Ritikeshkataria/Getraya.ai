import './globals.css';
import type { Metadata } from 'next';
import { MarketingNav, Footer } from './components/site';

export const metadata: Metadata = { title:'GetRaya — Your AI Receptionist. Always On.', description:'GetRaya helps local businesses respond instantly, qualify leads, book appointments and follow up 24/7.' };

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body>{children}</body></html>
}
