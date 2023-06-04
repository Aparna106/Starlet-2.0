import React, { useState } from "react";
import "./mock.css";
function Mock() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Do you believe that unless you share an experience, that it has no value?",
      options: [
        { id: 0, text: "NO", isCorrect: true },
        { id: 3, text: "YES", isCorrect: false },
      ],
    },
    {
      text: "Do you feel that you still want to do more with your life?",
      options: [
        { id: 0, text: "YES", isCorrect: true },
        { id: 1, text: "NO", isCorrect: false },
      ],
    },
    {
      text: "Are you able to adapt to change or unexpected situations?",
      options: [
        { id: 0, text: "YES", isCorrect: true },
        { id: 1, text: "NO", isCorrect: false },
      ],
    },
    {
      text: "Can you make a decision without seeking reassurance?",
      options: [
        { id: 0, text: "NO", isCorrect: false },
        { id: 1, text: "YES", isCorrect: true },
      ],
    },
    {
      text: "Are there any activities you enjoy doing alone? ",
      options: [
        { id: 0, text: "NO", isCorrect: false },
        { id: 1, text: "YES", isCorrect: true },
      ],
    },{
        text: "Are you capable of asking questions?",
        options: [
          { id: 0, text: "NO", isCorrect: false },
          { id: 1, text: "YES", isCorrect: true },
        ],
      },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="Apps">
      {/* 1. Header  */}
      <h1>DO YOU THINK YOU ARE A SOLO TRAVELLER? TAKE THIS QUIZ TO FIND OUT!</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart Quiz</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Mock;