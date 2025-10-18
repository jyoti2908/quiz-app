import { useState } from "react";

const questions = [
  {
    "question": "Which of the following is a JavaScript data type?",
    "options": ["Number", "Float", "Character", "Decimal"],
    "answer": "Number"
  },
  {
    "question": "Which symbol is used for comments in JavaScript?",
    "options": ["//", "/*", "<!--", "#"],
    "answer": "//"
  },
  {
    "question": "What will `typeof NaN` return?",
    "options": ["number", "NaN", "undefined", "object"],
    "answer": "number"
  },
  {
    "question": "Which function converts a JSON string to a JavaScript object?",
    "options": ["JSON.stringify()", "JSON.parse()", "JSON.toObject()", "parse.JSON()"],
    "answer": "JSON.parse()"
  },
  {
    "question": "What is the output of `'5' + 3` in JavaScript?",
    "options": ["8", "53", "NaN", "undefined"],
    "answer": "53"
  },
  {
    "question": "What is a closure in JavaScript?",
    "options": [
      "A function inside a loop",
      "A function having access to its parent scope",
      "A function that runs immediately",
      "A private method"
    ],
    "answer": "A function having access to its parent scope"
  },
  {
    "question": "Which keyword declares a block-scoped variable?",
    "options": ["var", "const", "let", "define"],
    "answer": "let"
  },
  {
    "question": "What does the `===` operator do in JavaScript?",
    "options": [
      "Assigns a value",
      "Compares values loosely",
      "Compares both value and type",
      "Checks only type"
    ],
    "answer": "Compares both value and type"
  },
  {
    "question": "What will `Boolean('false')` return?",
    "options": ["false", "true", "undefined", "Error"],
    "answer": "true"
  },
  {
    "question": "What is the default value of an uninitialized variable in JavaScript?",
    "options": ["null", "0", "undefined", "false"],
    "answer": "undefined"
  },
  {
    "question": "Which method adds an element to the end of an array?",
    "options": ["push()", "pop()", "shift()", "unshift()"],
    "answer": "push()"
  },
  {
    "question": "What is the output of `typeof null`?",
    "options": ["object", "null", "undefined", "string"],
    "answer": "object"
  },
  {
    "question": "Which method is used to remove the last element from an array?",
    "options": ["pop()", "shift()", "slice()", "splice()"],
    "answer": "pop()"
  },
  {
    "question": "Which of these is a correct way to create a function?",
    "options": [
      "function myFunc = () {}",
      "let myFunc() = {}",
      "function myFunc() {}",
      "def myFunc() {}"
    ],
    "answer": "function myFunc() {}"
  },
  {
    "question": "Which object is the root of the DOM in JavaScript?",
    "options": ["window", "document", "body", "html"],
    "answer": "document"
  },
  {
    "question": "What does `Array.isArray([])` return?",
    "options": ["false", "true", "null", "undefined"],
    "answer": "true"
  },
  {
    "question": "Which of the following will result in a `ReferenceError`?",
    "options": ["console.log(a)", "console.log('a')", "console.log(0)", "console.log(true)"],
    "answer": "console.log(a)"
  },
  {
    "question": "How do you write an arrow function?",
    "options": [
      "function => () {}",
      "() => {}",
      "() -> {}",
      "() := {}"
    ],
    "answer": "() => {}"
  },
  {
    "question": "What will be the result of `0 == '0'`?",
    "options": ["true", "false", "undefined", "Error"],
    "answer": "true"
  },
  {
    "question": "Which of the following is a falsy value in JavaScript?",
    "options": ["0", "[]", "{}", "'false'"],
    "answer": "0"
  }
]

function Javascript() {

    const [score, setScore] = useState(0);
    const [currentQ, setCurrentQ] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    function handleResponse(option) {
        if (option === questions[currentQ.answer]) {
            setScore(score + 1)
        }
        const nextQ = currentQ + 1;
        if (nextQ < questions.length){
            setCurrentQ(nextQ);
        } else {
            setIsFinished(true)
        }
    }

    function handleRestart(){
        setScore(0);
        setCurrentQ(0);
        setIsFinished(false)
    }

    return (
        <div>
            {isFinished ? (
                <div>
                    <p>Score Card</p>
                    <p>Score:{score} / {questions.length}</p>
                    <button onClick={handleRestart}>Restart</button>
                </div>
            ) : (
                    <div>
                         <p>Quiz Questions for Reactjs</p>
                        <p>{questions[currentQ].question}</p>
                            {questions[currentQ].options.map((option, index) => (
                                <button key={index}  onClick={() => handleResponse(option)}>
                                    {option}
                               </button>
                            ))}
                        <p>Questions {currentQ + 1} of {questions.length}</p>
                    </div>
                )
            }
        </div>
    )
}
export default Javascript;
