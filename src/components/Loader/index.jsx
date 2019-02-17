import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Loader.scss';

const Loader = () => (
  <div className='loader' id='container'>
    <div className='loader-double-ring'>
      <div  />
      <div  />
    </div>
  </div>
);

export default Loader;
