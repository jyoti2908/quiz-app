import { useState } from "react";

const questions = [
  {
    "question": "What is the capital of France?",
    "options": ["Berlin", "Madrid", "Paris", "Rome"],
    "answer": "Paris"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": ["Earth", "Mars", "Venus", "Jupiter"],
    "answer": "Mars"
  },
  {
    "question": "Who wrote the play 'Romeo and Juliet'?",
    "options": ["William Shakespeare", "Leo Tolstoy", "Mark Twain", "Jane Austen"],
    "answer": "William Shakespeare"
  },
  {
    "question": "Which is the largest ocean in the world?",
    "options": ["Indian Ocean", "Atlantic Ocean", "Arctic Ocean", "Pacific Ocean"],
    "answer": "Pacific Ocean"
  },
  {
    "question": "Who is known as the Father of Computers?",
    "options": ["Albert Einstein", "Alan Turing", "Charles Babbage", "Isaac Newton"],
    "answer": "Charles Babbage"
  },
  {
    "question": "What is the currency of Japan?",
    "options": ["Won", "Yuan", "Yen", "Rupee"],
    "answer": "Yen"
  },
  {
    "question": "Which country is the largest by area?",
    "options": ["China", "USA", "Russia", "Canada"],
    "answer": "Russia"
  },
  {
    "question": "What is the hardest natural substance on Earth?",
    "options": ["Gold", "Iron", "Diamond", "Quartz"],
    "answer": "Diamond"
  },
  {
    "question": "Which language has the most native speakers in the world?",
    "options": ["English", "Mandarin Chinese", "Spanish", "Hindi"],
    "answer": "Mandarin Chinese"
  },
  {
    "question": "Who painted the Mona Lisa?",
    "options": ["Pablo Picasso", "Vincent Van Gogh", "Leonardo da Vinci", "Claude Monet"],
    "answer": "Leonardo da Vinci"
  },
  {
    "question": "Which element has the chemical symbol 'O'?",
    "options": ["Osmium", "Oxygen", "Oxide", "Organium"],
    "answer": "Oxygen"
  },
  {
    "question": "In which year did the Titanic sink?",
    "options": ["1912", "1905", "1920", "1918"],
    "answer": "1912"
  },
  {
    "question": "What is the national animal of India?",
    "options": ["Elephant", "Peacock", "Bengal Tiger", "Lion"],
    "answer": "Bengal Tiger"
  },
  {
    "question": "Which continent is the Sahara Desert located in?",
    "options": ["Asia", "Africa", "Australia", "South America"],
    "answer": "Africa"
  },
  {
    "question": "What is the boiling point of water in Celsius?",
    "options": ["90°C", "100°C", "110°C", "120°C"],
    "answer": "100°C"
  },
  {
    "question": "Which sport is known as the 'king of sports'?",
    "options": ["Cricket", "Football (Soccer)", "Tennis", "Basketball"],
    "answer": "Football (Soccer)"
  },
  {
    "question": "Who was the first man to walk on the moon?",
    "options": ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
    "answer": "Neil Armstrong"
  },
  {
    "question": "Which gas do plants use for photosynthesis?",
    "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    "answer": "Carbon Dioxide"
  },
  {
    "question": "Which country gifted the Statue of Liberty to the USA?",
    "options": ["Germany", "France", "Italy", "Spain"],
    "answer": "France"
  },
  {
    "question": "What is the smallest prime number?",
    "options": ["0", "1", "2", "3"],
    "answer": "2"
  }
]

function Facts() {

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
export default Facts;