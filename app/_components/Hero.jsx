import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

function Hero() {
  return (
    <section className="bg-gray-50 flex items-center flex-col">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Manage Your Expense
        <strong className="font-extrabold text-primary sm:block"> Save Money </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
        Manage Your expenses and save Money
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link href={'/sign-in'}>
       <Button>Get Started</Button>
       </Link>
      </div>
    </div>
  </div>
  <Image src={'/dashboard.png'}
  alt = 'dashboard'
  width={1000}
  height={700}
  className='-mt-9 rounded-xl border-2'
  />
</section>


  )
}

export default Hero
