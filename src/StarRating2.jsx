import { useState } from 'react';
import { createArray } from './lib';
import Star from './star';
import MyButton from './MyButton';
import Profile from './Profile';
import Parent from './LifecycleDemo';
import TimerDemo from './TimerDemo';

function StarRating({ totalStars = 5, style = {}, ...props }) {
  const [selectedStars, setSelectedStars] = useState(0);
  const stars = createArray(totalStars);
  const resetButtonContent = "Reset";

  function onResetClick() {
    setSelectedStars(0);
  }

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
      <MyButton content={resetButtonContent} onClick={onResetClick}/>
      <hr />
      <Profile />
      <hr/>
      <Parent name="Alice" />

      <hr/>
      <TimerDemo />
    </div>
  );
}

export default StarRating;