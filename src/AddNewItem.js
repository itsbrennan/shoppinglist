import React, { Component } from 'react';

class AddNewItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 0
    };
  }

  render() {
    return (
      <div className="AddNewItem">

        <form className="NewItemForm" onSubmit={this.handleSubmit}>

            <label>Item Name
            <input type="text" className="ItemName" value = {this.state.name} onChange={this.handleNameEvent} />
            </label>

            <label>Item Price
            <input type="number" className="ItemPrice" value = {this.state.price} onChange={this.handlePriceEvent} />
            </label>

            <button type="submit" className="AddNewItemButton">
            Add
            </button>

        </form>


      </div>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleNameEvent = (event) => {
    this.setState({
      name: event.target.value
    })
  };

  handlePriceEvent = (event) => {
    this.setState ({
      price: event.target.value
    })
  };
}

export default AddNewItem;
