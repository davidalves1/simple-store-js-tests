import { CartContextProvider } from '@/context/cart';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Awesome Store',
  description: 'The simplest and best store',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <CartContextProvider>{children}</CartContextProvider>
      </body>
    </html>
  );
}
