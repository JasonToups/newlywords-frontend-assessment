import React, { useState } from 'react';
import './App.css';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import modalGraphic from './Modal/ModalGraphic.svg';

function App() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className='App'>
      <div className='open-modal'>
        <Button text='Open Modal' onClick={handleClick} />
      </div>

      {show ? (
        
          <Modal
            modalGraphic={modalGraphic}
            header="Let's get going!"
            body='Follow these tips to get your project off to a great start and create a fully memorable book!'
            buttonText='Next'
            close={handleClick}
            onClickOutside={handleClick}
          />
      ) : null}
    </div>
  );
}

export default App;
