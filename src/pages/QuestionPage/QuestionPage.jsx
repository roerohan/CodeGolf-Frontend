import React from 'react';
import Footer from '../../components/footer/footer';
import Leaderboard from '../../components/leaderboard/leaderboard';

import './QuestionPage.css';

const QuestionPage = () => (
  <>
    <div className="content-area">
      <div className="questions">
        <div className="nav-buttons">
          <a href="https://www.csivit.com" className="prev">
            <span>&lt;&lt; Prev</span>
          </a>
          <a href="https://www.csivit.com" className="next">
            <span>Next &gt;&gt;</span>
          </a>
        </div>
        <div className="question-heading heading">
          Print the lyrics to the song 12 days of christmas
        </div>
        <div className="question-details">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quae, doloremque distinctio. At sequi illum quaerat ipsum.
          Consectetur, nesciunt repellendus fugit enim nobis eligendi!
          Nesciunt quaerat omnis in officiis laboriosam a!
        </div>
        <div className="coding-box" />
        <button type="button" className="submit-button">
          Run
        </button>
      </div>
      <Leaderboard />
    </div>
    <Footer />
  </>
);

export default QuestionPage;
