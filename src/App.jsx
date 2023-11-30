import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ErrorPage } from './pages/ErrorPage';
// import { useSelector } from 'react-redux';
// import ProductsSettings from './pages/ProductsSettings';
// import BasketPage from './pages/BasketPage';
// import BillPage from './pages/BillPage';
import MainPage from './pages/MainPage';
import BookItemDetail from './components/books/BookItemDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/bookDetail/:bookId' element={<BookItemDetail />} />
          {/* <Route path='/cart' element={<BasketPage />} />
          <Route path='/bills' element={<BillPage />} />
          <Route path='/products' element={<ProductsSettings />} /> */}
          {/* <Route path='*' element={<ErrorPage />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
