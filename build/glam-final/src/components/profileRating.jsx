import React, { useState } from 'react';
import { useUsersContext } from '../contexts/UsersContext';
import { FaStar } from 'react-icons/fa';
// rating, hover, setRating, setHover, id
const Rate = ({ id }) => {
  const { usersDispatch } = useUsersContext();
  // const { liveUser } = usersCurrentState;
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const rateUser = ratingValue => {
    setRating(ratingValue);
    usersDispatch({
      type: 'RATED_USER',
      rating: ratingValue,
      id,
    });

    if (ratingValue === 5) {
      window.alert('GREAT');
    }
    if (ratingValue === 4) {
      window.alert('GOOD');
    }
    if (ratingValue === 3) {
      window.alert('SO-SO');
    }
    if (ratingValue === 2) {
      window.alert('NOT SO GOOD');
    }
    if (ratingValue === 1) {
      window.alert('NOT MY STYLE');
    }
  };
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              style={{ display: 'none' }}
              onClick={() => rateUser(ratingValue)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              size={40}
              // style={{ cursor: 'pointer', transition: { color: '200ms' } }}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rate;
