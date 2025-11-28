import { Outlet } from 'react-router-dom';
import { Navbar, Footer, ScrollToTop } from '../components';

export default function HomeLayout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}
