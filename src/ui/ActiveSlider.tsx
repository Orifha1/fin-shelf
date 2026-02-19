import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { Product } from '../types/product';

type productListPop = {
  products: Product[];
};

export default function ActiveSlider({ products }: productListPop) {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '40px',
          centerMode: false,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: '20px',
          centerMode: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <div className='relative w-full overflow-hidden'>
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className='px-3 mx-auto'>
              <div className='flex items-center rounded-md border border-solid border-card-outline h-48 w-full md:h-64 cursor-pointer'>
                <div className='flex flex-col p-3 lg:p-2 w-full'>
                  <img
                    className='rounded-md mb-2 h-30 w-full md:h-42 object-cover'
                    src='src/assets/product_image.jpg'
                    alt='Product image'
                  />
                  <div className=''>
                    <h3 className='font-semibold text-black text-lg'>{product.name}</h3>
                    <p>
                      from <span>{product.price}</span>p/m
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
