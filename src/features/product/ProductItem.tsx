import productImage from '@/assets/product_image.jpg';

export default function ProductItem() {
  return (
    <div>
      <div className='w-full flex flex-col sm:flex-row sm:gap-14'>
        <img
          src={productImage}
          alt='Product image'
          className='w-full object-cover rounded-md mb-6 sm:w-2/4 md:w-2/4 lg:w-full'
        />
        <div className='w-full'>
          <div className='mt-4 sm:mt-0 '>
            {/* TODO: Create a component for this. */}
            <h1 className='capitalize font-bold text-[28px]'>Islamic investment Product</h1>
            <p className='text-mute mb-6 text-xl'>
              Our comprehensive coverage ensures that your devices are protected against a wide range of mishaps.
            </p>
          </div>
          <hr className='text-hr' />
          <div>
            <div className='mt-4 mb-6'>
              <h2 className='capitalize font-bold text-2xl'>Benefits</h2>
              <ul className='list-disc text-mute ml-6'>
                <li>Theft and loss recovery</li>
                <li>Comprehensive coverage</li>
                <li>Hardware malfunction coverage</li>
              </ul>
            </div>
            <hr className='text-hr' />
            <div className='mt-4 mb-6'>
              <h2 className='capitalize font-bold text-2xl'>Requirement</h2>
              <ul className='list-disc text-mute ml-6'>
                <li>Theft and loss recovery</li>
                <li>Comprehensive coverage</li>
                <li>Hardware malfunction coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='mt-4 mb-6'>
          <h2 className='capitalize font-bold text-2xl'>Related products</h2>
          <p></p>
        </div>
        <hr className='text-hr block md:hidden' />
      </div>
    </div>
  );
}
