import React, { Component } from 'react';
import Stock from '../components/Stock'

function PortfolioContainer(props) {

const portfolioArray = () => {
  let portfolioStocks = props.portfolioStocks
   return portfolioStocks.map(stockEl => <Stock key={stockEl.id} stockObject={stockEl} portfolioToggle={props.portfolioToggle} />)
 }


 
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            portfolioArray()
          }
      </div>
    );
  

}

export default PortfolioContainer;
