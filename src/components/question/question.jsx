import React from 'react';

import './question.css';

const Question = () => (
  <div className="question">
    <div className="question-text">
      Print the lyrics to the song The 12 Days of Christmas
    </div>
    <div className="question-bottom-div">
      <div className="points">420 pts.</div>
      <button type="button" className="solve-button">Solve</button>
    </div>
  </div>
);

export default Question;
