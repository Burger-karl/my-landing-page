'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'

type AuthFormProps = {
  mode: 'login' | 'register'
}

const AuthForm = ({ mode }: AuthFormProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const isLogin = mode === 'login'

  const image = isLogin ? '/images/login.png' : '/images/Register.png'

  return (
    <div className="grid min-h-screen bg-white lg:grid-cols-2">
      {/* Left side image, hidden on mobile */}
      <div className="hidden p-6 lg:flex lg:items-center lg:justify-center lg:p-10">
        <div className="relative h-[90vh] w-full overflow-hidden rounded-[32px]">
          <Image
            src={image}
            alt="Students in a classroom"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          <div className="absolute bottom-10 left-8 right-8 text-white">
            <p className="text-3xl font-bold">Lorem Ipsum is simply</p>
            <p className="text-2xl font-normal text-white/80">Lorem Ipsum is simply</p>
          </div>
        </div>
      </div>

      {/* Right side form */}
      <div className="flex items-center justify-center px-6 py-12 lg:px-16">
        <div className="w-full max-w-md">
          <h1 className="text-center font-heading text-xl font-semibold text-[#1F1F1F]">
            Welcome to lorem..!
          </h1>

          {/* Toggle */}
          <div className="mx-auto mt-6 flex w-full max-w-[280px] rounded-full bg-[#49BBBD]/30 p-1">
            <Link
              href="/login"
              className={`flex-1 rounded-full py-2.5 text-center text-sm transition-colors ${
                isLogin ? 'bg-[#49BBBD] font-semibold text-white' : 'font-normal text-white'
              }`}
            >
              Login
            </Link>
            <Link
              href="/register"
              className={`flex-1 rounded-full py-2.5 text-center text-sm transition-colors ${
                !isLogin ? 'bg-[#49BBBD] font-semibold text-white' : 'font-normal text-white'
              }`}
            >
              Register
            </Link>
          </div>

          <p className="mt-6 text-sm text-[#6B6B6B] md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <form className="mt-6 flex flex-col gap-5">
            {!isLogin && (
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#1F1F1F]">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your Email Address"
                  className="w-full rounded-full border border-[#49BBBD] px-6 py-3 text-sm text-[#1F1F1F] placeholder:text-[#9A9A9A] focus:outline-none focus:ring-2 focus:ring-[#49BBBD]/40"
                />
              </div>
            )}

            <div>
              <label htmlFor="username" className="mb-2 block text-sm font-semibold text-[#1F1F1F]">
                User name
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your User name"
                className="w-full rounded-full border border-[#49BBBD] px-6 py-3 text-sm text-[#1F1F1F] placeholder:text-[#9A9A9A] focus:outline-none focus:ring-2 focus:ring-[#49BBBD]/40"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-semibold text-[#1F1F1F]">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your Password"
                  className="w-full rounded-full border border-[#49BBBD] px-6 py-3 pr-12 text-sm text-[#1F1F1F] placeholder:text-[#9A9A9A] focus:outline-none focus:ring-2 focus:ring-[#49BBBD]/40"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1F1F1F]"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <IoEyeOffOutline className="size-5" /> : <IoEyeOutline className="size-5" />}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label htmlFor="remember" className="flex items-center gap-2 text-[#1F1F1F]">
                  <input id="remember" type="checkbox" className="size-4 rounded border-[#49BBBD]" />
                  Remember me
                </label>
                <a href="#" className="text-[#1F1F1F]">
                  Forgot Password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-full bg-[#49BBBD] py-3 text-sm font-semibold text-white lg:w-auto lg:self-end lg:px-10"
            >
              {isLogin ? 'Login' : 'Register'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AuthForm