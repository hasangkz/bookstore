import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage';
import BasketPage from './pages/BasketPage';
import MainPage from './pages/MainPage';
import BookItemDetail from './components/books/BookItemDetail';
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';

function App() {
  const basket = useSelector((state) => state.basket);

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/bookDetail/:bookId' element={<BookItemDetail />} />
          <Route path='/cart' element={<BasketPage />} />
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
