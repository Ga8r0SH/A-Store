import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import ProductList from './components/products/ProductsAPI';
import SignUpAPI from './components/SignUpAPI';
import Navigationproduct from './components/navProduct/Navigationproduct';
import PhonecategoryAPI from './components/navProduct/phone/PhonecategoryAPI';
import HeaderAPI from './components/Header/HeaderAPI';

import DescriptionProductAPI from './components/products/descriptionDetal/DescriptionProductAPI';
import Homepage from './components/homePage/Homepage';
import Footer from './components/footer/Footer';


const Dashboard = () => {
  return (
    <div>
      <HeaderAPI/>
      <Outlet />
      <Footer/>
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
          <Route path='/aboutUs' element={<Homepage/>}/>
            <Route path='/products' element={<ProductsBoard />}>
              <Route path='' element={<ProductList/>}/>
              <Route path='/products/phone' element={<PhonecategoryAPI categoryProps='smartphones' />} />
              <Route path='/products/nout' element={<PhonecategoryAPI categoryProps='laptops' />} />
              <Route path='/products/home-decoration' element={<PhonecategoryAPI categoryProps='home-decoration' />} />
              <Route path='/products/furniture' element={<PhonecategoryAPI categoryProps='furniture' />} />
              <Route path='/products/:id' element={< DescriptionProductAPI/>} />
            </Route>
          </Route>
          <Route path='sing-in' element={<SignUpAPI />} />
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
