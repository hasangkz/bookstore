import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage';
import BasketPage from './pages/BasketPage';
import MainPage from './pages/MainPage';
import BookItemDetail from './components/books/BookItemDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<MainPage />} />
          <Route path='/bookDetail/:bookId' element={<BookItemDetail />} />
          <Route path='/cart' element={<BasketPage />} />
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
