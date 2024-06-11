import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Input from '@components/Input/Input'
import { SwitchLabel } from '@components/SwitchLabel/SwitchLabel'
import { Button } from '@components/ui/button'

const Login = () => {
  return (
    <main className="min-h-screen min-w-screen text-white flex items-center">
      <section className="relative lg:w-1/2 lg:min-h-screen hidden lg:items-center lg:justify-center lg:flex-col lg:text-center lg:flex">
        <Image
          src={'/login/login.svg'}
          fill
          className="object-cover -z-10"
          alt="Login hero"
        />
        <h2 className="text-[20px] tracking-[0.4em] font-semibold">
          INSPIRED BY THE FUTURE:
        </h2>
        <h1 className="font-black text-[36px] tracking-[0.2em] gradient-text-black-white">
          THE VISION UI DASHBOARD
        </h1>
      </section>
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
            <Link href="/sign-up" className="text-white">
              Sign up
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default Login
