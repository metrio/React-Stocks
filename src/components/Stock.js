import React, { Component } from 'react'

class Stock extends Component{
  
  state = {
      beenAdded: false
  }

  
  portfolioToggle = () => {
      this.props.portfolioToggle(this.props.stockObject)
  }

  render () {
   
    const stockObject = this.props.stockObject

    return (

      <div>
          <div className="card" onClick={this.portfolioToggle}>
            <div className="card-body">
              <h5 className="card-title">{stockObject.name}</h5>
              <p className="card-text">{stockObject.price}</p>
            </div>
          </div>
      </div>
         
    )

  }

 

}//end of class

export default Stock
