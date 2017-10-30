import React from 'react';
import GroceryItem from './GroceryItem.jsx'

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    var listItems = this.props.list.map((item) =>
      <GroceryItem item={item}/>
    );
    return (
      <div className="groceries">
        {listItems}
      </div>
      
    );
  }
}

export default GroceryList;