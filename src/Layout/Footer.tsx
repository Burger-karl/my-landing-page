'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FOOTER_LINKS = [
  { label: 'Careers', href: '/careers' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
]

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire this up to your newsletter API
    console.log('Subscribing:', email)
    setEmail('')
  }

  return (
    <footer className="bg-[#25243D]">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        {/* Logo + tagline */}
        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Company logo"
              width={52}
              height={52}
              className="h-12 w-12"
            />
            {/* <span className="text-xl font-bold text-white">My App</span> */}
          </div>

          <span className="h-10 w-px bg-white/20" aria-hidden="true" />

          <p className="text-left text-base font-semibold leading-snug text-white">
            Learn Skills
            <br />
            That Matter
          </p>
        </div>

        {/* Newsletter */}
        <div className="mt-16">
          <h3 className="text-2xl font-medium text-slate-300 sm:text-3xl">
            Subscribe to get our Newsletter
          </h3>

          <form
            onSubmit={handleSubscribe}
            className="mx-auto mt-6 flex max-w-md flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="input w-full rounded-full border border-white/20 bg-transparent px-6 text-white placeholder:text-slate-500 focus:border-[#49BBBD] focus:outline-none sm:w-72"
            />
            <button
              type="submit"
              className="btn w-full rounded-full border-none bg-[#49BBBD] px-8 font-semibold text-white shadow-[0_0_30px_rgba(73,187,189,0.35)] hover:bg-[#3fa6a8] sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Links */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-slate-400">
          {FOOTER_LINKS.map((link, index) => (
            <React.Fragment key={link.label}>
              <Link
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
              {index < FOOTER_LINKS.length - 1 && (
                <span className="text-slate-600" aria-hidden="true">
                  |
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Copyright */}
        <p className="mt-4 text-sm text-slate-500">
          © {new Date().getFullYear()} My App. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer