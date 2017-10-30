import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      quantity: ''
    }
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
    this.handleSubmitAddGrocery = this.handleSubmitAddGrocery.bind(this);
  }

  handleChangeDescription(e) {
    this.setState({description: e.target.value});
  }

  handleChangeQuantity(e) {
    this.setState({quantity: e.target.value});
  }

  handleSubmitAddGrocery(event) {
    this.props.handleSubmit(this.state.description, this.state.quantity);
    event.preventDefault();
    this.setState({description: '', quantity: ''});
  }

  render () {
    return (
      <div>
       <form onSubmit={this.handleSubmitAddGrocery}
       >
       <label>Description
         <input type="text" label="Description" value={this.state.description} onChange={this.handleChangeDescription}></input>
       </label>
       <label>Quantity
       <input type="text" label="Quantity" value={this.state.quantity} onChange={this.handleChangeQuantity}></input>
       </label>
         <input type="submit" value="Submit"></input>
       </form>
      </div>
    );
  }
}

export default AddGrocery;

