import React from 'react';
import { FaStar } from 'react-icons/fa';

const createArray = length => [...Array(length)];

const Star = ({ selected = false }) => (
  <FaStar color={selected ? "red" : "grey"}  size={30}/>
);

function StarRating({totalStars = 5}) {
    return createArray(totalStars).map((n, i) => (
        <Star key={i} selected={i < 3} />
    ));
}

export default StarRating;