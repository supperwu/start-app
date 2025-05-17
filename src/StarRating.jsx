import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const createArray = length => [...Array(length)];

const Star = ({ selected = false }) => (
  <FaStar color={selected ? "red" : "grey"} size={30} />
);

function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(3);
  const stars = createArray(totalStars);

  return (
    <>
      {stars.map((n, i) => (
        <Star key={i} selected={i < 3} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}

export default StarRating;