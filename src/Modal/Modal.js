import React from 'react';
import './Modal.css';
import modalGraphic from './ModalGraphic.svg';
import modalClose from './ModalClose.svg';

const Modal = ({ onClick }) => {
  return (
    <div className='modal'>
      <img
        src={modalClose}
        className='modal-close'
        alt='close'
        onClick={onClick}
      />
      <img src={modalGraphic} className='modal-graphic' alt='logo' />
      <h1>Let's get going!</h1>
      <p>
        Follow these tips to get your project off to a great start and create a
        fully memorable book!
      </p>
      <p>...</p>
      <button>Next</button>
    </div>
  );
};

export default Modal;
