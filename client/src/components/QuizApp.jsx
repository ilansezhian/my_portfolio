// File: components/QuizApp.js
import React, { useState } from "react";
import "./QuizApp.css";
import { FaSmile, FaFrown, FaRedo } from "react-icons/fa";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "London"],
    answer: "Paris",
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Coded Style Sheets",
      "Creative Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    answer: "<ul>",
  },
  {
    question: "Which company developed React?",
    options: ["Google", "Facebook", "Twitter", "Microsoft"],
    answer: "Facebook",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<scripting>", "<javascript>", "<script>"],
    answer: "<script>",
  },
  {
    question: "What is the default port of React development server?",
    options: ["3000", "8080", "5000", "4200"],
    answer: "3000",
  },
  {
    question: "Which keyword is used to create a constant in JavaScript?",
    options: ["var", "let", "constant", "const"],
    answer: "const",
  },
  {
    question: "How do you write a comment in CSS?",
    options: ["// comment", "<!-- comment -->", "/* comment */", "# comment"],
    answer: "/* comment */",
  },
  {
    question: "Which of the following is a JavaScript framework?",
    options: ["Laravel", "Django", "React", "Flask"],
    answer: "React",
  },
];

function QuizApp() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [answerStatus, setAnswerStatus] = useState(null); // 'correct' or 'wrong'

  const handleOptionClick = (option) => {
    setSelected(option);
    const isCorrect = option === questions[current].answer;
    setAnswerStatus(isCorrect ? "correct" : "wrong");
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
      setAnswerStatus(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setAnswerStatus(null);
    setShowResult(false);
  };

  return (
    <div className="quiz-app">
      <h2>🧠 React Quiz</h2>
      {showResult ? (
        <div className="result">
          <h3>
            Your Score: {score} / {questions.length}
          </h3>
          <p>
            {score >= questions.length / 2 ? (
              <>
                <FaSmile /> Great Job!
              </>
            ) : (
              <>
                <FaFrown /> Keep Practicing!
              </>
            )}
          </p>
          <button onClick={handleRestart}>
            <FaRedo /> Restart
          </button>
        </div>
      ) : (
        <div className="question-card">
          <h4>{questions[current].question}</h4>
          <ul>
            {questions[current].options.map((option, index) => (
              <li
                key={index}
                className={
                  selected
                    ? option === questions[current].answer
                      ? "correct"
                      : option === selected
                      ? "wrong"
                      : ""
                    : ""
                }
                onClick={() => !selected && handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
          <button onClick={handleNext} disabled={!selected}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default QuizApp;
