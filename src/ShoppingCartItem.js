import React, { Component } from 'react';

class ShoppingCartItem extends Component {

  render() {
    return (
      <div className="ShoppingCartItem">
        <div className="RemoveItem">X</div>
        <div className="ItemName"> {this.props.item.name}</div>
        <div className ="ItemPrice"> {this.props.item.price}</div>
      </div>
    );
  }
}

export default ShoppingCartItem;
