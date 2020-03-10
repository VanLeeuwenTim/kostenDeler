import React, { Component } from 'react';
import Data from './Data';
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
	}

	sort() {
		console.log('sortbutton clicked');
	}

	render() {
		return (
			<div>
				<BalanceOverview data={this.state.data} />
				<Input />
				<ExpensesOverview data={this.state.data} sort={this.sort} />
			</div>
		);
	}
}

export default Container;
