import { useState } from 'react';
import { createArray } from './lib';
import Star from './star';

function StarRating({ totalStars = 5, style = {}, ...props }) {
  const [selectedStars, setSelectedStars] = useState(0);
  const stars = createArray(totalStars);

  return (
    <div style={{ ...style }} {...props}>  
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
    </div>
  );
}

export default StarRating;