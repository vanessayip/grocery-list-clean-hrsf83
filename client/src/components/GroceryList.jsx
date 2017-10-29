import React from 'react';
import GroceryItem from './GroceryItem.jsx'

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.listItems = props.list.map((item) =>
      <GroceryItem item={item}/>
    );
    
  }


  render () {
    return (
      <div className="groceries">
      {this.listItems}
      </div>
      
    );
  }
}

export default GroceryList;