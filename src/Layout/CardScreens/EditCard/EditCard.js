import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import CardForm from "../CardForm";
import { readDeck, readCard } from "../../../utils/api/index"

function EditCard() {
    const { deckId, cardId } = useParams();
    // const history = useHistory();
    const [Deck, setDeck] = useState({})
    const [Card, setCard] = useState({})

    useEffect(() => {
        setDeck({})
        async function loadDeck() {
            const response = await readDeck(deckId)
            setDeck(response)
        }
        loadDeck();
    }, [deckId])

    useEffect(() => {
        setCard({})
        async function loadCard() {
            const response = await readCard(cardId)
            setCard(response)
        }
        loadCard();

    }, [cardId])

    // useEffect(() => {
    //     if (Card) {
    //         setFormData({front: Card.front, back: Card.back})
    //     }
    // }, [Card])

    // const initialFormState = {
    //     front: "",
    //     back: "",
    // }

    // const [formData, setFormData] = useState(initialFormState)

    // const handleChange = ({target}) => {
    //     setFormData({...formData, [target.name]: target.value})
    // }
    
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     console.log(formData)
    //     const response = await fetch(`http://localhost:8080/cards/${cardId}`, {method: "PUT", body: formData,})
    //     const cardFromAPI = await response.json();
    //     console.log(cardFromAPI)
    //     setFormData({...initialFormState})
    // }

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href={`/decks/${deckId}`}>{Deck.name}</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Edit Card {cardId}</li>
                </ol>
            </nav>
            <h2>Edit Card</h2>
            <CardForm deckId={deckId} card={Card} cardId={cardId}/>
            {/* <form onSubmit={handleSubmit}>
                <label htmlFor="front" className="form-label">
                    Front
                    <textarea id="front" name="front" className="form-control" onChange={handleChange} value={formData.front}/>
                </label>
                <label htmlFor="back" className="form-label">
                    Back
                    <textarea id="back" name="back" className="form-control" onChange={handleChange} value={formData.back}/>
                </label>
                <button type="submit" className="btn btn-primary">Save</button>
                <button type="button" className="btn btn-secondary" onClick={() => history.push(`/decks/${deckId}`)}>Done</button>
            </form> */}
        </div>
    )
}

export default EditCard;