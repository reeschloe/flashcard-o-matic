import React from "react";
import { useHistory } from "react-router-dom";
import {deleteDeck} from "../../utils/api/index"

function DeckView({deck}) {
    const history = useHistory();

    const handleDelete = async (id) => {
        const result = window.confirm("Are you sure you want to delete this card?");
        if (result) {
            await deleteDeck(id)
            history.go(0)
        }
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{deck.name}</h5>
                <h6 className="card-subtitle">{deck.cards.length} cards</h6>
                <p className="card-text">{deck.description}</p>
                <button className="btn btn-secondary" onClick={() => history.push(`/decks/${deck.id}`)}>View</button>
                <button className="btn btn-primary" onClick={() => history.push(`/decks/${deck.id}/study`)}>Study</button>
                <button className="btn btn-danger" onClick={() => handleDelete(deck.id)}>Delete</button>
            </div>
        </div>
    )
}

export default DeckView;