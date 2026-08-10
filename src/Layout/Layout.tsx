import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import localFont from 'next/font/local'

const poppins = localFont({
  src: [
    { path: '../fonts/Poppins-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../fonts/Poppins-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../fonts/Poppins-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../fonts/Poppins-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-heading',
  display: 'swap',
})

const urbanist = localFont({
  src: [
    { path: '../fonts/Urbanist-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../fonts/Urbanist-Medium.ttf', weight: '500', style: 'normal' },
  ],
  variable: '--font-body',
  display: 'swap',
})

type LayoutProps = {
  children: React.ReactNode
  hideNavbar?: boolean
}

const Layout = ({ children, hideNavbar }: LayoutProps) => {
  return (
    <div className={`${poppins.variable} ${urbanist.variable} min-h-screen flex flex-col bg-white font-body`}>
      {!hideNavbar && <Navbar />}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout