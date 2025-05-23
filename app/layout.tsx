import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'QR Cod Generator',
  description: 'utility tool project',
  generator: 'ba1a.xo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
