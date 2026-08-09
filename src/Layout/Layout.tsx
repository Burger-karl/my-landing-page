import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Poppins, Urbanist } from 'next/font/google'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const urbanist = Urbanist({
  variable: '--font-urbanist',
  subsets: ['latin'],
})

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={`${poppins.variable} ${urbanist.variable} min-h-screen flex flex-col bg font-body`}>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
