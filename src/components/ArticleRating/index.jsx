import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

export const AverageRating = ({ value }) => (
  <div>
    <StarRatingComponent
      editing={false}
      starCount={5}
      starColor="green"
      emptyStarColor="Grey"
      value={value}
    />
  </div>
);

const ArticleRating = ({ onStarClick, rating }) => (
  <div>
    <StarRatingComponent
      starColor="green"
      emptyStarColor="Grey"
      starCount={5}
      value={rating}
      onStarClick={onStarClick}
    />
  </div>
);

export default ArticleRating;
