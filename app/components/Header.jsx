import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header className='px-4 lg:px-6 h-16 lg:p-3 flex items-center'>
      <Link className='flex items-center justify-center' href='/'>
        <span className='sr-only'>Resumen BOE</span>
        <h1 className='text-2xl font-bold'>Resumen BOE</h1>
      </Link>
      <nav className='ml-auto flex gap-4 sm:gap-6'>
        <Link className='text-sm font-medium hover:underline underline-offset-4' href='#'>
          Features
        </Link>
        <Link className='text-sm font-medium hover:underline underline-offset-4' href='#'>
          Pricing
        </Link>
        <Link className='text-sm font-medium hover:underline underline-offset-4' href='#'>
          About
        </Link>
        <Link className='text-sm font-medium hover:underline underline-offset-4' href='#'>
          Contact
        </Link>
      </nav>
    </header>
  )
}
