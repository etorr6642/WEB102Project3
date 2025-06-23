import './App.css';
import React, { useEffect, useState } from 'react';
//question about the first 151 Pokémon
const questions = [
  {
    question: "What is the very first Pokémon in the Pokédex?",
    answer: "Bulbasaur",
    image: "/bulb.jpg"
  },
  {
    question: "Which Pokémon evolves into Charizard?",
    answer: "Charmeleon",
    image: "/charmeleon.jpg"
  },
  {
    question: "Which water Pokémon can evolve from Eevee in Gen 1?",
    answer: "Vaporeon",
    image: "/vaporeon.jpg"
  },
  {
    question: "What type is Pikachu?",
    answer: "Electric",
    image: "/pika.jpg"
  },
  {
    question: "Which legendary bird is Ice/Flying-type?",
    answer: "Articuno",
    image: "/arti.png"
  },
  {
    question: "Which Pokémon has a skull on its head as part of its body?",
    answer: "Cubone",
    image: "/cubone.png"
  },
  {
    question: "What is the final evolution of Charmander?",
    answer: "Charizard",
    image: "/charizard.png"
  },
  {
    question: "Which Pokémon is number 151 in the Pokédex?",
    answer: "Mew",
    image: "/mew.png"
  },
  {
    question: "Which Pokémon evolves into Gyarados?",
    answer: "Magikarp",
    image: "/magikarp.jpg"
  },
  {
    question: "Which fossil Pokémon evolves into Omastar?",
    answer: "Omanyte",
    image: "/omanyte.jpg"
  },
  {
    question: "Which Psychic-type Pokémon is known for its spoons?",
    answer: "Alakazam",
    image: "/alakazam.jpg"
  },
  {
    question: "Which Pokémon is known for helping at the Pokémon Center?",
    answer: "Chansey",
    image: "/chansey.png"
  },
  {
    question: "Which Pokémon is known for putting people to sleep with a song?",
    answer: "Jigglypuff",
    image: "/jigglypuff.jpg"
  },
  {
    question: "Which Pokémon is the original form of Raichu?",
    answer: "Pikachu",
    image: "/pika.jpg"
  },
  {
    question: "Which Pokémon does Team Rocket's Jessie often use in the anime?",
    answer: "Ekans",
    image: "/ekans.jpg"
  },
  {
    question: "Which Pokémon is known to sleep a lot?",
    answer: "Snorlax",
    image: "/snorlax.jpg"
  },
  {
    question: "Which Pokémon is known as the 'Evolution Pokémon'?",
    answer: "Eevee",
    image: "/eevee.jpg"
  },
  {
    question: "Which dual-type Bug/Flying Pokémon evolves from Caterpie?",
    answer: "Butterfree",
    image: "/butterfree.png"
  },
  {
    question: "Which Dragon-type Pokémon is the final evolution of Dratini?",
    answer: "Dragonite",
    image: "/dragonite.jpg"
  },
  {
    question: "Which Pokémon is known for its powerful psychic abilities?",
    answer: "Mewtwo",
    image: "/mewtwo.png"
  },

];

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

const App = () => {
  // State variables
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  // shuffle state variable and useEffect to set the initial shuffled questions
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    setShuffledQuestions(questions);
    setCurrentQuestion(0);
  }
  , []);



//function to flip the card and show the answer
  const flipCard = () => {
    setShowAnswer(!showAnswer);
  }


  return (
    <div className="App">
      {/* header information */}
      <div className="header">
        {/* title */}
        <h1 className='=title'>The Ultimate Pokémon Trainer</h1>
        <h2>Kanto Region</h2>
        {/* Description */}
        <p>How well do you know your Pokémon? Test your knowledge of the original 151 Pokémon here!</p>
        {/* Number of cards in the deck */}
        <p>Number of cards: {questions.length} </p>
      </div>

      
       {/* create a card that looks like it is flipping when clicked */}
      <div className ='card-flip-container' >
        
        {/* inner card that determins if it is flipped or not */}
        <div className={`card-inner ${showAnswer ? 'flipped' : ''}`}>
          {/* front card information- question */}
          <div className="front card">
            {/* display card number */}
            <div className='card-number'>
              <h3>Card {currentQuestion+1 } of {questions.length}</h3>
            </div>
            <div className='card-question'>
              <h2>{questions[currentQuestion].question}</h2>
            </div>
          </div>
          {/* Back card information - answer */}
          <div className="back card">
            <div className="answer">
              <h3>{questions[currentQuestion].answer}</h3>
              <img src={questions[currentQuestion].image} alt={questions[currentQuestion].answer} />
            </div>
          </div>
        </div>
      </div>
      
      {/* allow user to enter an answer and submit with a button */}
      <div className='answerInput'>
        <input type="text" placeholder="Type your answer here..." />
        <button onClick={() => {
          //check if the input matches part of the answer
          if (document.querySelector('input').value.trim() === '') {
            alert("Please enter an answer before submitting.");
            return;
          }
          const userAnswer = document.querySelector('input').value.trim().toLowerCase();
          const correctAnswer = questions[currentQuestion].answer.trim().toLowerCase();
          if (userAnswer === correctAnswer) {
            alert("Correct!");
          } else {
            alert(`Incorrect! The correct answer is: ${questions[currentQuestion].answer}`);
          }
          // clear the input field
          document.querySelector('input').value = '';
          // flip the card to show the answer
          setShowAnswer(true);
          
        }}>Submit Answer</button>
      </div>

      {/* buttons to go to next question or previous question */}
      <div className='nextPrevious'>
         {/* button to go to the previous question */}
        <button className="prev" onClick={() => {
          setShowAnswer(false);
          // set a timeout to make it look like the card is flipping
          setTimeout(() => {
            if(currentQuestion-1>=0){
            setCurrentQuestion((currentQuestion - 1 ));
          }else{
            //disable the button if there are no previous questions
            alert("No previous questions");
          }
          },200)
          
        }}>
          Previous Question
        </button>
        {/* button to go to the next question */}
        <button className="next" onClick={() => {
          setShowAnswer(false);
          // set a timeout to make it look like the card is flipping
          setTimeout(() => {
            if(currentQuestion+1<questions.length){
              setCurrentQuestion(currentQuestion + 1);
            }else{
              //disable the button if there are no previous questions
              alert("No more questions");
            }
            // else{
            //   const reshuffle = [...questions].sort(() => Math.random() - 0.5);
            //   setShuffledQuestions(reshuffle);
            //   setCurrentQuestion(0);  
            // }
          }, 200)
          
        }}>
          Next Question
        </button>
      </div>


    </div>
  )
}

export default App