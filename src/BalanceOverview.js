import React from "react";

const BalanceOverview = props => {
  const userNames = props.data.map(item => item.userName);
  console.log("userNames", userNames);
  const singleName = userNames.filter((name, index, names) => {
    return names.indexOf(name) === index;
  });
  console.log("singleName", singleName);

  const listNames = singleName.map(item => {
    console.log("item:", item);
    const name = item;

    const filterMethod = props.data.map(element =>
      element.userName === name ? element.amount : 0
    );
    console.log("name:", name);
    console.log("filterMethod", filterMethod);
    const amountTotal = filterMethod.reduce((a, b) => a + b, 0);
    console.log("amountTotalPP", name, amountTotal);

    return (
      <li>
        {name}
        {amountTotal}
      </li>
    );
  });

  return (
    <div>
      <h2>BalanceOverview:</h2>
      <ul>{listNames}</ul>
    </div>
  );
};

export default BalanceOverview;
