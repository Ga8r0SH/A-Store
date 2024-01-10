import { BrowserRouter, Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import ProductList from './components/products/ProductsAPI';
import SignUpAPI from './components/SignUpAPI';
import Navigationproduct from './components/navProduct/Navigationproduct';
import PhonecategoryAPI from './components/navProduct/phone/PhonecategoryAPI';
import HeaderAPI from './components/Header/HeaderAPI';
import DescriptionProductAPI from './components/products/descriptionDetal/DescriptionProductAPI';
import Footer from './components/footer/Footer';
import HomepageAPI from './components/homePage/HomepageAPI';
import { useEffect } from 'react';


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
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  useEffect(() => {
    !token && navigate('/sign-in')
  }, [token, navigate])
  return (
      <div className="App">
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
  );
}

export default App;
