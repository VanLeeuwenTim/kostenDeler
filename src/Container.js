import React, { Component } from "react";
import Data from "./Database";
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
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    const uniqueId = Date.now();
    const input = event.target;
    const targetPaidBy = input.paidBy.value;
    const targetAmount = parseInt(input.amount.value);
    const targetCurrency = input.currency.value;
    const targetDate = input.date.value;
    const targetDescription = input.description.value;
    const targetAddedBy = input.addedBy.value;
    const targetKey = uniqueId;
    this.setState(prevState => {
      const updatedData = prevState.data;
      updatedData.push({
        key: targetKey,
        userName: targetPaidBy,
        amount: targetAmount,
        currency: targetCurrency,
        date: targetDate,
        description: targetDescription,
        addedBy: targetAddedBy
      });
      return {
        data: updatedData
      };
    });
  }
  sort() {
    console.log("sortbutton clicked");
  }

  deleteItem(event) {
    const deleteItemId = event.target.id;
    console.log(event.target);
    this.setState(prevState => {
      const updatedItemList = prevState.data;
      updatedItemList.splice(
        updatedItemList.findIndex(item => item.key == deleteItemId),
        1
      );
      return {
        data: updatedItemList
      };
    });
  }

  render() {
    console.log("dataBase", this.state.data);
    return (
      <div>
        <Input onSubmitHandler={this.onSubmitHandler} />
        <BalanceOverview data={this.state.data} />
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
