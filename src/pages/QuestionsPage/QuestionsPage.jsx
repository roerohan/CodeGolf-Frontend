import React from 'react';
import Question from '../../components/question/question';
import Footer from '../../components/footer/footer';
import './QuestionsPage.css';
import Leaderboard from '../../components/leaderboard/leaderboard';

const QuestionsPage = () => (
  <>
    <div className="content-area">
      <div className="questions">
        <div className="question-heading heading">Challenges</div>
        <div className="questions-ind">
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
        </div>
      </div>
      <Leaderboard />
    </div>
    <Footer />
  </>
);

export default QuestionsPage;
