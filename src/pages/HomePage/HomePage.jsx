import React from 'react';
import { useHistory } from 'react-router-dom';

import './HomePage.css';

const HomePage = () => {
  const history = useHistory();

  function logKey(e) {
    if (e) {
      history.push('/questions');
    }
  }
  document.addEventListener('keydown', logKey);

  return (
    <div className="home-container">
      <div className="home-title">
        <h1 className="CG">C G</h1>
        <h2 className="home-heading">CODEGOLF</h2>
        <div className="home-button">Press any key to continue</div>
      </div>
    </div>
  );
};

export default HomePage;
