import React, { Component } from 'react';
import Stock from '../components/Stock'

const StockContainer = (props) => {



 const stockArrayCards = () => {
   let stockArray = props.stockArray
    return stockArray.map(stockEl => <Stock key={stockEl.id} stockObject={stockEl} portfolioToggle={props.portfolioToggle}/>)
 }


  
    return (
      <div>
        <h2>Stocks</h2>
        {stockArrayCards()}
      </div>
    );
  

}

export default StockContainer;
