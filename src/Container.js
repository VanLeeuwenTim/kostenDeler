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
	}

	render() {
		return (
			<div>
				<BalanceOverview data={this.state.data} />
				<Input />
				<ExpensesOverview data={this.state.data} />
			</div>
		);
	}
}

export default Container;
