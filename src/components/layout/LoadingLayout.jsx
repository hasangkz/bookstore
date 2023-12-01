import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import '../../style/GeneralStyle.css';
const LoadingLayout = () => {
  return (
    <div className='loading-app min-h-screen'>
      <div className='loading-container'>
        <AiOutlineLoading3Quarters />
        <p>Yükleniyor...</p>
      </div>
    </div>
  );
};

export default LoadingLayout;
