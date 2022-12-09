import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Error from './pages/Error';
import Home from './pages/Home';
import Register from './pages/Register';
import Test from './pages/Test';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='*' element={<Error />} />
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;