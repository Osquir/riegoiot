import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Providers from './Providers';
import Navbar from '../components/navbar';
import Sidebar from '@/components/sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://riego.online'),
  title: 'Riego IoT',
  description:
    'RiegoIOT es una solución innovadora para el control del riego en tu huerto o invernadero. Este sistema utiliza la tecnología de Internet de las Cosas (IoT) para monitorear y controlar el riego de tus plantas de manera eficiente y efectiva.',
  keywords: [
    'Riego IoT',
    'RiegoIOT',
    'Riego',
    'IOT',
    'Huerto',
    'Invernadero',
    'Riego Automatico',
    'Riego Automatico IOT',
    'Riego Automatico Huerto',
    'Riego Automatico Invernadero',
    'Riego Automatico IOT Huerto',
    'Riego Automatico IOT Invernadero',
    'Riego Automatico IOT Huerto Invernadero',
  ],
  authors: [
    {
      name: 'lace04, Osquir',
      url: 'https://github.com/Osquir/riegoiot, https://github.com/lace04',
    },
  ],
  openGraph: {
    title: 'Proyecto RiegoIOT UDEC',
    description:
      'RiegoIOT es una solución innovadora para el control del riego en tu huerto o invernadero. Este sistema utiliza la tecnología de Internet de las Cosas (IoT) para monitorear y controlar el riego de tus plantas de manera eficiente y efectiva.',
    url: 'https://riego.online',
    siteName: 'RiegoIOT',
    locale: 'en_US',
    type: 'website',
    images: [
      'https://th.bing.com/th/id/OIG.vRF11yHC5KeEY1qaqFLc?pid=ImgGn&w=1024&h=1024&rs=1',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@luisace',
    title: 'RiegoIOT',
    description:
      'RiegoIOT es una solución innovadora para el control del riego en tu huerto o invernadero. Este sistema utiliza la tecnología de Internet de las Cosas (IoT) para monitorear y controlar el riego de tus plantas de manera eficiente y efectiva.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <div className='inset-y-0 w-full z-50 hidden md:block'>
            <Navbar />
          </div>
          <div className='md:hidden h-full w-full flex-col'>
            <Sidebar />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
