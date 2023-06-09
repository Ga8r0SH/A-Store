import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ProductList from './components/products/ProductsAPI';
import SignUpAPI from './components/SignUpAPI';
import Navigationproduct from './components/navProduct/Navigationproduct';
import PhonecategoryAPI from './components/navProduct/phone/PhonecategoryAPI';


const Dashboard = () => {
  return (
    <div>
      <Header />
      <Navigationproduct/>
      <Outlet />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Dashboard/>}>
            <Route path='/products' element={<ProductList/>}/>
            <Route path='/phone' element={<PhonecategoryAPI categoryProps='smartphones'/>}/>
            <Route path='/nout' element={<PhonecategoryAPI categoryProps='laptops'/>}/>
            <Route path='/home-decoration' element={<PhonecategoryAPI categoryProps='home-decoration'/>}/>
            <Route path='/furniture' element={<PhonecategoryAPI categoryProps='furniture'/>}/>
          </Route>
          <Route path='sing-in' element={<SignUpAPI/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
