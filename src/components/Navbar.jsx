import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-white hover:bg-gray-800 hover:text-white font-bold rounded-md px-3 py-2'
      : 'text-white hover:bg-gray-800 hover:text-white font-bold rounded-md px-3 py-2';

  return (
    <header>
      <nav className='bg-gray-900 border-b border-red-400'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          <div className='flex h-20 items-center justify-between'>
            {/* Logo Section */}
            <div className='flex items-center'>
              <a
                className='flex flex-shrink-0 items-center mr-4'
                href='/index.html'
              >
                <img className='h-10 w-auto' src={logo} alt='AZFlix.az Logo' />
                <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                  AZFlix.az
                </span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className='md:hidden'>
              <button
                className='inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-800'
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
              >
                <span className='sr-only'>Toggle navigation</span>
                {isMobileMenuOpen ? (
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                ) : (
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 6h16M4 12h16m-7 6h7'
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Navigation Links */}
            <div
              className={`${isMobileMenuOpen ? 'block' : 'hidden'
                } md:block md:ml-auto`}
            >
              <div className='flex flex-col md:flex-row md:space-x-2'>
                <NavLink to='/' className={linkClass} onClick={() => setIsMobileMenuOpen(false)}>
                  Ana Səhifə
                </NavLink>
                <NavLink to='/movies' className={linkClass} onClick={() => setIsMobileMenuOpen(false)}>
                  Filmlər
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
