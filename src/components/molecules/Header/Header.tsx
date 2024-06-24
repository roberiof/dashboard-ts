'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './style.css'
import { X } from 'lucide-react'

const Header = () => {
  const navData = [
    {
      image: '/icons/box.svg',
      title: 'DASHBOARD',
      href: '/dashboard',
    },
    {
      image: '/icons/profile.svg',
      title: 'PROFILE',
      href: '/profile',
    },
    {
      image: '/icons/profile.svg',
      title: 'SIGN IN',
      href: '/sign-in',
    },
    {
      image: '/icons/key.svg',
      title: 'SIGN UP',
      href: '/sign-up',
    },
  ]
  const [isOpen, setOpen] = useState(false)

  const containerVariants = {
    open: {
      zIndex: 20,
      opacity: 1,
      y: 1,
      transition: {
        staggerChildren: 1,
        type: 'linear',
        duration: 0.4,
      },
    },
    closed: {
      y: '-100%',
      opacity: 0.8,
      transition: {
        staggerChildren: 1,
        type: 'linear',
        duration: 0.2,
      },
    },
  }

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  }

  const navVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  }

  return (
    <>
      {/* WEB HEADER */}
      <header className="fixed glassmorphism left-1/2 -translate-x-1/2 top-5 px-8 rounded-[20px] h-[70px] w-11/12 max-w-[800px] flex justify-between items-center">
        <h4 className="text-[14px] gradient-text-black-white font-bold tracking-widest">
          VISION UI FREE
        </h4>
        {/* WEB */}
        <nav className="hidden md:flex gap-x-8 text-white text-[10px] font-bold tracking-widest">
          {navData.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:opacity-70 transition-all flex items-center gap-2"
            >
              <Image
                src={item.image}
                width={20}
                height={20}
                alt={'Icon ' + item.title}
              />
              {item.title}
            </Link>
          ))}
        </nav>
        {/* MOBILE */}
        <button
          className="rounded-lg w-[50px] h-[50px] hover:scale-[103%] md:hidden flex justify-center items-center flex-col gap-[5px] bg-white/10"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="w-1/2 h-[2px] bg-white block"></span>
          <span className="w-1/2 h-[2px] bg-white block"></span>
          <span className="w-1/2 h-[2px] bg-white block"></span>
        </button>
      </header>

      {/* MOBILE HEADER */}
      <motion.main
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={containerVariants}
        className={
          'h-screen w-full flex justify-center absolute left-0 top-0 items-center text-center bg-black'
        }
      >
        <button onClick={() => setOpen((prev) => !prev)}>
          <X className="absolute right-10 top-10 text-white" size={40} />
        </button>
        <motion.nav
          variants={navVariants}
          className="flex flex-col gap-y-8 text-white text-lg items-center font-bold tracking-widest"
        >
          {navData.map((item) => (
            <motion.div variants={itemVariants} key={item.href}>
              <Link
                href={item.href}
                className="hover:opacity-70 transition-all flex items-center gap-2"
              >
                <Image
                  src={item.image}
                  width={30}
                  height={30}
                  alt={'Icon ' + item.title}
                />
                {item.title}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      </motion.main>
    </>
  )
}

export default Header
