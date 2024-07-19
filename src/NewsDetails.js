// NewsDetails.js
import React from 'react';

const NewsDetails = ({ article, onClose }) => {
  return (
    <div className="news-details">
      <button onClick={onClose}>Close</button>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default NewsDetails;
