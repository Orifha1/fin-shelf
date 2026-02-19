import type { Product } from '../../types/product';
import { currencyFormatter } from '../../utils/formating';
import Button from '../../ui/Button';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <>
      <div className='flex items-center rounded-md border border-solid border-card-outline h-56 w-full md:h-64 cursor-pointer hover:-translate-y-1 transform transition duration-300'>
        <div className='flex flex-col p-3 lg:p-2 w-full'>
          <img
            className='rounded-md h-30 max-h-36 w-full md:h-42 object-cover'
            src='src/assets/earbuds.jpg'
            alt={product.name}
          />
          <div className=''>
            <h3 className='font-semibold capitalize text-black text-lg truncate'>{product.name}</h3>
            <p>
              from <span>{currencyFormatter.format(product.price)}</span>p/m
            </p>
          </div>
          <div className='w-full text-right'>
            <Button>Add to cart</Button>
          </div>
        </div>
      </div>
    </>
  );
}
