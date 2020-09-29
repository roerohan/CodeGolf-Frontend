import React from 'react';
import { Link } from 'react-router-dom';

import './question.css';

const Question = ({question}) => (
  <div className="question">
    <div className="question-text">
      {question.questionName}
    </div>
    <div className="question-bottom-div">
      <div className="points">{question.points} pts.</div>
      <Link to="/question"><button type="button" className="solve-button">Solve</button></Link>
    </div>
  </div>
);

export default Question;
