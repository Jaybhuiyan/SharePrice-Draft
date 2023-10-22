import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import Clock from "./component/Clock";
import App from "./component/App";
import CompanyTable from "./component/CompanyTable";
//import CenteredLayout from "./component/CenteredLayout";
//import CompanyNameToTicker from "./component/CompanyNameToTicker";
import StockData from "./component/StockData";

const MainApp = () => {
  return (
    <div>
      <Clock />
      <StockData />
      <App />
      <CompanyTable />
    </div>
  );
}

ReactDOM.render(
  <MainApp />,
  document.querySelector('#root')
);
