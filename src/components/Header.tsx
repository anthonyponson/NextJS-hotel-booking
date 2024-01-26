'use client'
import { ChevronDown, HomeIcon, Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
function Header() {
  const products = [
    {
      name: 'Book a Stay',
      description: 'Get a better understanding of your traffic',
      href: '#',
      icon: HomeIcon,
    },
  ]
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='bg-[#1414f6]'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>booking</span>
            <h1 className='text-xl font-extrabold text-gray-300 '>Booking</h1>
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            className='-m-2.5 inline-flex items-center justify-center'
            type='button'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Menu size={25} color='white' />
          </button>
        </div>

        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-white'>
              stays
              <ChevronDown size={20} />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-o tanslate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            ></Transition>

            <Popover.Panel className='absolute bg-white -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-gray-900/5'>
              {products.map(pro => (
                <>
                  <h1>{pro.name}</h1>
                </>
              ))}
            </Popover.Panel>
          </Popover>
        </Popover.Group>
      </nav>
    </header>
  )
}

export default Header
