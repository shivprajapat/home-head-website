import type { Metadata } from 'next'
import { Poppins, Urbanist, Rubik } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
})
const urbanist = Urbanist({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist'
})
const rubik = Rubik({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik'
})

export const metadata: Metadata = {
  title: 'Homelead: Comprehensive CRM Solutions for Builders & Property Owners in India, Dubai, and Singapore',
  description:
    'Homelead offers top-notch CRM solutions tailored for builders and property owners. We provide society management, security guard services, and property leads and bookings across India, Dubai, and Singapore. Enhance your property management experience with Homelead.',
  applicationName: 'Portfolio',
  // referrer: 'origin-when-cross-origin',
  keywords: [
    'Homelead CRM',
    'property management CRM',
    'builders CRM',
    'society management',
    'security guard services',
    'property leads',
    'property bookings',
    'India',
    'Dubai',
    'Singapore'
  ],
  authors: [
    {
      name: 'Homelead',
      url: 'https://homelead.com'
    }
  ],
  creator: 'Shiv Kumar Prajapat',
  openGraph: {
    siteName: 'Homelead',
    title: 'Comprehensive CRM Solutions for Builders & Property Owners in India, Dubai, and Singapore',
    description:
      'Homelead offers top-notch CRM solutions tailored for builders and property owners. We provide society management, security guard services, and property leads and bookings across India, Dubai, and Singapore. Enhance your property management experience with Homelead.',
    url: 'https://homelead.com',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://i.postimg.cc/T1c9sZhY/homelead.jpg',
        width: 800,
        height: 600,
        alt: 'twitter'
      },
      {
        url: 'https://i.postimg.cc/T1c9sZhY/homelead.jpg',
        width: 1800,
        height: 1600,
        alt: 'twitter'
      }
    ],
    countryName: 'india'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@userID',
    title: 'Comprehensive CRM Solutions for Builders & Property Owners in India, Dubai, and Singapore',
    description:
      'Homelead offers top-notch CRM solutions tailored for builders and property owners. We provide society management, security guard services, and property leads and bookings across India, Dubai, and Singapore. Enhance your property management experience with Homelead.',
    images: 'https://i.postimg.cc/T1c9sZhY/homelead.jpg'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${urbanist.variable} ${rubik.variable}`}>{children}</body>
    </html>
  )
}
