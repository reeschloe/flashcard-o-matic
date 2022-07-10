import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { readDeck } from "../../../utils/api/index";
import CardForm from "../CardForm"

function AddCard() {
    const { deckId } = useParams();
    // const history = useHistory();
    const [Deck, setDeck] = useState({})
    // const initialFormState = {
    //     front: "",
    //     back: "",
    //     deckId: deckId,
    // }
    // const [formData, setFormData] = useState(initialFormState)

    // const handleChange = ({target}) => {
    //     setFormData({...formData, [target.name]: target.value})
    // }

    useEffect(() => {
        setDeck({})
        async function loadDeck() {
            const response = await readDeck(deckId)
            setDeck(response)
        }
        loadDeck();
    }, [deckId])

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     console.log(formData)
    //     const response = await fetch(`http://localhost:8080/cards`, {method: "POST", body: formData,})
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
                    <li className="breadcrumb-item active" aria-current="page">Add Card</li>
                </ol>
            </nav>
            <h2>{Deck.name}: Add Card</h2>
            <CardForm deckId={deckId} />
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

export default AddCard;