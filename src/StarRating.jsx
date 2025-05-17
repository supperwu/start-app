import { useState } from 'react';
import { createArray } from './lib';
import Star from './star';

function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  const stars = createArray(totalStars);

  return (
    <>
      {/* _n 为当前元素值，这里都是undefined, 我们使用不到 */}
      {stars.map((_n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onClick={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}

export default StarRating;