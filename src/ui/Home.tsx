import productImage from '@/assets/home_page_watch.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { Product } from '../types/product';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Products from '../features/product/Products';
export default function Home() {
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
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id}>
            <div
              className='flex items-center justify-center w-full  h-100 md:h-120 bg-cover bg-center'
              style={{ backgroundImage: `url(${productImage})` }}
            >
              <div className='w-full h-full flex items-center justify-center bg-primary/60 backdrop-blur-none cursor-grab'>
                <div className='flex flex-col items-center md:w-1/3 text-center'>
                  <h2 className='text-3xl text-white  font-bold'>{product.name}</h2>
                  <p className='text-gray-200 mb-6 text-xl line-clamp-3'>{product.description}</p>
                  <div className='flex gap-2'>
                    <NavLink
                      to='/products'
                      className='wrap text-center uppercase bg-linear-to-r from-primary to-secondary border border-primary hover:bg-transparent text-white hover:text-primary font-semibold px-4 py-2 rounded-full inline-block'
                    >
                      View offers
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className='mt-4 mb-6 px-6'>
        <h2 className='capitalize font-bold text-2xl'>Related products</h2>
        <Products />
      </div>
    </>
  );
}
