import React from 'react';
import logo from './logo.svg';
import './App.css';
import modalGraphic from './ModalGraphic.svg';
import Modal from './Modal/Modal';

import ButtonOpenModal from './Button/ButtonOpenModal';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={modalGraphic} className='App-logo' alt='logo' />
        <Modal />
        <ButtonOpenModal text='Open Modal' />
      </header>
    </div>
  );
}

export default App;
