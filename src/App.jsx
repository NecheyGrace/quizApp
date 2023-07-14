import React from 'react';
import { useState } from 'react';
import './QuizApp.css';

const App = () => {
  const quizQuestions = [
    {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea"],
    answer: "Japan"
  },
  {
    question: "Which is the largest country by land area?",
    options: ["Russia", "Canada", "United States"],
    answer: "Russia"
  },
  {
    question: "In which city is the Great Pyramid of Giza located?",
    options: ["Cairo", "Rome", "Athens"],
    answer: "Cairo"
  },
  {
    question: "Who developed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking"],
    answer: "Albert Einstein"
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean"],
    answer: "Pacific Ocean"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter"],
    answer: "Mars"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe"],
    answer: "Au"
  },
  {
    question: "Who wrote the play Romeo and Juliet?",
    options: ["William Shakespeare", "Jane Austen", "Charles Dickens"],
    answer: "William Shakespeare"
  },
  {
    question: "Which instrument has black and white keys?",
    options: ["Piano", "Violin", "Guitar"],
    answer: "Piano"
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Blue whale", "Elephant", "Giraffe"],
    answer: "Blue whale"
  },
  {
    question: "Who is the author of the Harry Potter book series?",
    options: ["J.K. Rowling", "Stephen King", "George R.R. Martin"],
    answer: "J.K. Rowling"
  },
  {
    question: "What is the capital of Australia?",
    options: ["Canberra", "Sydney", "Melbourne"],
    answer: "Canberra"
  },
  {
    question: "Who discovered gravity?",
    options: ["Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
    answer: "Isaac Newton"
  },
  {
    question: "What is the chemical symbol for oxygen?",
    options: ["O", "H", "C"],
    answer: "O"
  },
  {
    question: "Who painted The Starry Night?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
    answer: "Vincent van Gogh"
  },
  {
    question: "Which continent is the largest by land area?",
    options: ["Asia", "Africa", "North America"],
    answer: "Asia"
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yen", "Dollar", "Euro"],
    answer: "Yen"
  },
  {
    question: "Who wrote the novel Pride and Prejudice?",
    options: ["Jane Austen", "Charlotte Brontë", "Emily Dickinson"],
    answer: "Jane Austen"
  }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showError, setShowError] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
    setShowError(false);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === '') {
      setShowError(true);
      return;
    }

    if (selectedAnswer === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedAnswer('');
    setShowError(false);

    if (currentQuestion === quizQuestions.length - 1) {
      setQuizCompleted(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const renderQuizContent = () => {
    if (quizCompleted) {
      return (
        <div>
          <h2>Quiz Completed!</h2>
          <p className="score">Your final score is: {score}/{quizQuestions.length}</p>
        </div>
      );
    }

    const currentQuizQuestion = quizQuestions[currentQuestion];

    return (
      <div>
        <h2>Question {currentQuestion + 1}</h2>
        <p className="question">{currentQuizQuestion.question}</p>
        <ul className="options">
          {currentQuizQuestion.options.map((option, index) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={() => handleAnswerSelection(option)}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
        {showError && <p className="error">Please select an answer before proceeding.</p>}
        <button onClick={handleNextQuestion} disabled={selectedAnswer === ''}>
          {currentQuestion === quizQuestions.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    );
  };

  return (
    <div className="quiz-app">
      <h1 className="title">Quiz App</h1>
      {!quizCompleted && (
        <div className="quiz-container">
          {renderQuizContent()}
        </div>
      )}
      <div className="footer">
        {!quizCompleted && (
          <p className="progress">Question {currentQuestion + 1} of {quizQuestions.length}</p>
        )}
      </div>
    </div>
  );
};

export default App;
