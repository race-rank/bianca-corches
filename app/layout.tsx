import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Bianca Corcheș - Creatoare de conținut',
  description:
    'Creatoare de conținut cu 2 ani de experiență pe social media. Adaptabilitate, creativitate și viziune proprie.',
  openGraph: {
    title: 'Bianca Corcheș - Creatoare de conținut',
    description: 'Conținut autentic, adaptat cerințelor tale.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
