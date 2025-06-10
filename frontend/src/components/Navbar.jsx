import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../contexts/AuthContext';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Start Quiz', href: '/quiz' }
];

const adminNavigation = [
  { name: 'Admin Dashboard', href: '/admin' },
  { name: 'History', href: '/history' }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <Disclosure as="nav" className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between items-center">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/" className="text-xl font-bold text-indigo-600 hover:text-indigo-500 transition-colors duration-200">
                    QuizApp
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                  {user && (
                    <>
                      {user.role === 'admin' &&
                        adminNavigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 transition-colors duration-200"
                          >
                            {item.name}
                          </Link>
                        ))}
                    </>
                  )}
                </div>
              </div>

              <div className="hidden sm:flex sm:items-center sm:space-x-4">
                {user ? (
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-700">
                      Welcome, {user.username}
                      {user.role === 'admin' && ' (Admin)'}
                    </span>
                    <button
                      onClick={logout}
                      className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-4">
                    <Link
                      to="/login"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors duration-200">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 transition-colors duration-200"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              {user && (
                <>
                  {user.role === 'admin' &&
                    adminNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as={Link}
                        to={item.href}
                        className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 transition-colors duration-200"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                </>
              )}
            </div>

            <div className="border-t border-gray-200 pb-3 pt-4">
              {user ? (
                <div className="space-y-1">
                  <div className="px-4 py-2 text-base font-medium text-gray-500">
                    Welcome, {user.username}
                    {user.role === 'admin' && ' (Admin)'}
                  </div>
                  <Disclosure.Button
                    as="button"
                    onClick={logout}
                    className="block w-full px-4 py-2 text-left text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200"
                  >
                    Sign out
                  </Disclosure.Button>
                </div>
              ) : (
                <div className="space-y-1">
                  <Disclosure.Button
                    as={Link}
                    to="/login"
                    className="block w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-md transition-colors duration-200"
                  >
                    Login
                  </Disclosure.Button>
                  <Disclosure.Button
                    as={Link}
                    to="/register"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200"
                  >
                    Register
                  </Disclosure.Button>
                </div>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}