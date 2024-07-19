// World.js
import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard'; // Import the NewsCard component

const World = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1370e393f3764ce9af5ebf39c16e2b23');
      const data = await response.json();
      setData(data.articles); // Store articles in the data state variable
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
      <h2>World Page</h2>
      {/* Render data fetched from the World API */}
      <div className="news-container">
        {data.map((article, index) => (
          <div 
            key={index} 
            onClick={() => handleImageClick(article.url)}
            onTouchStart={() => handleImageTouch(article.url)} // Handle touch event
          >
            <NewsCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default World;
