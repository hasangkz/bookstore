import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { SlBasket } from 'react-icons/sl';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from '../header/Header';
import { addBook } from '../../redux/features/BasketSlice';
import useFetch from '../../hooks/useFetch';
import ErrorLayout from '../layout/ErrorLayout';
import LoadingLayout from '../layout/LoadingLayout';
import '../../style/GeneralStyle.css';

const BookItemDetail = () => {
  let API_KEY = process.env.REACT_APP_API_KEY;
  let { bookId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const apiUrl = `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${API_KEY}`;
  const { data: bookData, loading, error } = useFetch(apiUrl);
  let isForSale = bookData?.saleInfo?.saleability == 'FOR_SALE';
  const [amount, setAmount] = useState(0);

  if (error) {
    return <ErrorLayout />;
  }

  if (loading) {
    return <LoadingLayout />;
  }

  const handleNavigate = () => {
    navigate('/');
  };

  const handleIncreaseAmount = () => {
    if (isForSale) {
      setAmount(amount + 1);
    }
  };

  const handleReducerAmount = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  const handleBasket = () => {
    if (amount < 1) {
      message.error('Lütfen en az 1 adet ürün seçiniz.');
      return;
    }
    const data = {
      id: bookData?.id,
      title: bookData?.volumeInfo?.title,
      price: bookData?.saleInfo?.listPrice?.amount,
      img:
        bookData?.volumeInfo?.imageLinks?.thumbnail ||
        bookData?.volumeInfo?.imageLinks?.large,
      quantity: amount,
    };
    dispatch(addBook(data));
    message.success('Ürün sepete eklendi.');
  };

  return (
    <>
      <Header />
      <div className='min-h-screen flex flex-col center align-middle justify-center '>
        <div className='center text-center'>
          <button
            className='rounded-lg text-white bg-orange-400 p-2 mb-10 goBack'
            onClick={handleNavigate}
          >
            Geri Dön
          </button>
        </div>
        {bookData && (
          <div className='align-middle flex items-center justify-center gap-28'>
            <div>
              <img
                className='w-full h-96 object-cover'
                src={
                  bookData?.volumeInfo?.imageLinks?.thumbnail ||
                  bookData?.volumeInfo?.imageLinks?.large
                }
                alt='image'
              />
            </div>
            <div className='flex flex-col gap-8 w-1/3 p-5'>
              <div className='grid gap-10 center text-center'>
                <div className='product-detail-value'>
                  <span className='text-3xl'>
                    {bookData?.volumeInfo?.title}
                  </span>
                </div>

                {bookData?.volumeInfo?.categories && (
                  <div className='product-detail-value'>
                    <span className='text-2xl'>
                      {bookData?.volumeInfo?.categories[0]}
                    </span>
                  </div>
                )}

                <div className='product-detail-value'>
                  <span> {bookData?.volumeInfo?.authors[0]}</span>
                </div>
                <div className='product-detail-value'>
                  <span> {bookData?.volumeInfo?.pageCount} sayfa</span>
                </div>
                <div className='product-detail-value  '>
                  {isForSale ? (
                    <div>
                      <div>
                        <span className='product-detail-value-green'>
                          Stok Var
                        </span>
                      </div>
                      <div>
                        <span> {bookData?.saleInfo?.listPrice?.amount} ₺</span>
                      </div>
                    </div>
                  ) : (
                    <span className='product-detail-value-red'>Stok Yok</span>
                  )}
                </div>
              </div>
              <div className='flex text-center items-center justify-around border-solid border-2 rounded-lg border-orange-400 hover:border-dotted '>
                <div className='flex text-center items-center p-5 gap-5'>
                  <div className='cursor-pointer' onClick={handleReducerAmount}>
                    <FaMinus />
                  </div>
                  <div className='text-2xl p-1 border-b-2 border-gray-500'>
                    {amount}
                  </div>
                  <div
                    className='cursor-pointer'
                    onClick={handleIncreaseAmount}
                  >
                    <FaPlus />
                  </div>
                </div>
                {isForSale && (
                  <div
                    onClick={handleBasket}
                    className={
                      'flex text-center items-center gap-1 product-detail-basket bg-orange-500  p-4 rounded-md'
                    }
                  >
                    <SlBasket size={20} className='mb-1' color='white' />
                    <span className='product-detail-value-white '>
                      Sepete Ekle
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BookItemDetail;
