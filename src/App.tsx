import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUpAPI from './components/SignUpAPI';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import Navigationproduct from './components/navProduct/Navigationproduct';
import ProductAPI from './components/products/ProductsAPI';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/sign-in" element={<SignUpAPI />} />
          <Route path="/*"
            element={<>
              <Header />
              <Navigationproduct/>
                <Routes>
                  <Route path='/' element={<Homepage />}></Route>
                  <Route path='/products' element={<ProductAPI/>}></Route>
                </Routes>
              </>} />
            </Routes>
          </div>
        </BrowserRouter>
        );
}

        export default App;
