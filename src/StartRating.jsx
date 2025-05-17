import React from 'react';
import { FaStar } from 'react-icons/fa';

function StarRating() {
    return [
        <FaStar color='red' size={50} />,        
        <FaStar color='red' size={50} />,
        <FaStar color='gray' size={50} />,
        <FaStar color='gray' size={50} />,
        <FaStar color='gray' size={50} />
    ];
}

export default StarRating;