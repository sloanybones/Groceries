import { render } from "@testing-library/react";
import React from "react";
import List from "./List";
import GroceryFormFunc from "./GroceryFormFunc";

class Groceries extends React.Component{
 
  state = {
  groceries: [
    {id: 1, name: "Cocoa Puffs", complete: true},
    {id: 2, name: "Lucky Charms", complete: false},
    {id: 3, name: "Golden Crisp", complete: true},
    {id: 4, name: "HoneyComb", complete: false},
    {id: 5, name: "Milk", complete: true},
  ]
};
addItem = (groceryName) => {
  const grocery = {
    id: Math.random(),
    name: groceryName,
    complete: false,
  };

  // this.state.todos.push(staticTodo) bad
  this.setState({
    groceries: [...this.state.groceries, grocery],
  });
};

render() {
  return (
    <div>
      <h1>Groceries</h1>
      <GroceryFormFunc addItemCallBack={this.addItem}/>
      <List
        items={this.state.groceries}
      />
    </div>
  );
};
}


export default Groceries;