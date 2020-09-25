import React from 'react';
import { useHistory } from 'react-router-dom';

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
    <div className="home-container">
      <div className="home-title">
        <h1 className="CG">CG</h1>
        <h1 className="home-heading">Codegolf</h1>
        <div className="home-button">Press any key to continue</div>
      </div>
    </div>
  );
};

export default HomePage;
