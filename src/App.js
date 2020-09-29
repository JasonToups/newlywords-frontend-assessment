import React, { useEffect, useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './Modal/Modal';

import Button from './Button/Button';

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
      <Button text='Open Modal' onClick={() => setShow(!show)} />

      {show ? <Modal onClick={() => setShow(!show)} /> : null}
    </div>
  );
}

export default App;
