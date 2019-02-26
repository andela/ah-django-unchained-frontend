import React from 'react';
import { FaStar, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const ArticlePanel = ({ article }) => {
  return (
    <div className="container" key={article.id}>
      <div className="card bg-secondary text-white">
        <div className="card-body">
          <h4 className="card-title">{article.title}</h4>
          <a href="/" className="card-link text-warning">
            <FaStar />
          </a>
          <a href="/" className="card-link text-warning">
            <FaStar />
          </a>
          <a href="/" className="card-link text-warning">
            <FaStar />
          </a>
          <p className="card-text">{article.body}</p>
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
        </div>
      </div>
    </div>
  );
};

export default ArticlePanel;
