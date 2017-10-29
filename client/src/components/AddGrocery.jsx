import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  render () {
    return (
      <div>
       <form>
       <label>Description
         <input type="text" label="Description"></input>
       </label>
       <label>Quantity
        <input type="text" label="Quantity"></input>
       </label>
         <input type="submit" value="Submit"></input>
       </form>
      </div>
    );
  }
}

export default AddGrocery;

