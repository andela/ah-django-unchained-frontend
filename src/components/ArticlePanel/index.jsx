import React from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const ArticlePanel = () => {
  return (
    <div>
      <div className="card bg-secondary text-white">
        <div className="card-body">
          <h4 className="card-title">Article title</h4>
          <p className="card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <a href="/" className="card-link btn btn-info">
            <FaThumbsUp />
          </a>
          <a href="/" className="card-link btn btn-info">
            <FaThumbsDown />
          </a>
          <a href="/" className="card-link  btn btn-info">Read</a>
          <a href="/" className="card-link  btn btn-info">Bookmark</a>
        </div>
      </div>
      <br />
    </div>
  );
};

export default ArticlePanel;
