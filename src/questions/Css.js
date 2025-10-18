import { useState } from "react";

const questions = [
  {
    "question": "What does CSS stand for?",
    "options": [
      "Creative Style System",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets"
    ],
    "answer": "Cascading Style Sheets"
  },
  {
    "question": "Which CSS property is used to change the text color?",
    "options": ["text-color", "color", "font-color", "text-style"],
    "answer": "color"
  },
  {
    "question": "How do you select an element with id 'main' in CSS?",
    "options": ["#main", ".main", "*main", "main"],
    "answer": "#main"
  },
  {
    "question": "Which property is used to change the background color?",
    "options": ["color", "bgcolor", "background", "background-color"],
    "answer": "background-color"
  },
  {
    "question": "Which value is used for `position` to make an element stick in one place even on scroll?",
    "options": ["fixed", "static", "absolute", "relative"],
    "answer": "fixed"
  },
  {
    "question": "Which CSS property controls the text size?",
    "options": ["text-size", "font-size", "font-style", "text-style"],
    "answer": "font-size"
  },
  {
    "question": "Which symbol is used for class selectors in CSS?",
    "options": ["#", ".", "*", "$"],
    "answer": "."
  },
  {
    "question": "What does the z-index property do?",
    "options": [
      "Sets text indentation",
      "Specifies element stacking order",
      "Zooms the element",
      "Sets element transparency"
    ],
    "answer": "Specifies element stacking order"
  },
  {
    "question": "Which property is used to make text bold?",
    "options": ["font-weight", "text-style", "font-style", "text-bold"],
    "answer": "font-weight"
  },
  {
    "question": "How do you center a block element horizontally?",
    "options": [
      "text-align: center;",
      "margin: auto;",
      "align: center;",
      "float: center;"
    ],
    "answer": "margin: auto;"
  },
  {
    "question": "Which of the following is not a valid position value in CSS?",
    "options": ["relative", "absolute", "center", "fixed"],
    "answer": "center"
  },
  {
    "question": "Which property controls the spacing between lines of text?",
    "options": ["line-spacing", "line-height", "letter-spacing", "spacing"],
    "answer": "line-height"
  },
  {
    "question": "How do you apply a style to all `<p>` elements inside a `<div>`?",
    "options": ["div + p", "div > p", "div p", "div.p"],
    "answer": "div p"
  },
  {
    "question": "Which property is used to make an element invisible but still take space?",
    "options": ["display: none", "visibility: hidden", "opacity: 0", "z-index: -1"],
    "answer": "visibility: hidden"
  },
  {
    "question": "What does the `!important` declaration do?",
    "options": [
      "Ignores the rule",
      "Overrides all other declarations",
      "Makes property optional",
      "Adds comment"
    ],
    "answer": "Overrides all other declarations"
  },
  {
    "question": "What is the default position of an HTML element?",
    "options": ["absolute", "relative", "static", "fixed"],
    "answer": "static"
  },
  {
    "question": "Which property is used to control the space inside an element's border?",
    "options": ["margin", "padding", "spacing", "border-spacing"],
    "answer": "padding"
  },
  {
    "question": "Which unit is relative to the font size of the element?",
    "options": ["px", "%", "em", "vh"],
    "answer": "em"
  },
  {
    "question": "Which CSS property adds space between characters?",
    "options": ["word-spacing", "text-indent", "letter-spacing", "text-spacing"],
    "answer": "letter-spacing"
  },
  {
    "question": "What property makes a flex container?",
    "options": ["display: grid", "display: block", "display: inline", "display: flex"],
    "answer": "display: flex"
  }
]

function Css() {

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
export default Css;