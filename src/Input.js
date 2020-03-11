import React from 'react';

const Input = props => {
	return (
		<form onSubmit={props.onSubmitHandler}>
			<input name="paidBy" type="text" placeholder="--Paid by--" />
			<input name="amount" type="text" placeholder="--Amount--" />
			<select name="currency">
				<option value="EUR">EUR</option>
				<option value="CAD">CAD</option>
				<option value="USD">USD</option>
				<option value="GBP">GBP</option>
			</select>
			<input name="date" type="text" placeholder="--date--" />
			<input name="description" type="text" placeholder="--Event--" />
			<input name="addedBy" type="text" placeholder="--Added by--" />
			<input type="submit" value="Submit" onClick={props.makeId} />
		</form>
	);
};

export default Input;
