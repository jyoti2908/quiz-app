
import { useState } from "react";

const questions = [
  {
    "question": "What does HTML stand for?",
    "options": [
      "Hyper Trainer Marking Language",
      "Hyper Text Marketing Language",
      "Hyper Text Markup Language",
      "Hyper Text Markup Leveler"
    ],
    "answer": "Hyper Text Markup Language"
  },
  {
    "question": "Which HTML tag is used to define an internal style sheet?",
    "options": ["<style>", "<css>", "<script>", "<link>"],
    "answer": "<style>"
  },
  {
    "question": "Which tag is used to create a hyperlink in HTML?",
    "options": ["<a>", "<link>", "<href>", "<hyper>"],
    "answer": "<a>"
  },
  {
    "question": "Which HTML attribute is used to define inline styles?",
    "options": ["style", "class", "font", "styles"],
    "answer": "style"
  },
  {
    "question": "Which element is used to insert a line break?",
    "options": ["<break>", "<lb>", "<br>", "<hr>"],
    "answer": "<br>"
  },
  {
    "question": "What is the correct HTML element for the largest heading?",
    "options": ["<head>", "<h1>", "<heading>", "<h6>"],
    "answer": "<h1>"
  },
  {
    "question": "How can you open a link in a new tab/window?",
    "options": [
      "target='_new'",
      "target='_tab'",
      "target='_blank'",
      "target='newtab'"
    ],
    "answer": "target='_blank'"
  },
  {
    "question": "What does the <div> tag define?",
    "options": ["Inline section", "Header", "Division or section", "Form area"],
    "answer": "Division or section"
  },
  {
    "question": "Which tag is used to display a picture in a webpage?",
    "options": ["<image>", "<picture>", "<img>", "<src>"],
    "answer": "<img>"
  },
  {
    "question": "What tag is used for inserting a table row?",
    "options": ["<row>", "<td>", "<tr>", "<th>"],
    "answer": "<tr>"
  },
  {
    "question": "Which doctype is used for HTML5?",
    "options": [
      "<!DOCTYPE html5>",
      "<!DOCTYPE HTML PUBLIC>",
      "<!DOCTYPE html>",
      "<html5>"
    ],
    "answer": "<!DOCTYPE html>"
  },
  {
    "question": "What is the default value of the position property in CSS?",
    "options": ["absolute", "fixed", "relative", "static"],
    "answer": "static"
  },
  {
    "question": "Which tag is used to define an unordered list?",
    "options": ["<ol>", "<ul>", "<list>", "<li>"],
    "answer": "<ul>"
  },
  {
    "question": "What is the purpose of the <meta> tag?",
    "options": [
      "Add images",
      "Display metadata about the HTML document",
      "Link CSS",
      "Add JavaScript"
    ],
    "answer": "Display metadata about the HTML document"
  },
  {
    "question": "Which tag is used to add a comment in HTML?",
    "options": ["<!-- Comment -->", "// Comment", "/* Comment */", "# Comment"],
    "answer": "<!-- Comment -->"
  },
  {
    "question": "Which HTML element is used to play video files?",
    "options": ["<video>", "<media>", "<movie>", "<play>"],
    "answer": "<video>"
  },
  {
    "question": "Which tag represents emphasized text?",
    "options": ["<em>", "<i>", "<strong>", "<b>"],
    "answer": "<em>"
  },
  {
    "question": "What is the purpose of the <head> tag?",
    "options": [
      "To display the main content",
      "To define the document's body",
      "To store metadata and links",
      "To create headers"
    ],
    "answer": "To store metadata and links"
  },
  {
    "question": "Which HTML attribute is used to define a unique identifier?",
    "options": ["class", "id", "style", "name"],
    "answer": "id"
  },
  {
    "question": "Which tag is used to define a form in HTML?",
    "options": ["<input>", "<form>", "<submit>", "<fieldset>"],
    "answer": "<form>"
  }
]

function Html() {

    const [score, setScore] = useState(0);
    const [currentQ, setCurrentQ] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    function handleResponse(option) {
        if (option === questions[currentQ].answer) {
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
export default Html;