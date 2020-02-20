import React from "react";

const ExpensesOverview = props => {
  const expenseItems = props.data.map(item => (
    <tr key={item.id}>
      <td>{item.userName}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
      <td>{item.date}</td>
      <td>{item.description}</td>
    </tr>
  ));

  return (
    <div>
      <h2>ExpensesOverview:</h2>
      <table style={{ width: "100%" }}>
        <thead>
          <tr className="table-header">
            <th className="table-row__item">Paid by:</th>
            <th className="table-row__item">Amount:</th>
            <th className="table-row__item">Currency:</th>
            <th className="table-row__item">Date:</th>
            <th className="table-row__item">Description:</th>
          </tr>
        </thead>
        <tbody>{expenseItems}</tbody>
      </table>
    </div>
  );
};

export default ExpensesOverview;
