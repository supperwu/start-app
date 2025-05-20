import React from "react";
import StarRating from "./StarRating";

function Color({title, color, rating}){
    return (
        <section>
            <h2>{title}</h2>
            <div style={{backgroundColor: color, height: 50}}></div>
            <StarRating totalStars={5} rating={rating} />
        </section>
    );
}

export default Color;
