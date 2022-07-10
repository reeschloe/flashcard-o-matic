import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function Cards({cards}) {
    const numberOfCards = cards.length;
    const [Side, setSide] = useState("front")
    const [CardIndex, setCardIndex] = useState(0)
    const history = useHistory();
    

    const handleFlip = () => {
        if (Side === "front") setSide("back")
        else setSide("front")
    }

    const handleNext = () => {
        setCardIndex((currentIndex) => {
            if (currentIndex === numberOfCards - 1) {
                if(window.confirm("Restart cards?")) {
                    return 0;
                } else {
                    history.push("/");
                    return 0;
                }
            } else {
                return currentIndex + 1
            } 
        })  
        setSide("front")
    }
    
    const card = cards[CardIndex]

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Card {CardIndex + 1} of {numberOfCards}</h5>
                <p className="card-text">{card && Side === "front" ? card.front : card.back}</p>
                <button className="btn btn-secondary" onClick={handleFlip}>Flip</button>
                {card && Side === "back" ? <button className="btn btn-primary" onClick={handleNext}>Next</button> : null}
            </div>
        </div>
    )
}

export default Cards;