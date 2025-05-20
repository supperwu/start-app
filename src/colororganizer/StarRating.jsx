import React from 'react';
import { createArray } from '../lib';
import Star from './Star';

function StarRating({ totalStarts = 5, rating = 0,onRate = f => f }) {
    const stars = createArray(totalStarts);
    return (
        <div>
            {
                stars.map((_, index) => (
                    <Star
                        key={index}
                        selected={rating > index}
                        onClick={() => onRate(index + 1)}
                    />
                ))
            }
            <p>
                {rating} of {totalStarts} stars
            </p>
        </div>
    );
}

export default StarRating;