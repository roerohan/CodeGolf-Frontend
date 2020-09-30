import React from 'react';
import propTypes from 'prop-types';

import Question from '../../components/question/question';
import Footer from '../../components/footer/footer';
import './QuestionsPage.css';
// import Leaderboard from '../../components/leaderboard/leaderboard';
import ModalBox from '../../components/modal/modal';

const QuestionsPage = ({ questions }) => (
    <>
        <div>
            <ModalBox />
            <div className="content-area">
                <div className="questions">
                    <div className="question-heading heading">Challenges</div>
                    <div className="questions-ind">
                        {
                            questions.map(
                                (question) => (
                                    <Question
                                        key={Math.random() * 1000}
                                        question={question}
                                    />
                                ),
                            )
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>
);

QuestionsPage.propTypes = {
    questions: propTypes.arrayOf(propTypes.shape({
        questionName: propTypes.string.isRequired,
        points: propTypes.number.isRequired,
    })).isRequired,
};

export default QuestionsPage;
