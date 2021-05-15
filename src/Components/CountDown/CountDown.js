import React from 'react';
import Digit from './Digit/Digit';

const CountDown = (props) => {
  return (
    <div className='d-flex my-4'>
      <Digit color='purple' value={props.time.min}></Digit>
      <Digit color='darkgreen' value={props.time.sec}></Digit>
      <Digit color='darkblue' value={props.time.mili}></Digit>
    </div>
  );
};

export default CountDown;
