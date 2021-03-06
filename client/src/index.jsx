import React from 'react';
import ReactDOM from 'react-dom';
import GroceryList from './components/GroceryList.jsx'
import AddGrocery from './components/AddGrocery.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {id: 1, quantity: 5, description: "frozen pizza"},
        {id: 2, quantity: 10, description: "greek yogurt"},
        {id: 3, quantity: 2, description: "wine"},
        {id: 4, quantity: 1, description: "iced coffee"}
      ]
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(description, quantity) {
    // alert(`description: ${description} quantity: ${quantity}`)
    // debugger
    var item = {id: this.state.list.length + 1, description: description, quantity: quantity};
    var newList = this.state.list.slice();
    newList.push(item);
    this.setState({list: newList})
    
  }

  
  render () {
    return (
      <div>
        <AddGrocery 
          handleSubmit={this.handleSubmit} 
        />
        <GroceryList list={this.state.list} />

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));