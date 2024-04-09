'use client'

import { Gluten } from 'next/font/google'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export const gluten = Gluten({ subsets: ['latin'] })

export const NavBar = () => {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-opacity-30 backdrop-blur-lg backdrop-filter">
        <div className="mx-auto w-full px-4 sm:w-11/12 md:w-10/12">
          <div className="flex h-24 items-center justify-between">
            <Link
              href="/"
              className={`text-3xl font-semibold text-[#006AFF] lg:text-4xl ${gluten.className}`}
            >
              LinkStream
            </Link>
            <div className="hidden space-x-6 text-gray-100 lg:flex"></div>
            {/* <ConnectButton /> */}
              <w3m-button/>
          </div>
        </div>
      </nav>
    </>
  )
}
