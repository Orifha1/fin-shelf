import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function ProductViewHeader() {
  return (
    <header>
      <div className='flex items-center h-16 pl-6 pr-6 sm:justify-between'>
        {/* BACK ARROW  */}
        <div className='flex justify-center items-center h-10 mr-3'>
          <FontAwesomeIcon
            className='cursor-pointer text-header-icon text-base md:text-lg hover:text-header-icon-hover'
            icon={faArrowLeft}
          />
        </div>
        <p className='text-xl md:text-2xl truncate'>Islamic Investment Product</p>
      </div>
    </header>
  );
}
