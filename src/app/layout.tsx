import type { Metadata } from 'next'
import { Plus_Jakarta_Sans as PlusJakartaSans } from 'next/font/google'
import './globals.css'

const inter = PlusJakartaSans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vision App - The dashboard platform',
  description: 'A dashboard platform ideal for you',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
