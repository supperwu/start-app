import React from 'react';
import { createArray } from '../lib';
import Star from './Star';

function StarRating({ totalStarts = 5, rating = 0}) {
    const stars = createArray(totalStarts);
    return (
        <div>
            {stars.map((_, index) => (
                <Star
                    key={index}
                    selected={rating > index}
                />
            ))}
            <p>
                {rating} of {totalStarts} stars
            </p>
        </div>
    );
}

export default StarRating;