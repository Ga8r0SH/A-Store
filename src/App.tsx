import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUpAPI from './components/SignUpAPI';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sign-in" element={<SignUpAPI />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
