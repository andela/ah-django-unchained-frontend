import React from 'react';
import { FaStar, FaThumbsUp, FaThumbsDown  } from 'react-icons/fa';

const ArticleDetail = () => {
  return (
    <div className="container">
      <div className="card bg-light text-dark">
        <div className="card-body">
          <h4 className="card-title">Article title</h4>
          <a href="/" className="card-link text-warning"><FaStar /></a>
          <a href="/" className="card-link text-warning"><FaStar /></a>
          <a href="/" className="card-link text-warning"><FaStar /></a>
          <p className="card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p className="card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
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
          <a href="/" className="card-link btn btn-info">Read</a>
          <a href="/" className="card-link btn btn-info">Bookmark</a>
          <span className="card-link"> Rating </span>
          <a href="/" className="card-link text-warning"><FaStar /></a>
          <a href="/" className="card-link text-warning"><FaStar /></a>
          <a href="/" className="card-link text-warning"><FaStar /></a>
          <a href="/" className="card-link text-warning"><FaStar /></a>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
