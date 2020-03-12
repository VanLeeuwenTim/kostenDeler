import React from "react";
import "./Input.css";

const Input = props => {
  return (
    <div id="input-container">
      <h2>Input</h2>
      <div id="input-form">
        <form onSubmit={props.onSubmitHandler}>
          <input name="paidBy" type="text" placeholder="--Paid by--" />
          <input name="amount" type="number" placeholder="--Amount--" />
          <select name="currency">
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
          </select>
          <input name="date" type="text" placeholder="--date--" />
          <input name="description" type="text" placeholder="--Event--" />
          <input name="addedBy" type="text" placeholder="--Added by--" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Input;
