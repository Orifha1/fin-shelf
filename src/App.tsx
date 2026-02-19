import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './features/product/Products';
import AppLayout from './ui/AppLayout';
import Error from './ui/error';
import Home from './ui/Home';
import ProductItem from './features/product/ProductItem';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/products/:productId',
        element: <ProductItem />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
