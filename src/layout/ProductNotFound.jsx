import React from 'react';
import '../styles/GeneralStyle.css';

const ProductNotFound = () => {
  return (
    <div className='flex center justify-center items-center'>
      <div className='product-notFound-container '>
        <div className='message-box'>
          <h1>Üzgünüz!</h1>
          <p>İstediğiniz ürün maalesef bulunamadı.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductNotFound;
