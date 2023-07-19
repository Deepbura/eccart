
import './App.css';
import Header from './components/Header';

import Footer from './components/Footer';
import Home from './components/Home';
import Login from './Page/Login';
import Profile from './Page/Profile';
import Register from './Page/Register';
import Productcat from './Page/Productcat';
import Cart from './Page/cart';
import Addproduct from './Page/Addproduct';
import Update from './Page/Update';
import toast, { Toaster } from 'react-hot-toast';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="register" element={<Register />} />
          <Route path="/productcat/:id" element={<Productcat/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/addproduct/:id" element={<Addproduct/>} />
          <Route path="/Update/:id" element={<Update/>} />


        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </>

  );
}

export default App;
