import React from 'react';
import './Modal.css';
import modalClose from './ModalClose.svg';
import modalDotGroup from './ModalDotGroup.svg';
import Button from '../Button/Button';

const Modal = ({ modalGraphic, header, body, buttonText, close }) => {
  return (
    <div className='modal'>
      <img
        src={modalClose}
        className='modal-close'
        alt='close'
        onClick={close}
      />
      <img src={modalGraphic} className='modal-graphic' alt='logo' />
      <h1>{header}</h1>
      <p>{body}</p>
      <img src={modalDotGroup} className='modal-dot-group' alt='dots' />
      <br />
      <div className='modal-button'>
        <Button text={buttonText} />
      </div>
    </div>
  );
};

export default Modal;
