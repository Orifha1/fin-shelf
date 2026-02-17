import ProductItem from '../features/product/ProductItem';
import Header from './Header';
// import ProductViewHeader from './ProductViewHeader';

export default function AppLayout() {
  return (
    <>
      {/* <ProductViewHeader /> */}

      <Header />
      <main className=' w-full'>
        <ProductItem />
      </main>
    </>
  );
}
