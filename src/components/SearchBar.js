import React, { Component } from 'react';

class SearchBar extends Component {

  state = {
    alphaCheck: false,
    costCheck: false,
    filter: ''
  }
  
  alphaChange = () => {
    let prevAlphaState = this.state.alphaCheck

    this.setState({alphaCheck: !prevAlphaState, costCheck: false, filter: ''})
    this.filterOption()
  }

  priceChange = () => {
    let prevCostState = this.state.costCheck

    this.setState({alphaCheck: false ,costCheck: !prevCostState, filter: ''})
    this.filterOption()
  }

  filterOption = () => {
      const alphabetize = this.state.alphaCheck
      const costCheck = this.state.costCheck

      if(!alphabetize){
          this.props.alphabetizeStock()
      } else if(!costCheck) { 
        this.props.costOrderStock()
      }
  }

  filterState = (event) => {
    const word = event.target.value
    this.setState({alphaCheck: false, costCheck: false, filter: word})
    
    this.props.filterStock(word)
  } 
  
  render(){

    return(

    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={this.state.alphaCheck} onChange={this.alphaChange}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={this.state.costCheck} onChange={this.priceChange}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={this.filterState} >
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
    )
    }


  
}


export default SearchBar;
