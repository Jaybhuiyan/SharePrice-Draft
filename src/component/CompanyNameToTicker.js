import React, { useState } from 'react';
import axios from 'axios';

function CompanyNameToTicker(props) {
  const [ticker, setTicker] = useState(null);
  const [error, setError] = useState(null);
  const API_URL = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete';

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${API_URL}?q=${props.companyName}&region=US`, {
        headers: {
          'x-rapidapi-key': '42212e6b88msh64fb60479c697a7p173f90jsn36f9959355fe',
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
      });
      const result = response.data.quotes[0];
      if(result){
        setTicker(result.symbol);
      } else {
        setError('No data available.');
      }
    } catch (error) {
      setError('Error fetching data.');
    }
  };

  if (error) {
    return <div>{error}</div>;
  } else if (ticker) {
    return <div>{ticker}</div>;
  } else {
    return <button onClick={handleSearch}>Get Ticker</button>;
  }
}

export default CompanyNameToTicker;
