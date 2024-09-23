import React from 'react'
import Card from "./Card.jsx"
import burgerKing from "../assets/burgerKing.jpg"

const cards = [
    { id: 1, name: 'Burger King', image: burgerKing },
    { id: 2, name: 'McDonald’s', image: '/path/to/mcdonalds.jpg' },
    { id: 3, name: 'Wendy’s', image: '/path/to/wendys.jpg' },
    { id: 4, name: 'Burger King', image: burgerKing },
    { id: 5, name: 'McDonald’s', image: '/path/to/mcdonalds.jpg' },
    { id: 6, name: 'Wendy’s', image: '/path/to/wendys.jpg' },
    { id: 7, name: 'Burger King', image: burgerKing },
    { id: 8, name: 'McDonald’s', image: '/path/to/mcdonalds.jpg' },
    { id: 9, name: 'Wendy’s', image: '/path/to/wendys.jpg' },
    // Add more cards as needed
];

const CardGrid = () => {
    return (
        <div className="CardGrid">
            {cards.map((card) => (
                <Card key={card.id} name={card.name} image={card.image}/>
            ))}
        </div>
    );
};

export default CardGrid;