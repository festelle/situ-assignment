"use client"

import { PlusIcon } from '@heroicons/react/20/solid'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
const navigation = [
  { name: 'Inicio', href: '/'},
  { name: 'Profesionales', href: '/profesionales' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const currentPath = usePathname();

  return (
    <nav className='bg-gray-100'>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex md:ml-6 md:flex md:items-center md:space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.href === currentPath ? 'bg-gray-200 text-gray-900' : 'text-gray-900 hover:bg-gray-200 hover:text-black',
                    'rounded-md px-3 py-2 text-sm font-medium my-auto'
                  )}
                  aria-current={item.href === currentPath ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <SignedIn>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a
                type="button"
                href='/editar-horario'
                className="relative inline-flex items-center gap-x-1.5 rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Editar horario
              </a>
            </div>
            <div className="flex md:ml-4 md:flex md:flex-shrink-0 md:items-center">

              <div className="relative ml-3">
                <div className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <UserButton afterSignOutUrl='/' />
                </div>
              </div>
            </div>
          </div>
          </SignedIn>
          <SignedOut>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a
                type="button"
                href='/editar-horario'
                className="relative inline-flex items-center gap-x-1.5 rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Registrarse
              </a>
            </div>
          </div>
          </SignedOut>
        </div>
      </div>
    </nav>
  )
}
