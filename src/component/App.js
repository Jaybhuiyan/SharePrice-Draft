import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import NewsGrid from './NewsGrid';
//import StockData from './StockData';


function App() {
  const [companyName, setCompanyName] = useState('');
  const [stockData, setStockData] = useState(null);
  const [newsData, setNewsData] = useState(null);
  const ALPHA_VANTAGE_API_KEY = 'PKVQPXPSWS0YKODA';
  const NEWS_API_KEY = '75147095716a430bbdc8af994b922f95';

  useEffect(() => {
    const fetchData = async () => {
      if (companyName) {
        try {
          const ticker = await getTicker(companyName);
          if (ticker) {
            const response = await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${ALPHA_VANTAGE_API_KEY}`);
            const result = response.data['Global Quote'];
            if (result) {
              setStockData({
                symbol: result['01. symbol'],
                price: result['05. price'],
                longName: '',
              });
            } else {
              setStockData(null);
            }
            const newsResponse = await axios.get(`https://newsapi.org/v2/everything?q=${companyName}&pageSize=3&page=1&apiKey=${NEWS_API_KEY}`);
            const newsData = newsResponse.data;
            if (newsData.articles.length > 0) {
              setNewsData(newsData.articles);
            } else {
              setNewsData(null);
            }
          } else {
            setStockData(null);
            setNewsData(null);
          }
        } catch (error) {
          console.error(error);
        }
      } else {
        setStockData(null);
        setNewsData(null);
      }
    };
    fetchData();
  }, [companyName]);

  const getTicker = async (companyName) => {
    try {
      const response = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${companyName}&apikey=${ALPHA_VANTAGE_API_KEY}`);
      const matches = response.data.bestMatches;
      if (matches.length > 0) {
        return matches[0]['1. symbol'];
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCompanyName(e.target.search.value);
  };

  return (
    <div className="App">
      <form onSubmit={handleSearch}>
        <input type="text" name="search" />
        <button type="submit" class="search-button">Search</button>

      </form>
      {stockData && <p>Symbol: {stockData.symbol}</p>}
      {stockData && <p>Price: {stockData.price}</p>}
      {!stockData && <p className="message-f">No data available;</p>}
      {!stockData && <p className="message">Type only the company name or stock market ticker symbol;</p>}
      {newsData && <NewsGrid newsData={newsData} />}
    </div>
  );
}

export default App;
