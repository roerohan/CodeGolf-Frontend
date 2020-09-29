import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import Footer from '../../components/footer/footer';
import Leaderboard from '../../components/leaderboard/leaderboard';
import AceEditor from 'react-ace';

import './QuestionPage.css';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-ruby';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';

const QuestionPage = ({ question }) => {
    const langList = ['Python', 'Javascript', 'Java', 'Ruby'];

    const [language, setLanguage] = useState('Languages');

    return (
        <div>
            <div className="content-area">
                <div className="questions">
                    <div className="nav-buttons">
                        <div>
                            <a href="https://www.csivit.com" className="prev">
                                <span>&lt;&lt; Prev</span>
                            </a>
                            <a href="https://www.csivit.com" className="next">
                                <span>Next &gt;&gt;</span>
                            </a>
                        </div>
                        <div>
                            <Link to='/questions' className="next">
                                <span>&lt;&lt; Go back to Questions</span>
                            </Link>
                        </div>
                    </div>
                    <div className="question-heading heading">
                        {question.questionName}
                    </div>
                    <div className="question-details">{question.question}</div>
                    <div className="dropdown">
                        <button className="dropbtn">{language}</button>
                        <div className="dropdown-content">
                            {langList.map((lang, i) => {
                                return (
                                    <a
                                        key={i}
                                        onClick={(e) =>
                                            setLanguage(e.target.text)
                                        }
                                    >
                                        {lang}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                    <AceEditor
                        mode={language.toLowerCase()}
                        theme="monokai"
                        name="coding-space"
                        highlightActiveLine={true}
                        showGutter={false}
                        showPrintMargin={false}
                        fontSize={18}
                        editorProps={{ $blockScrolling: false }}
                        setOptions={{
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: true,
                            showLineNumbers: true,
                            tabSize: 2,
                        }}
                    />

                    <button type="button" className="submit-button">
                        Run
                    </button>
                </div>
                <Leaderboard />
            </div>
            <Footer />
        </div>
    );
};

export default QuestionPage;
