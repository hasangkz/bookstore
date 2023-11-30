import React, { useState } from 'react';
import './books.css';
import BookItem from './BookItem';

const Books = ({ booksData, setBooksData, search }) => {
  return (
    <div className='product-wrapper grid gap-8 grid-cols-[repeat(auto-fill,_300px)] justify-center align-middle '>
      {booksData
        ?.filter(
          (item) =>
            item?.volumeInfo?.title?.toLowerCase().includes(search) ||
            item?.volumeInfo?.authors[0]?.toLowerCase().includes(search)
        )
        ?.sort((a, b) =>
          a?.volumeInfo?.title.localeCompare(b?.volumeInfo?.title)
        )
        ?.map((book) => (
          <BookItem book={book} key={book.id} />
        ))}
      <div className='flex flex-col items-center justify-between align-middle'></div>
    </div>
  );
};

export default Books;
