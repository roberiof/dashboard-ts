'use client'
import Link from 'next/link'
import Input from '@atoms/Input/Input'
import { SwitchLabel } from '@atoms/SwitchLabel/SwitchLabel'
import Header from '@molecules/Header/Header'
import { Button } from '@/components/ui/button'
import HeroImageOnBoarding from '../components/HeroImageOnBoarding'

const SignUp = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen min-w-screen text-white flex items-center">
        <HeroImageOnBoarding />
        <section className="flex-col bg-gradient-to-b from-[#0F123B] via-[#090D2E] to-[#020515] min-h-screen w-full lg:w-1/2 flex items-center justify-center space-y-6 pt-10">
          <div className="space-y-1">
            <h3 className="text-[30px] font-bold text-center">Welcome!</h3>
            <p className="text-[#A0AEC0] text-[14px] font-medium max-w-[300px] text-center">
              Use these awesome forms to login or create new account in your
              project for free.
            </p>
          </div>
          <div className="h-fit w-1/2 rounded-[20px] bg-gradient-to-r from-[#582CFF]/20 via-[#FFFFFF]/40 to-[#151515]/10 p-[2px]">
            <div className="bg-[#0F123B] rounded-[20px] p-8 space-y-4">
              <div className="w-full space-y-3">
                <Input label="Name" placeholder="Your full name..." />
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
                SIGN UP{' '}
              </Button>
              <p className="text-center text-sm text-[#A0AEC0] font-bold">
                Don&lsquo;t have an account?{' '}
                <Link href="/sign-up" className="text-white hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default SignUp
