import React, { Component } from "react";
import Data from "./Data";
import BalanceOverview from "./BalanceOverview";
import ExpensesOverview from "./ExpensesOverview";
import Input from "./Input";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      data: Data
    };
    this.sort = this.sort.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  sort() {
    console.log("sortbutton clicked");
  }

  deleteItem(event) {
    const deleteItemId = event.target.id;
    this.setState(prevState => {
      const updatedItemList = prevState.data;
      updatedItemList.splice(
        updatedItemList.findIndex(item => item.id == deleteItemId),
        1
      );
      return {
        data: updatedItemList
      };
    });
  }

  render() {
    return (
      <div>
        <BalanceOverview data={this.state.data} />
        <Input />
        <ExpensesOverview
          data={this.state.data}
          sort={this.sort}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default Container;
