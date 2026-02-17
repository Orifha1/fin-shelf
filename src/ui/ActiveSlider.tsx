import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}
type productListPop = {
  products: Product[];
};

// const data: Product[] = [
//   {
//     title: 'product Title',
//     img: 'src/assets/product_image.jpg',
//     price: '350',
//   },
//   {
//     title: 'product Title 2',
//     img: 'src/assets/product_image.jpg',
//     price: '350',
//   },
//   {
//     title: 'product Title 3',
//     img: 'src/assets/product_image.jpg',
//     price: '350',
//   },
//   {
//     title: 'product Title 4',
//     img: 'src/assets/product_image.jpg',
//     price: '350',
//   },
//   {
//     title: 'product Title 5',
//     img: 'src/assets/product_image.jpg',
//     price: '350',
//   },
// ];

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
