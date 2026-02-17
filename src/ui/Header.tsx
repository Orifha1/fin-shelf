import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';

export default function ProductViewHeader() {
  return (
    <header className='sticky top-0 z-50 border-b-gray-400 shadow-sm bg-white'>
      <div className='flex justify-between items-center px-6 py-4 '>
        <a href='index.html' className='flex items-center cursor-pointer'>
          <div>
            <img src={logo} alt='Logo' className='h-14 w-auto mr-4' />
          </div>
        </a>
        {/* MOBILE: Hamburger menu */}
        <div className='flex lg:hidden'>
          <button className='focus:outline-none cursor-pointer'>
            <FontAwesomeIcon className='focus:outline-none cursor-pointer' icon={faBars} />
          </button>
        </div>
        {/* Center Nav */}
        <nav className='hidden lg:flex md:grow justify-center'>
          <ul className='flex justify-center space-x-4'>
            <li>
              <a href='' className='hover:text-primary font-semibold'>
                Home
              </a>
            </li>
            <li>
              <a href='' className='hover:hover:text-primary font-semibold'>
                Subscriptions
              </a>
            </li>
            <li>
              <a href='' className='hover:hover:text-primary font-semibold'>
                Cart
              </a>
            </li>
            <li>
              <a href='' className='hover:hover:text-primary font-semibold'>
                Checkout
              </a>
            </li>
          </ul>
        </nav>

        <div className='hidden lg:flex justify-center items-center space-x-4 relative'>
          <a
            href=''
            className='bg-primary border border-primary hover:bg-transparent text-white hover:text-primary font-semibold px-4 py-2 rounded-full inline-block'
          >
            Register
          </a>
          <a
            href=''
            className='bg-primary border border-primary hover:bg-transparent text-white hover:text-primary font-semibold px-4 py-2 rounded-full inline-block'
          >
            Login
          </a>

          <div className='relative text-center'>
            <a href=''>
              <FontAwesomeIcon
                className='cursor-pointer text-header-icon text-base md:text-2xl hover:text-header-icon-hover'
                icon={faCartArrowDown}
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
