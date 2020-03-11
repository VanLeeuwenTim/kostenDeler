import React, { Component } from 'react';
import Data from './Database';
import BalanceOverview from './BalanceOverview';
import ExpensesOverview from './ExpensesOverview';
import Input from './Input';

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
		//console.log('submit got clicked yo', event.target.key.value);
		event.preventDefault();
		const uniqueId = Date.now();
		const input = event.target;
		let targetPaidBy = input.paidBy.value;
		let targetAmount = input.amount.value;
		let targetCurrency = input.currency.value;
		let targetDate = input.date.value;
		let targetDescription = input.description.value;
		let targetAddedBy = input.addedBy.value;
		let targetKey = uniqueId;
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
		console.log('sortbutton clicked');
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
		return (
			<div>
				<BalanceOverview data={this.state.data} />
				<Input onSubmitHandler={this.onSubmitHandler} />
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
