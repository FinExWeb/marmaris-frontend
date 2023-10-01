// Ball.js
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function Ball({ ratingProp }) {
  const [rating, setRating] = useState(ratingProp);
  const [hover, setHover] = useState(null);

  return (
    <div className='ball'>
      <section>
        <div className='stars'>
          <button>
            {[...Array(5)].map((star, index) => {
              const currentRating = index + 1;
              return (
                <label className='active-star' key={currentRating}>
                  <input
                    type='radio'
                    name='rating'
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                  />
                  <FaStar
                    className='star'
                    size={25}
                    color={currentRating <= (hover || rating) ? '#ffc800' : '#898989'}
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </button>
        </div>
      </section>
    </div>
  );
}

export default Ball;
