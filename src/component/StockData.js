import React from 'react';

function StockData(props) {
  return (
    <div>
      <h2>{props.symbol}</h2>
      <p>{props.price}</p>
    </div>
  );
}

export default StockData;
