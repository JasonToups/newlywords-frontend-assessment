import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import modalGraphic from './Modal/ModalGraphic.svg';

function App() {
  const outside = useRef();
  const [show, setShow] = useState(false);

  const handleClick = e => {
    if (outside.current.contains(e.target)) {
      return;
    }
    setShow(false);
  };

  useEffect(() => {
    const getClick = document.addEventListener('click', handleClick);

    return () => {
      getClick();
    };
  }, []);

  return (
    <div className='App' ref={outside}>
      <div className='open-modal'>
        <Button text='Open Modal' onClick={() => setShow(!show)} />
      </div>

      {show ? (
        <div className='modal-background'>
          <Modal
            modalGraphic={modalGraphic}
            header="Let's get going!"
            body='Follow these tips to get your project off to a great start and create a fully memorable book!'
            buttonText='Next'
            close={() => setShow(!show)}
          />
        </div>
      ) : null}
    </div>
  );
}

export default App;
