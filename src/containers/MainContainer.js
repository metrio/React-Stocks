import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    apiResponse: [],
    portfolioStocks: [],
    filteredStocks: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
    .then(resp=>resp.json())
    .then(arrayofStocks => this.setState({apiResponse: arrayofStocks, filteredStocks: arrayofStocks}))
    .catch(console.log)
  }

  addToPortfolio = (stockObject) => {
    const prevState = this.state.portfolioStocks
    !prevState.includes(stockObject) ? this.setState({portfolioStocks: [...this.state.portfolioStocks, stockObject]}) : null
  }
  
  removeFromPortfolio = (stockObject) => {
    const prevState = this.state.portfolioStocks
    const newPortfolio = prevState.filter(stock => stock.id !== stockObject.id)
    this.setState({portfolioStocks: newPortfolio})
  }

 
  alphabetizeStock = () => {
      const prevState = this.state.apiResponse
      const newArray = prevState.sort((a,b) => a.name > b.name ? 1 : -1)
      
      this.setState({filteredStocks: newArray})
      
  }

  costOrderStock = () => {
    const prevState = this.state.apiResponse
    const newArray = prevState.sort(function(a, b){return b.price - a.price })
    
    this.setState({filteredStocks: newArray})
  }

  
  filterStock = (word) => {
    const filtered = this.state.apiResponse.filter(cardEl => cardEl.type.includes(word))   
    this.setState({filteredStocks: filtered})
    }
  


  render() {
    return (
      <div>
        <SearchBar alphabetizeStock={this.alphabetizeStock} costOrderStock={this.costOrderStock} filterStock={this.filterStock}/>

          <div className="row">
            <div className="col-8">

              <StockContainer portfolioToggle={this.addToPortfolio} stockArray={this.state.filteredStocks}/>

            </div>
            <div className="col-4">
    
              <PortfolioContainer portfolioToggle={this.removeFromPortfolio} portfolioStocks={this.state.portfolioStocks}/>
                
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
