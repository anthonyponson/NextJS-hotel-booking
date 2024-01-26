'use client'
import {
  ChevronDown,
  DiameterIcon,
  GitCommitVerticalIcon,
  HomeIcon,
  Menu,
  Phone,
  Plane,
} from 'lucide-react'
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
    {
      name: 'Book a Stay',
      description: 'Get a better understanding of your traffic',
      href: '#',
      icon: Plane,
    },
    {
      name: 'Book a Stay',
      description: 'Get a better understanding of your traffic',
      href: '#',
      icon: GitCommitVerticalIcon,
    },
  ]

  const callTOAction = [
    {
      name: 'See Demo Booking',
      icon: DiameterIcon,
    },
    {
      name: 'contact',
      icon: Phone,
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
            >
              <Popover.Panel className='absolute bg-white -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-gray-900/5'>
                <div className='p-4'>
                  {products.map(pro => (
                    <div className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 '>
                      <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200'>
                        <pro.icon className='h-6 w-6 text-blue-700' />
                      </div>
                      <div className='flex-auto'>
                        <a
                          href={pro.href}
                          className='block font-semibold text-[#013b94]'
                        >
                          {pro.name}
                          <span className='absolute inset-0' />
                        </a>
                        <p className='mt-1 text-[#013B94]'>{pro.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
                  {callTOAction.map(item => (
                    <a
                      key={item.name}
                      href='#'
                      className='flex items-center justify-center hover:bg-gray-100 gap-5 py-3'
                    >
                      <item.icon className='h-6 w-6 flex-none text-[#013b94]' />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
      </nav>
    </header>
  )
}

export default Header
