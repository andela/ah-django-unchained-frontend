import React from 'react';
import { FaStar, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import StarRatings from 'react-star-ratings';
import './ArticlePanel.scss';

const ArticlePanel = ({ article, isPublished }) => {
  return (
    <div className="container" key={article.id}>
      <div className="card bg-secondary text-white">
        <div className="card-body">
          <h2 className="card-title">{article.title}</h2>
          <span id="rating">
            <StarRatings
              rating={article.average_rating}
              name='rating'
              starDimension='20px'
              starRatedColor='white'
            />
          </span>
          <p className="card-text">{ReactHtmlParser(article.body)}</p>
          {isPublished &&
            <React.Fragment>
              <Link to='/' className='card-link btn btn-info'>
                <FaThumbsUp />
              </Link>
              <Link to='/' className='card-link btn btn-info'>
                <FaThumbsDown />
              </Link>
              <Link to='/' className='card-link btn btn-info'>
                Bookmark
              </Link>
              <Link to={`/article/${article.slug}`} className='card-link btn btn-info'>
                Read more
              </Link>
              <span className="card-link"> Rate article </span>
              <Link to='/' className='card-link text-warning'>
                <FaStar />
              </Link>
              <Link to='/' className='card-link text-warning'>
                <FaStar />
              </Link>
              <Link to='/' className='card-link text-warning'>
                <FaStar />
              </Link>
              <Link to='/' className='card-link text-warning'>
                <FaStar />
              </Link>
            </React.Fragment>}

        </div>
      </div>
    </div>
  );
};

export default ArticlePanel;
