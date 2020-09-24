import React from 'react';
import { useHistory } from 'react-router-dom';
import header from '../../assets/HomePage/YOUGOTAsset 1.png';
import '../../assets/HACKED/HACKED.ttf';

import './HomePage.css';

const HomePage = () => {
  const history = useHistory();

  function logKey(e) {
    if (e) {
      history.push('/main');
    }
  }
  document.addEventListener('keydown', logKey);

  return (
    <div className="container">
      <img className="header" src={header} alt="header.png" />
      <div className="title">
        <h1>C G</h1>
        <h1 className="heading">Codegolf</h1>
        <div className="button">Press any key to continue</div>
      </div>
    </div>
  );
};

export default HomePage;
