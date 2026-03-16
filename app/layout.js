import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Destiny Global - Premium Dehydrated Powders',
  description: 'Exporting premium Indian dehydrated powders globally. Onion, Beetroot, Moringa and more.',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/logo-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#2E5090" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
