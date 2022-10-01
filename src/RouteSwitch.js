import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import ShopPage from './components/Shop-page';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
