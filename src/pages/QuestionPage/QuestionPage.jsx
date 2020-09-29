import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Leaderboard from '../../components/leaderboard/leaderboard';
import ModalBox from '../../components/modal/modal';
import AceEditor from 'react-ace';
import { Dropdown } from 'react-bootstrap';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-ruby';
import 'ace-builds/src-noconflict/mode-rust';
import 'ace-builds/src-noconflict/mode-swift';
import 'ace-builds/src-noconflict/mode-perl';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';

import './QuestionPage.css';
import HomeButton from '../../assets/QuestionPage/home-button.svg';

import './QuestionPage.css';

const QuestionPage = ({ question }) => {
    const history = useHistory();

    const routeChange = () => {
        history.push('/');
    };

    const langList = [
        'Bash',
        'Brainfuck',
        'C',
        'C++',
        'Golfscript',
        'Java',
        'Javascript',
        'O5ABE1',
        'Perl',
        'Python',
        'Ruby',
        'Rust',
        'Swift',
    ];

    const [language, setLanguage] = useState('Select');

    let mode = '';
    if (language === 'C' || language === 'C++') {
        mode = 'c_cpp';
    } else {
        mode = language;
    }

    const [characters, setCharacter] = useState(0);

    return (
        <div>
            <img
                onClick={routeChange}
                src={HomeButton}
                alt="home-button.svg"
                className="home-button"
            />
            <ModalBox />
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
                            <Link to="/" className="next">
                                <span>&lt;&lt; Back to Questions</span>
                            </Link>
                        </div>
                    </div>
                    <div className="question-heading heading">
                        {question.questionName}
                    </div>
                    <div className="question-details">{question.question}</div>
                    <p>characters: {characters}</p>
                    <p>language: </p>
                    <Dropdown className="dropdown">
                        <Dropdown.Toggle
                            className="dropbtn"
                            id="dropdown-basic"
                        >
                            {language}
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown-content">
                            {langList.map((lang) => {
                                return (
                                    <Dropdown.Item
                                        className="dropdown-item"
                                        onClick={(e) =>
                                            setLanguage(e.target.text)
                                        }
                                    >
                                        {lang}
                                    </Dropdown.Item>
                                );
                            })}
                        </Dropdown.Menu>
                    </Dropdown>

                    <AceEditor
                        onChange={(e) => setCharacter(0)}
                        value="code"
                        mode={mode.toLowerCase()}
                        theme="monokai"
                        name="coding-space"
                        highlightActiveLine={true}
                        showGutter={true}
                        fontSize={18}
                        showPrintMargin={false}
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
