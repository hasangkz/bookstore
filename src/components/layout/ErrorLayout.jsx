import React from 'react';
import { MdError } from 'react-icons/md';

const ErrorLayout = () => {
  return (
    <div className='error-app min-h-screen'>
      <div className='error-container'>
        <MdError />
        <p>Oops! Bir hata oluştu.</p>
      </div>
    </div>
  );
};

export default ErrorLayout;
