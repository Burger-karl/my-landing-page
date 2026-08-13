'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'
import {
  loginSchema,
  registerSchema,
  type LoginValues,
  type RegisterValues,
} from '@/Lib/Validation/authSchema'

type AuthFormProps = {
  mode: 'login' | 'register'
}

const AuthForm = ({ mode }: AuthFormProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const router = useRouter()
  const isLogin = mode === 'login'

  const image = isLogin ? '/images/Login.png' : '/images/Register.png'

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues | RegisterValues>({
    resolver: zodResolver(isLogin ? loginSchema : registerSchema),
  })

  const onSubmit = async (data: LoginValues | RegisterValues) => {
    setSubmitError(null)
    try {
      // TODO: replace with your real API call
      // const res = await fetch(isLogin ? '/api/auth/login' : '/api/auth/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // })
      // if (!res.ok) throw new Error('Request failed')

      if (isLogin) {
        router.push('/')
      } else {
        router.push('/login')
      }
    } catch (err) {
      setSubmitError('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="mx-auto grid min-h-screen w-full max-w-[1440px] lg:grid-cols-2 lg:px-6 xl:px-10">
        {/* Left side image, hidden on mobile */}
        <div className="hidden p-6 lg:flex lg:items-center lg:justify-center lg:p-10">
          <div className="relative h-[85vh] max-h-[760px] w-full overflow-hidden rounded-[32px] shadow-6xl">
            <Image
              src={image}
              alt="Students in a classroom"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <div className="absolute bottom-10 left-8 right-8 text-white">
              {/* <p className="text-3xl font-bold">Lorem Ipsum is simply</p>
              <p className="text-2xl font-normal text-white/80">Lorem Ipsum is simply</p> */}
            </div>  
          </div>
        </div>

        {/* Right side form */}
        <div className="flex items-center justify-center px-6 py-12 lg:px-12 xl:px-20">
          <div className="w-full max-w-md">
            <h1 className="text-center font-heading text-xl font-semibold text-[#1F1F1F]">
              Welcome to lorem..!
            </h1>

            {/* Toggle */}
            <div className="mx-auto mt-6 flex w-full max-w-[280px] rounded-full bg-[#49BBBD]/30 p-1 shadow-inner">
              <Link
                href="/login"
                className={`flex-1 rounded-full py-2.5 text-center text-sm transition-all duration-200 ${
                  isLogin
                    ? 'bg-[#49BBBD] font-semibold text-white shadow-md'
                    : 'font-normal text-white hover:bg-white/10'
                }`}
              >
                Login
              </Link>
              <Link
                href="/register"
                className={`flex-1 rounded-full py-2.5 text-center text-sm transition-all duration-200 ${
                  !isLogin
                    ? 'bg-[#49BBBD] font-semibold text-white shadow-md'
                    : 'font-normal text-white hover:bg-white/10'
                }`}
              >
                Register
              </Link>
            </div>

            <p className="mt-6 text-sm text-[#6B6B6B] md:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex flex-col gap-5" noValidate>
              {!isLogin && (
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#1F1F1F]">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your Email Address"
                    {...register('email' as keyof RegisterValues)}
                    className="w-full rounded-full border border-[#49BBBD] px-6 py-3 text-sm text-[#1F1F1F] shadow-sm placeholder:text-[#9A9A9A] transition-shadow focus:outline-none focus:ring-2 focus:ring-[#49BBBD]/40 focus:shadow-md"
                  />
                  {'email' in errors && errors.email && (
                    <p className="mt-1.5 pl-2 text-xs text-red-500">{errors.email.message}</p>
                  )}
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
                  {...register('username')}
                  className="w-full rounded-full border border-[#49BBBD] px-6 py-3 text-sm text-[#1F1F1F] shadow-sm placeholder:text-[#9A9A9A] transition-shadow focus:outline-none focus:ring-2 focus:ring-[#49BBBD]/40 focus:shadow-md"
                />
                {errors.username && (
                  <p className="mt-1.5 pl-2 text-xs text-red-500">{errors.username.message}</p>
                )}
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
                    {...register('password')}
                    className="w-full rounded-full border border-[#49BBBD] px-6 py-3 pr-12 text-sm text-[#1F1F1F] shadow-sm placeholder:text-[#9A9A9A] transition-shadow focus:outline-none focus:ring-2 focus:ring-[#49BBBD]/40 focus:shadow-md"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1F1F1F]/70 transition-colors hover:text-[#1F1F1F]"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <IoEyeOffOutline className="size-5" /> : <IoEyeOutline className="size-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1.5 pl-2 text-xs text-red-500">{errors.password.message}</p>
                )}
              </div>

              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label htmlFor="remember" className="flex items-center gap-2 text-[#1F1F1F]">
                    <input id="remember" type="checkbox" className="size-4 rounded border-[#49BBBD] accent-[#49BBBD]" />
                    Remember me
                  </label>
                  <a href="#" className="text-[#1F1F1F] transition-colors hover:text-[#49BBBD]">
                    Forgot Password?
                  </a>
                </div>
              )}

              {submitError && (
                <p className="text-center text-sm text-red-500">{submitError}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-[#49BBBD] py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#3fa5a7] disabled:cursor-not-allowed disabled:opacity-60 lg:w-auto lg:self-end lg:px-10"
              >
                {isSubmitting ? 'Please wait...' : isLogin ? 'Login' : 'Register'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm