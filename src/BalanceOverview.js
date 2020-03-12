import React from 'react';
//import BalanceItems from './BalanceItems';

const BalanceOverview = props => {
	const userNames = props.data.map(item => item.userName);
	const singleName = userNames.filter((name, index, names) => {
		return names.indexOf(name) === index;
	});
	const userAmount = singleName.length;
	const allAmounts = props.data.map(item => item.amount);
	const totalAllAmounts = allAmounts.reduce((a, b) => a + b, 0);
	const averageAmount = totalAllAmounts / userAmount;

	const singleUserData = singleName.map(item => {
		const name = item;
		const filterMethod = props.data.map(element =>
			element.userName === name ? element.amount : 0
		);
		const amountTotal = filterMethod.reduce((a, b) => a + b, 0);
		const balancePP = Math.round((amountTotal - averageAmount) * 100) / 100;

		return (
			<tr>
				<td>{name}</td>
				<td>{balancePP}</td>
				<td>{amountTotal}</td>
			</tr>
		);
	});

	return (
		<div>
			<h2>BalanceOverview:</h2>
			<table style={{ width: '100%' }}>
				<thead>
					<tr className="table-header">
						<th className="table-row__item">Username:</th>
						<th className="table-row__item">Balance:</th>

						<th className="table-row__item">Total amount paid:</th>
					</tr>
				</thead>
				<tbody>{singleUserData}</tbody>
			</table>
		</div>
	);
};

export default BalanceOverview;
