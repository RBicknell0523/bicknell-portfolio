import '@/styles/tailwind.css';
import 'swiper/css';
import 'swiper/css/pagination';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollReveal from '@/components/ScrollReveal';
import ScrollToTop from '@/components/ScrollToTop';
import { Plus_Jakarta_Sans, DM_Sans, IBM_Plex_Mono } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], display: 'swap' });
const dmSans      = DM_Sans({ subsets: ['latin'], display: 'swap', variable: '--font-sans' });
const ibmMono     = IBM_Plex_Mono({ subsets: ['latin'], display: 'swap', weight: ['400', '500'], variable: '--font-mono' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${plusJakarta.className} ${dmSans.variable} ${ibmMono.variable} dark`}>
      <body>
        <div className='isolate'>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:z-[9999] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:rounded-md focus:bg-primary focus:text-primary-foreground focus:font-medium focus:shadow-lg"
          >
            Skip to main content
          </a>

          <Header />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </div>

        <ScrollReveal />
        <ScrollToTop />
      </body>
    </html>
  );
}
