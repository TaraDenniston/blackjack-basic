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

  return (    
    <div className="Game">
      <Card id={cardOne.id} value={cardOne.value} suit={cardOne.suit}/>
      <Card id={cardTwo.id} value={cardTwo.value} suit={cardTwo.suit}/>
    </div>
  )
}

export default Game