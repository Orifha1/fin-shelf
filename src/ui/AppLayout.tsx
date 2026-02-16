import ProductItem from '../features/product/ProductItem';
import Header from './Header';

export default function AppLayout() {
  return (
    <>
      <Header />
      <main className='mt-4 px-6 w-full'>
        <ProductItem />
      </main>
    </>
  );
}
