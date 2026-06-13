import '@/styles/animate.css';
import '@/styles/prism-vsc-dark-plus.css';
import '@/styles/star.css';
import '@/styles/tailwind.css';
import 'swiper/css';
import 'swiper/css/pagination';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollReveal from '@/components/ScrollReveal';
import ScrollToTop from '@/components/ScrollToTop';
import { Plus_Jakarta_Sans, DM_Sans, IBM_Plex_Mono } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';

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
          <NextTopLoader
            color='#c4967a'
            crawlSpeed={300}
            showSpinner={false}
            shadow='none'
          />

          <Header />
          {children}
          <Footer />
        </div>

        <ScrollReveal />
        <ScrollToTop />
      </body>
    </html>
  );
}
