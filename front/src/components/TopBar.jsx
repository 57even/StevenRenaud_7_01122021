import React from 'react';
import { Fragment } from 'react'
import logo from '../icons/icon-left-font.png'
// import menuLogo from '../icons/clipart1181112.png'
import { ChevronDownIcon, SearchIcon } from '@heroicons/react/solid'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function TopBar() {
  return(
    <header className="fixed inset-x-0 flex justify-between items-center self-center w-full bg-white py-1 px-4">
      <a href="#" className="self-center">
        <img src={logo} alt="Groupomania" className="object-cover max-h-9 max-w-1/4"/>
      </a>
      <div className="p-1 flex items-center w-1/4 border rounded-md focus-within:border-primary focus-within:border-opacity-60 bg-gray-100">
        <SearchIcon className="h-5 px-1"/>
        <input type="search" placeholder="Rechercher" className="w-full p-1 focus:outline-none bg-gray-100"/>
      </div>
      <nav className="flex gap-2 items-center self-center">
        <a href="#" className="border-2 rounded-full p-1 pr-3 pl-3 m-0 border-primary hover:border-primary hover:bg-secondary font-bold text-primary">login</a>
        <a href="#" className="border-2 rounded-full p-1 pr-3 pl-3 m-0 border-primary hover:border-darker bg-primary hover:bg-darker text-white font-bold">Signup</a>

        <Menu as="div" className="relative inline-block">
          <div>
            <Menu.Button className="flex h-full justify-center w-full px-2 py-2 focus:outline-none">
              {/* <img src={menuLogo} alt="menu" className="h-2.5" aria-hidden="true" /> */}
              <ChevronDownIcon className="w-8"/>
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Edit Profile
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Support
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      License
                    </a>
                  )}
                </Menu.Item>
                <form method="POST" action="#">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block w-full text-left px-4 py-2 text-sm'
                        )}
                      >
                        Sign out
                      </button>
                    )}
                  </Menu.Item>
                </form>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </nav>
    </header>
  );
}

export default TopBar;
