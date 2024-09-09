import '@/styles/globals.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import type { Metadata } from 'next'
import { Inter as FontSans, Poppins } from 'next/font/google'

import { CustomCursor } from '@/components/custom-cursor'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontPoppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Dra. Patryne Ibrahim',
  description: 'Veterinária Nutróloga',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body
        className={cn(
          'bg-background h-screen overflow-hidden font-sans antialiased',
          fontSans.variable,
          fontPoppins.variable,
        )}
      >
        <Header />
        <ScrollArea className="flex size-full min-h-screen flex-col justify-between bg-green-950 pt-20">
          {children}
          <Footer />
        </ScrollArea>
        <CustomCursor />
      </body>
    </html>
  )
}
