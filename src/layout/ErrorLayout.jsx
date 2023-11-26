import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const ErrorLayout = () => {
  return (
    <div className='error-app min-h-screen'>
      <div className='error-container'>
        <FontAwesomeIcon icon={faExclamationCircle} size='3x' color='#ff5252' />
        <p>Oops! Bir hata oluştu.</p>
      </div>
    </div>
  );
};

export default ErrorLayout;
