import React from 'react';

const ExpensesOverview = props => {
	const expenseItems = props.data.map(item => (
		<tr key={item.key}>
			<td>{item.userName}</td>
			<td>{item.amount}</td>
			<td>{item.currency}</td>
			<td>{item.date}</td>
			<td>{item.description}</td>
			<td>{item.addedBy}</td>
			<td>
				<button onClick={props.deleteItem} id={item.key}>
					delete item
				</button>
			</td>
		</tr>
	));

	return (
		<div>
			<h2>ExpensesOverview:</h2>
			<table style={{ width: '100%' }}>
				<thead>
					<tr className="table-header">
						<th className="table-row__item">
							Paid by:
							<button onClick={props.sort}>sort asc</button>
							<button>sort dsc</button>
						</th>
						<th className="table-row__item">
							Amount:
							<button>sort asc</button>
							<button>sort dsc</button>
						</th>
						<th className="table-row__item">Currency:</th>
						<th className="table-row__item">
							Date:
							<button>sort asc</button>
							<button>sort dsc</button>
						</th>
						<th className="table-row__item">Description:</th>
						<th className="table-row__item">Added By:</th>
					</tr>
				</thead>
				<tbody>{expenseItems}</tbody>
			</table>
		</div>
	);
};

export default ExpensesOverview;
