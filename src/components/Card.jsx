import '../styles/Card.css'

const Card = ({id, value, suit}) => {
  let cardImg = `https://deckofcardsapi.com/static/img/${id}.png`;
  let cardAlt = `${value} of ${suit}`;

  return (    
    <div className="Card">
      <img className="Card-img" src={cardImg} alt={cardAlt}/>
    </div>
  )
}

export default Card