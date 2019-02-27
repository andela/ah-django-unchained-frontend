import React from 'react';
import PropTypes from 'prop-types';
import './LikeDislikeArticle.scss';

export const LikeDislikeArticle = ({ like, dislike, article }) => {
  return (
    <div>
      <button type="button" className="fa fa-thumbs-up fa-2x" onClick={like} />
      {article.likes_count}
      <button
        type="button"
        className="fa fa-thumbs-down fa-2x"
        onClick={dislike}
      />
      {article.dislikes_count}
    </div>
  );
};
LikeDislikeArticle.propTypes = {
  like: PropTypes.PropTypes.object.isRequired,
  dislike: PropTypes.PropTypes.object.isRequired,
  article: PropTypes.PropTypes.object.isRequired
};
export default LikeDislikeArticle;
