/* eslint-disable react/jsx-indent */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import QuestionsPage from './pages/QuestionsPage/QuestionsPage';

const App = () => (
    <div className="App">
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/main" component={QuestionsPage} />
        </Switch>
    </div>
);

export default App;
