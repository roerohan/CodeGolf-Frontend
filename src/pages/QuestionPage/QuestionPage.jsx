import React, { useState } from "react";
import Footer from "../../components/footer/footer";
import Leaderboard from "../../components/leaderboard/leaderboard";
import AceEditor from "react-ace";

import "./QuestionPage.css";

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

  var [language, setLanguage] = useState("Languages");
  var mode = "";
  if (language === "C" || language === "C++") {
    mode = "c_cpp";
  } else {
    mode = language;
  }

  return (
    <div>
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
          <div className="dropdown">
            <button className="dropbtn">{language}</button>
            <div className="dropdown-content">
              {langList.map((lang) => {
                return (
                  <a onClick={(e) => setLanguage(e.target.text)}>{lang}</a>
                );
              })}
            </div>
          </div>
          <AceEditor
            mode={mode.toLowerCase()}
            theme="monokai"
            name="coding-space"
            highlightActiveLine={true}
            showGutter={false}
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
