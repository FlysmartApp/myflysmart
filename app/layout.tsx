import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'MyFlySmart - احجز رحلاتك وفنادقك بأفضل الأسعار',
  description: 'منصة حجز الطيران والفنادق الأذكى في المملكة العربية السعودية',
  keywords: 'حجز طيران، حجز فنادق، سفر، سياحة، السعودية',
  openGraph: {
    title: 'MyFlySmart',
    description: 'احجز رحلاتك وفنادقك بأفضل الأسعار',
    url: 'https://myflysmart.com',
    siteName: 'MyFlySmart',
    locale: 'ar_SA',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-background font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}