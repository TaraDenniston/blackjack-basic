import data from './CardData.jsx'
import Card from './Card.jsx'
import { mathRandom1to52 } from '../utils/random.js';
import '../styles/Game.css'

const Game = () => {
  // get two different random numbers from 1 to 52
  let one = mathRandom1to52();
  let two = mathRandom1to52();
  while (two === one) {
    two = mathRandom1to52();
  }

  // assign cards based on random numbers
  const cardOne = data.find(card => card.idx === one);
  const cardTwo = data.find(card => card.idx === two);

  // calculate score
  const score = cardOne.points + cardTwo.points;

  // determine message
  let message;
  if (score === 21) {
    message = <p>🎉🎉🎉 Blackjack!!! 🎉🎉🎉</p>;
  } else {
    message = <p>😞😞😞 You lost 😞😞😞<br></br>
    <small>Sorry, this is a stupid version of Blackjack. Refresh to try again.</small>
    </p>;
  }

  return (    
    <div className="Game">
      <div className="Game-cards">
        <Card id={cardOne.id} value={cardOne.value} suit={cardOne.suit}/>
        <Card id={cardTwo.id} value={cardTwo.value} suit={cardTwo.suit}/>
      </div>
      <p className="Game-score">Score: {score}</p>
      <p className="Game-message">{message}</p>
    </div>
  )
}

export default Game;