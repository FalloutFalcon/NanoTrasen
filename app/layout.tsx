import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Solgov',
  description: 'Company website for Solgov',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-mono">{children}</body>
    </html>
  )
}
