import type { Metadata } from 'next';
import '../../styles/main.scss';
import Header from './components/header';
import Footer from './components/footer';

export const metadata: Metadata = {
  title: 'Processed Photos',
  description: 'A Photography Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
