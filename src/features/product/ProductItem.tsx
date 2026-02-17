import productImage from '@/assets/product_image.jpg';
import { useEffect, useState } from 'react';
import ActiveSlider from '../../ui/ActiveSlider';
import type { Product } from '../../types/product';

export default function ProductItem() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/v1/products');
        const fetchedProducts = await res.json();
        console.log(fetchedProducts);
        setProducts(fetchedProducts);
      } catch {
        console.log('an error');
      }
    }
    fetchProducts();
  }, []);
  return (
    <div className='mt-4 px-6'>
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
            <p
              className={`text-mute mb-6 text-xl sm:w-[80%] ${isExpanded ? '' : 'line-clamp-3 sm:line-clamp-3 lg:line-clamp-4'}`}
            >
              Our comprehensive coverage ensures that your devices are protected against a wide range of mishaps.
            </p>
          </div>
          {!isExpanded && (
            <button onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? 'Read less' : 'Read more'}</button>
          )}
          <hr className='text-hr' />
          {isExpanded && (
            <div className='overflow-hidden transition-all duration-500 ease-in-out'>
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
          )}
          {isExpanded && (
            <button onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? 'Read less' : 'Read more'}</button>
          )}
        </div>
      </div>
      <div>
        <div className='mt-4 mb-6'>
          <h2 className='capitalize font-bold text-2xl'>Related products</h2>
          <ActiveSlider products={products} />
        </div>
        <hr className='text-hr block md:hidden' />
      </div>
    </div>
  );
}
