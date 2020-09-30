import React from 'react';
import Question from '../../components/question/question';
import Footer from '../../components/footer/footer';
import './QuestionsPage.css';
import Leaderboard from '../../components/leaderboard/leaderboard';
import ModalBox from '../../components/modal/modal';

const QuestionsPage = ({ questions }) => (
    <>
        <div>
            <ModalBox />
            <div className="content-area">
                <div className="questions">
                    <div className="question-heading heading">Challenges</div>
                    <div className="questions-ind">
                        {questions.map((question, i) => <Question key={i} question={question} />)}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>
);
export default QuestionsPage;
