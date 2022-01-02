import React from 'react';
import './Alert.css';

const Alert = (props) => {
  const {open, setOpen, message} = props;
  const close = () => {
    setOpen(false);
  }
  if(open) {
    return (
        <div id="alert">
          <span id="message">{message}</span><span id="closeButton" onClick={close}>&#x2715;</span>
        </div>
      )
  }
  return null
}

export default Alert;