import React, { Component } from 'react';
import ShoppingCartItem from "./ShoppingCartItem";

class ShoppingCart extends Component {
  render() {

    let shoppingCartTotal = 0

    const ItemsInCart = this.props.items.map(item => {
      shoppingCartTotal += Number(item.price);
      return <ShoppingCartItem item={item} key={item.name} />
    });

    return (
      <div className="ShoppingCart">
        <div className="CartItemNames">
        {ItemsInCart}
        Total: {shoppingCartTotal}
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
