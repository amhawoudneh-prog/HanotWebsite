import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata = {
  title: 'Hanot Restaurant | Kitchen & Butchery',
  description: 'Experience the finest dining in Addis Ababa at Hanot Kitchen (Piassa) and Hanot Butchery (Summit). Premium cuisine, elegant atmosphere.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
