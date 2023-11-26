import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import '../styles/GeneralStyle.css';

const LoadingLayout = () => {
  return (
    <div className='loading-app min-h-screen'>
      <div className='loading-container'>
        <FontAwesomeIcon icon={faSpinner} spin size='3x' />
        <p>Yükleniyor...</p>
      </div>
    </div>
  );
};

export default LoadingLayout;
