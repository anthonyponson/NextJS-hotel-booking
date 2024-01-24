'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='bg-[#1414f6]'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>
        <div>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>booking</span>
            <h1 className='text-xl font-extrabold text-gray-300 '>Booking</h1>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
