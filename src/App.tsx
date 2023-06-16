import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import ProductList from './components/products/ProductsAPI';
import SignUpAPI from './components/SignUpAPI';
import Navigationproduct from './components/navProduct/Navigationproduct';
import PhonecategoryAPI from './components/navProduct/phone/PhonecategoryAPI';
import HeaderAPI from './components/Header/HeaderAPI';
import DescriptionProductAPI from './components/products/descriptionDetal/DescriptionProductAPI';

import Footer from './components/footer/Footer';
import HomepageAPI from './components/homePage/HomepageAPI';


const Dashboard = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className=''>
        <HeaderAPI />
      </div>
      <Outlet />
      <div className="footer mt-auto"><Footer /></div>

    </div>
  )
}

const ProductsBoard = () => {
  return (
    <div>
      <Navigationproduct />
      <Outlet />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="App font-serif">
        <Routes>
          <Route path='/' element={<Dashboard />}>
            <Route path='/homepage/:id' element={<HomepageAPI />} />
            <Route path='/products' element={<ProductsBoard />}>
              <Route path='' element={<ProductList />} />
              <Route path='/products/phone' element={<PhonecategoryAPI categoryProps='smartphones' />} />
              <Route path='/products/nout' element={<PhonecategoryAPI categoryProps='laptops' />} />
              <Route path='/products/home-decoration' element={<PhonecategoryAPI categoryProps='home-decoration' />} />
              <Route path='/products/furniture' element={<PhonecategoryAPI categoryProps='furniture' />} />
              <Route path='/products/:id' element={< DescriptionProductAPI />} />
            </Route>
          </Route>
          <Route path={'/sign-in'} element={<SignUpAPI />} />
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
