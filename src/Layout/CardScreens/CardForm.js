import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { updateCard, createCard } from "../../utils/api/index"

function CardForm({cardId = "", deckId, card = ""}) {
    const history = useHistory();

    useEffect(() => {
        if (card) {
            setFormData({front: card.front, back: card.back, id: card.id})
        }
    }, [card])

    const initialFormState = {
        id: "",
        front: "",
        back: "",
        deckId: deckId,
    }

    const [formData, setFormData] = useState(initialFormState)

    const handleChange = ({target}) => {
        setFormData({...formData, [target.name]: target.value, deckId: Number(deckId)})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        cardId ? await updateCard(formData) : await createCard(deckId, formData)
        cardId ? history.push(`/decks/${deckId}`) : setFormData({...initialFormState})
    }

    return (
        <form onSubmit={handleSubmit}>
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
        </form>
    )
}

export default CardForm;