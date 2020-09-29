import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import Footer from "../../components/footer/footer";
import Leaderboard from "../../components/leaderboard/leaderboard";
import ModalBox from "../../components/modal/modal";
import AceEditor from "react-ace";
import { Dropdown } from "react-bootstrap";

import "./QuestionPage.css";
import HomeButton from "../../assets/QuestionPage/home-button.svg";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-rust";
import "ace-builds/src-noconflict/mode-swift";
import "ace-builds/src-noconflict/mode-perl";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

const QuestionPage = () => {

  const history = useHistory();

  const routeChange = () => {
    history.push("/");
  };

  const langList = [
    "Bash",
    "Brainfuck",
    "C",
    "C++",
    "Golfscript",
    "Java",
    "Javascript",
    "O5ABE1",
    "Perl",
    "Python",
    "Ruby",
    "Rust",
    "Swift",
  ];

  var [language, setLanguage] = useState("Select");

  var mode = "";
  if (language === "C" || language === "C++") {
    mode = "c_cpp";
  } else {
    mode = language;
  }

  var [characters, setCharacter] = useState(0);

  return (
    <div>
      <img onClick={routeChange} src={HomeButton} alt="home-button.svg" />
      <ModalBox />
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
            doloremque distinctio. At sequi illum quaerat ipsum. Consectetur,
            nesciunt repellendus fugit enim nobis eligendi! Nesciunt quaerat
            omnis in officiis laboriosam a!
          </div>
          <p>characters: {characters}</p>
          <p>language: </p>
          <Dropdown className="dropdown">
            <Dropdown.Toggle className="dropbtn" id="dropdown-basic">
              {language}
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-content">
              {langList.map((lang) => {
                return (
                  <Dropdown.Item
                    className="dropdown-item"
                    onClick={(e) => setLanguage(e.target.text)}
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
