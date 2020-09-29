import React from 'react';
import './Modal.css';
import modalGraphic from './ModalGraphic.svg';
import modalClose from './ModalClose.svg';
import modalDotGroup from './ModalDotGroup.svg';
import Button from '../Button/Button';

const Modal = ({ header, body, button, onClick }) => {
  return (
    <div className='modal'>
      <img
        src={modalClose}
        className='modal-close'
        alt='close'
        onClick={onClick}
      />
      <img src={modalGraphic} className='modal-graphic' alt='logo' />
      <h1>{header}</h1>
      <p>{body}</p>
      <img src={modalDotGroup} className='modal-dot-group' alt='dots' />
      <br />
      <div className='modal-button'>
        <Button text={button} />
      </div>
    </div>
  );
};

export default Modal;
