import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NanoTrasen',
  description: 'Company website for NanoTrasen',
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
