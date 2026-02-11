import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header>
      <div className='flex items-center bg-red-500 h-16 pl-6 pr-6 md:justify-between '>
        {/* BACK ARROW  */}
        <div className='flex justify-center items-center h-10 mr-3'>
          <FontAwesomeIcon className='cursor-pointer text-base' icon={faArrowLeft} />
        </div>
        <p className='text-xl'>Islamic Investment Product</p>
      </div>
    </header>
  );
}
