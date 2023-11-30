import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import Header from '../components/header/Header';
import Books from '../components/books/Books';

const MainPage = () => {
  const [booksData, setBooksData] = useState();
  const [search, setSearch] = useState('');

  const getAllBooks = async () => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=quilting&key=AIzaSyA2xRPHs_jQjplHVkB5PoSCJCSheMLPNGk`
      );
      const data = await res.json();
      setBooksData(data?.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <>
      <Header setSearch={setSearch} />
      {booksData ? (
        <div className='home gap-8 flex justify-between p-6 md:flex-row flex-col  md:pb-0 pb-24'>
          <div className='products flex-[4] max-h-[calc(100vh_-_160px)] overflow-y-auto pb-4 min-h-[500px]'>
            {booksData && (
              <Books
                booksData={booksData}
                setBooksData={setBooksData}
                search={search}
              />
            )}
          </div>
          {/* {basket.basketItems.length > 0 && (
            <div className='basket min-w-[200px] max-w-[400px] border '>
              <Basket />
            </div>
          )} */}
        </div>
      ) : (
        <Spin
          size='large'
          className='absolute top-1/2 h-screen w-screen flex justify-center'
        />
      )}
    </>
  );
};

export default MainPage;
