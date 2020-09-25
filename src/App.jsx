import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header';
import HomePage from './pages/HomePage/HomePage';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import QuestionsPage from './pages/QuestionsPage/QuestionsPage';

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/questions">
        <QuestionsPage />
      </Route>
      <Route path="/question">
        <QuestionPage />
      </Route>
    </Switch>
  </div>
);

export default App;
