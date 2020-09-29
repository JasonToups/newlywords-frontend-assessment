import React from 'react';
import './Button.css';

const Button = ({ text, setShow, onClick }) => {
  return (
    <button className='button' onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
