import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookItemDetail = () => {
  let { bookId } = useParams();

  const getBookDetail = async () => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${bookId}?key=AIzaSyA2xRPHs_jQjplHVkB5PoSCJCSheMLPNGk`
      );
      const data = await res.json();
      console.log('data', data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookDetail();
  }, [bookId]);

  return <div>BookItemDetail</div>;
};

export default BookItemDetail;
