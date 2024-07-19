// Politics.js
import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard'; // Make sure to import NewsCard component

const Politics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=1370e393f3764ce9af5ebf39c16e2b23');
      const jsonData = await response.json();
      console.log(jsonData); // Log the data fetched from the API
      setData(jsonData.articles); // Assuming the articles array is what you want to map over
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleImageClick = (url) => {
    window.open(url, '_blank'); // Open the news article in a new tab
  };

  const handleImageTouch = (url) => {
    window.open(url, '_blank'); // Open the news article in a new tab
  };

  return (
    <div>
      <h2>Politics Page</h2>
      {/* Render data fetched from the Politics API */}
      <div className="news-container">
        {Array.isArray(data) ? (
          data.map((article, index) => (
            <div 
              key={index} 
              onClick={() => handleImageClick(article.url)}
              onTouchStart={() => handleImageTouch(article.url)} // Handle touch event
            >
              <NewsCard article={article} />
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default Politics;
