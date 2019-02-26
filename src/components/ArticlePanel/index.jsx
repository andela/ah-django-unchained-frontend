import React from 'react';
import TruncateMarkup from 'react-truncate-markup';
import { FaStar, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import './ArtclePanel.scss';
import ReactHtmlParser from 'react-html-parser';

const ArticlePanel = ({ article, isPublished }) => {
  return (
    <div className="container">
    <div className="col-sm-8" key={article.id}>
      <div className="card">
        <div className="card-body">
          
            <img  src={article.images || 'https://cdn.shopify.com/s/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_1024x1024.gif'} alt='' />
              <h4 className="card-title">{article.title}</h4>
              <TruncateMarkup lines={2}>
                <p className="card-text">{ReactHtmlParser(article.body)}</p>
              </TruncateMarkup>
              {isPublished && (
                <React.Fragment>
                  <a href="/" className="card-link btn btn-info">
                    <FaThumbsUp />
                  </a>
                  <a href="/" className="card-link btn btn-info">
                    <FaThumbsDown />
                  </a>
                  <a href="/" className="card-link btn btn-info">
                  Read
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
