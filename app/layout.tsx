import React from "react"
import type { Metadata } from 'next'
import { Bebas_Neue, Poppins } from 'next/font/google'

import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'BIGROSS - Portfolio',
  description: 'Personal portfolio of BIGROSS - Developer & Designer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${poppins.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
