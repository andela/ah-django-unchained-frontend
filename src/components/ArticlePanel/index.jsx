import React from 'react';
import { Link } from 'react-router-dom';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import ReactHtmlParser from 'react-html-parser';
import TruncateMarkup from 'react-truncate-markup';
import StarRatingComponent from 'react-star-rating-component';
import { Button } from '../Button/index';
import './ArticlePanel.scss';

const ArticlePanel = ({ article, isPublished }) => {
  return (
    <div className="container">
      <div className="col-sm-8" key={article.id}>
        <div className="card">
          <div className="card-body">
            <img
              src={
                article.images ||
                'https://www.maketecheasier.com/assets/uploads/2018/02/mac-no-camera-feature-image.png'
              }
              alt=""
            />
            <h4 className="card-title">{article.title}</h4>
            <TruncateMarkup lines={3}>
              <p className="card-text">{ReactHtmlParser(article.body)}</p>
            </TruncateMarkup>
            <Link to={'/article/' + article.slug} isPublished={isPublished}>
              <Button className="btn btn-info" text="Read" />
            </Link>

            {isPublished && (
              <React.Fragment>
                <a href="/" className="card-link btn btn-info">
                  <FaThumbsUp />
                </a>
                <a href="/" className="card-link btn btn-info">
                  <FaThumbsDown />
                </a>
                <a href="/" className="card-link btn btn-info">
                  Bookmark
                </a>
                <span className="card-link">
                  {' '}
                  Rating 
                  {' '}
                  {article.average_rating}
                </span>
                <span>
                  <StarRatingComponent
                    name="rate2"
                    editing={false}
                    starCount={5}
                    starColor="#58d4e8"
                    emptyStarColor="grey"
                    value={article.average_rating}
                  />
                </span>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePanel;
