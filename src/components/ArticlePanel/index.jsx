import React from 'react';
import { Link}  from 'react-router-dom';
import { FaStar, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import ReactHtmlParser from 'react-html-parser';
import TruncateMarkup from 'react-truncate-markup';
import { Button } from '../Button/index';
import './ArticlePanel.scss';
// import ArticleDetai  l from '../../pages/ArticleDetail/index';

const ArticlePanel = ({ article,isPublished }) => {
  return (
    <div className="container">

      <div className="col-sm-8" key={article.id}>
        <div className="card">
          <div className="card-body">
            <img src={article.images || 'https://www.maketecheasier.com/assets/uploads/2018/02/mac-no-camera-feature-image.png'} alt='' />
            <h4 className="card-title">{article.title}</h4>
            <TruncateMarkup lines={3}>
              <p className="card-text">{ReactHtmlParser(article.body)}</p>
            </TruncateMarkup>
            <Link to={'/article/'+article.slug} isPublished={isPublished}>
              <Button 
                className='btn btn-info'
                text='Read'
              />
                    
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
              <span className="card-link"> Rating </span>
              <a href="/" className="card-link text-warning">
                <FaStar />
              </a>
              <a href="/" className="card-link text-warning">
                <FaStar />
              </a>  
              <a href="/" className="card-link text-warning">
                <FaStar />
              </a>
              <a href="/" className="card-link text-warning">
                <FaStar />
              </a>
            </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePanel;