import React, { useState } from 'react';
import { Spin } from 'antd';
import Header from '../components/header/Header';
import Books from '../components/books/Books';
import useFetch from '../hooks/useFetch';
import ErrorLayout from '../components/layout/ErrorLayout';
import LoadingLayout from '../components/layout/LoadingLayout';

const MainPage = () => {
  let API_KEY = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=quilting&key=${API_KEY}`;
  const [search, setSearch] = useState('');
  const { data: booksData, loading, error } = useFetch(apiUrl);

  if (error) {
    return <ErrorLayout />;
  }

  if (loading) {
    return <LoadingLayout />;
  }

  return (
    <>
      <Header setSearch={setSearch} />

      {booksData ? (
        <div className='home gap-8 flex justify-between p-6 md:flex-row flex-col  md:pb-0 pb-24'>
          <div className='products flex-[4] max-h-[calc(100vh_-_160px)] overflow-y-auto pb-4 min-h-[500px]'>
            {booksData && (
              <Books booksData={booksData?.items} search={search} />
            )}
          </div>
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
