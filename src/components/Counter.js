import React, { Component } from 'react'

class Counter extends Component {
  render() {
    return (
      <div className="container animated fadeIn">
        <h2 className="animated fadeInDown"> Redux Counter </h2>
        <h1 className="value animated fadeIn">{this.props.value}</h1>
        <div className="buttons animated fadeInUp">
          <button className="hvr-radial-out" onClick={this.props.minusFive}>-5</button>
          <button className="hvr-radial-out" onClick={this.props.onDecrement}>-1</button>
          <button className="hvr-radial-out" onClick={this.props.zero}> 0 </button>
          <button className="hvr-radial-out" onClick={this.props.onIncremenet}>+1</button>
          <button className="hvr-radial-out" onClick={this.props.plusFive}>+5</button>
        </div>
      </div>
    )
  }
}

export default Counter;
