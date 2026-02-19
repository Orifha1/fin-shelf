import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className='sticky top-0 z-50 border-b-gray-400 shadow-sm bg-white'>
        <div className='flex justify-between items-center px-6 py-4 '>
          <NavLink to='/' className='flex items-center cursor-pointer'>
            <div>
              <img src={logo} alt='Logo' className='h-14 w-auto mr-4' />
            </div>
          </NavLink>
          {/* MOBILE: Hamburger menu */}
          <div className='flex lg:hidden'>
            <button onClick={() => setIsOpen(!isOpen)} className='focus:outline-none cursor-pointer'>
              <FontAwesomeIcon className='focus:outline-none cursor-pointer' icon={faBars} />
            </button>
          </div>
          {/* Center Nav */}
          <nav className='hidden lg:flex md:grow justify-center'>
            <ul className='flex justify-center space-x-4'>
              <li>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    `hover:text-primary hover:underline font-semibold ${isActive ? 'underline' : ''} `
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/products'
                  className={({ isActive }) =>
                    `hover:text-primary hover:underline font-semibold ${isActive ? 'underline' : ''} `
                  }
                >
                  Subscriptions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    `hover:text-primary hover:underline font-semibold ${isActive ? 'underline' : ''} `
                  }
                >
                  Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    `hover:text-primary hover:underline font-semibold ${isActive ? 'underline' : ''} `
                  }
                >
                  Checkout
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className='hidden lg:flex justify-center items-center space-x-4 relative'>
            <NavLink
              to='/'
              className='bg-primary border border-primary hover:bg-transparent text-white hover:text-primary font-semibold px-4 py-2 rounded-full inline-block'
            >
              Register
            </NavLink>
            <NavLink
              to='/'
              className='bg-primary border border-primary hover:bg-transparent text-white hover:text-primary font-semibold px-4 py-2 rounded-full inline-block'
            >
              Login
            </NavLink>
            <div className='relative group text-center'>
              <NavLink to='/'>
                <FontAwesomeIcon
                  className='cursor-pointer text-header-icon text-base md:text-2xl hover:text-header-icon-hover'
                  icon={faCartArrowDown}
                />
              </NavLink>
              {/* CART DROPDOWN */}
              <div className='absolute right-0 mt-6 w-80 bg-white shadow-lg p-4 rounded hidden group-hover:block'>
                <div className='space-y-4'>
                  <div className='flex items-center justify-between pb-4 border-b border-gray-line'>
                    <div className='flex items-center'>
                      <img src={logo} alt='Product' className='h-12 w-12 object-cover rounded mr-2' />
                      <div>
                        <p className='font-semibold'>Summer black dress</p>
                        <p className='text-sm'>Quantity: 1</p>
                      </div>
                    </div>
                    <p className='font-semibold'>$25.00</p>
                  </div>
                </div>
                <NavLink
                  to='/'
                  className='block text-center mt-4 border border-primary bg-primary hover:bg-transparent text-white hover:text-primary py-2 rounded-full font-semibold'
                >
                  Go to Cart
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE NAV */}
      <nav className={`flex flex-col items-center space-y-8 ${isOpen ? 'block' : 'hidden'}`}>
        <ul className='w-full'>
          <li>
            <NavLink to='/' className='hover:text-primary font-bold block py-2'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='' className='hover:text-primary font-bold block py-2'>
              Subscriptions
            </NavLink>
          </li>
          <li>
            <NavLink to='/' className='hover:text-primary font-bold block py-2'>
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink to='/' className='hover:text-primary font-bold block py-2'>
              Checkout
            </NavLink>
          </li>
        </ul>
        <div className='flex flex-col mt-6 space-y-2 items-center'>
          <NavLink
            to='/'
            className='bg-primary hover:bg-transparent text-white hover:text-primary border border-primary font-semibold px-4 py-2 rounded-full flex items-center justify-center min-w-27.5'
          >
            Register
          </NavLink>
          <NavLink
            to='/'
            className='bg-primary hover:bg-transparent text-white hover:text-primary border border-primary font-semibold px-4 py-2 rounded-full flex items-center justify-center min-w-27.5'
          >
            Login
          </NavLink>
          <NavLink
            to='/'
            className='bg-primary hover:bg-transparent text-white hover:text-primary border border-primary font-semibold px-4 py-2 rounded-full flex items-center justify-center min-w-27.5'
          >
            Cart -&nbsp;<span>5</span>&nbsp;items
          </NavLink>
        </div>
      </nav>
    </>
  );
}
