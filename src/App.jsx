import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/header/header';
import HomePage from './pages/HomePage/HomePage';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import QuestionsPage from './pages/QuestionsPage/QuestionsPage';

const App = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const getQuestions = async () => {
            const res = await axios('http://localhost:5000/questions');
            setQuestions(res.data.questions);
        };
        getQuestions();
    }, []);

    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/questions">
                    <QuestionsPage questions={questions} />
                </Route>
                <Route path="/question/:questionName">
                    <QuestionPage questions={questions} />
                </Route>
            </Switch>
        </div>
    );
};

export default App;
