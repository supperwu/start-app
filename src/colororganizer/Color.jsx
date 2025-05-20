import React from "react";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";

function Color({
    id, title, color, rating,
    onRemove = f => f,
    onRate = f => f }) {
    return (
        <section>
            <h2>{title}</h2>
            <button onClick={() => onRemove(id)}>
                <FaTrash />
            </button>
            <div style={{ backgroundColor: color, height: 50 }}></div>
            <StarRating totalStars={5} rating={rating} onRate={rate => onRate(id, rate)} />
        </section>
    );
}

export default Color;
