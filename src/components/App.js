import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShoppingCart from './ShoppingCart';
import AddNewItem from './AddNewItem';
import { addItemToDatabase } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{ name: 'fake item', price: 42 }]
    }
  }

  render() {
    return (
      <div className="App">
        <ShoppingCart items={this.state.items} />
        <AddNewItem onSubmit={this.addToCart} />
      </div>
    );
  }

  addToCart = (item) => {
    this.setState((prevState) => {
      const newItems = prevState.items.slice();
      newItems.push(item)

      return { items: newItems };
    })
  }
}

function mapStateToProps(state) {
  return {
      shoppingList: state.items
  };
}

const mapActionsToProps = {
  addItemToDatabase
};

export default connect(mapStateToProps, mapActionsToProps)(App);
