// Politics.js
import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard'; 

const Politics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=1370e393f3764ce9af5ebf39c16e2b23');
      const jsonData = await response.json();
      console.log(jsonData); 
      setData(jsonData.articles); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleImageClick = (url) => {
    window.open(url, '_blank'); 
  };

  const handleImageTouch = (url) => {
    window.open(url, '_blank'); 
  };

  return (
    <div>
      <h2>Politics Page</h2>
     
      <div className="news-container">
        {Array.isArray(data) ? (
          data.map((article, index) => (
            <div 
              key={index} 
              onClick={() => handleImageClick(article.url)}
              onTouchStart={() => handleImageTouch(article.url)}
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
