import { useState } from "react";

const questions = [
  {
    "question": "What is React primarily used for?",
    "options": ["Database management", "Styling web pages", "Building user interfaces", "Server-side scripting"],
    "answer": "Building user interfaces"
  },
  {
    "question": "Which command is used to create a new React app?",
    "options": ["npm init react-app", "create-react", "npx create-react-app", "npm install react"],
    "answer": "npx create-react-app"
  },
  {
    "question": "What is JSX?",
    "options": ["A CSS preprocessor", "A JavaScript library", "JavaScript XML", "A server-side language"],
    "answer": "JavaScript XML"
  },
  {
    "question": "What is a component in React?",
    "options": ["A type of server", "A reusable piece of UI", "A database query", "A CSS style"],
    "answer": "A reusable piece of UI"
  },
  {
    "question": "Which hook is used to add state to a functional component?",
    "options": ["useEffect", "useState", "useRef", "useMemo"],
    "answer": "useState"
  },
  {
    "question": "Which hook is used to perform side effects in React?",
    "options": ["useContext", "useState", "useEffect", "useReducer"],
    "answer": "useEffect"
  },
  {
    "question": "Props are:",
    "options": ["Mutable data", "Used to update state", "Read-only data passed to components", "Global variables"],
    "answer": "Read-only data passed to components"
  },
  {
    "question": "What is the purpose of keys in React lists?",
    "options": ["Styling elements", "Optimizing rendering", "Passing props", "Storing state"],
    "answer": "Optimizing rendering"
  },
  {
    "question": "How do you pass data from a parent to a child component?",
    "options": ["state", "props", "context", "dispatch"],
    "answer": "props"
  },
  {
    "question": "Which lifecycle method runs after the component is rendered?",
    "options": ["componentWillMount", "componentDidMount", "render", "constructor"],
    "answer": "componentDidMount"
  },
  {
    "question": "What is the default port for React development server?",
    "options": ["3000", "8000", "5000", "8080"],
    "answer": "3000"
  },
  {
    "question": "Which tool can be used for debugging React applications?",
    "options": ["React DevTools", "Redux CLI", "Postman", "React CLI"],
    "answer": "React DevTools"
  },
  {
    "question": "What does lifting state up mean?",
    "options": ["Moving state to global scope", "Using Redux", "Moving state to a common parent", "Deleting local state"],
    "answer": "Moving state to a common parent"
  },
  {
    "question": "What is the virtual DOM?",
    "options": ["A real browser DOM", "A slower copy of DOM", "An in-memory representation of UI", "React's CSS engine"],
    "answer": "An in-memory representation of UI"
  },
  {
    "question": "What is the correct syntax to import a component?",
    "options": ["require(Component)", "include Component from './Component'", "import Component from './Component'", "load Component './Component'"],
    "answer": "import Component from './Component'"
  },
  {
    "question": "Which method is used to render elements in React?",
    "options": ["renderComponent()", "ReactDOM.render()", "createComponent()", "DOM.render()"],
    "answer": "ReactDOM.render()"
  },
  {
    "question": "What does `useRef()` return?",
    "options": ["An array", "A mutable object", "A number", "A hook state"],
    "answer": "A mutable object"
  },
  {
    "question": "What is the use of `useMemo()`?",
    "options": ["To memoize values", "To update props", "To manage DOM", "To fetch data"],
    "answer": "To memoize values"
  },
  {
    "question": "Which hook is used to access global context in a component?",
    "options": ["useGlobal()", "useContext()", "useRedux()", "useRef()"],
    "answer": "useContext()"
  },
  {
    "question": "What does `React.Fragment` do?",
    "options": ["Adds styles", "Groups multiple elements without adding extra DOM nodes", "Updates state", "Handles props"],
    "answer": "Groups multiple elements without adding extra DOM nodes"
  }
]
function ReactJs() {

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
export default ReactJs;


