import React from 'react';
import { Link } from 'react-router-dom';
import '../style/GeneralStyle.css';

export const ErrorPage = () => {
  return (
    <div className='errorContainer'>
      <img src={'images/notFound.png'} className='img' alt='error' />
      <h1 style={{ textAlign: 'center' }}>
        <Link to='/' className='goHome'>
          Ana Sayfaya Dön
        </Link>
      </h1>
    </div>
  );
};
