import Header from './Header';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <>
      <Header />
      <div className='overflow-x-hidden'>
        <Outlet />
      </div>
    </>
  );
}
