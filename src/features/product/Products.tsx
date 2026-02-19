import type { Product } from '../../types/product';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

export default function Products() {
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
    <>
      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
