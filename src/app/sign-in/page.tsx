'use client'
import React from 'react'
import Link from 'next/link'
import Input from '@atoms/Input/Input'
import { SwitchLabel } from '@atoms/SwitchLabel/SwitchLabel'
import Header from '@molecules/Header/Header'
import { Button } from '@/components/ui/button'
import HeroImageOnBoarding from '../components/HeroImageOnBoarding'

const SignIn = () => {
  return (
    <>
      <Header />
      <main className="min-h-scr  een min-w-screen text-white flex items-center">
        <HeroImageOnBoarding />
        <section className="bg-gradient-to-b from-[#0F123B] via-[#090D2E] to-[#020515] min-h-screen w-full lg:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-[350px] flex flex-col gap-6">
            <div className="space-y-1">
              <h3 className="text-[30px] font-bold">Nice to see you!</h3>
              <p className="text-[#A0AEC0] text-[14px] font-medium">
                Enter your email and password to sign in
              </p>
            </div>
            <div className="w-full space-y-6">
              <Input label="Email" placeholder="Your email..." />
              <Input
                label="Password"
                placeholder="Your password..."
                type="password"
              />
            </div>
            <SwitchLabel label="Remember me" />
            <Button className="text-center text-[12px]" size={'lg'}>
              {' '}
              SIGN IN{' '}
            </Button>

            <p className="text-center text-sm text-[#A0AEC0] font-bold">
              Don&lsquo;t have an account?{' '}
              <Link href="/sign-up" className="text-white hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default SignIn
