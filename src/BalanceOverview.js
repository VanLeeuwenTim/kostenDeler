import React from "react";

const BalanceOverview = props => {
  const userNames = props.data.map(item => item.userName);
  const singleName = userNames.filter((name, index, names) => {
    return names.indexOf(name) === index;
  });

  const listNames = singleName.map(element => {
    return <li>{element}</li>;
  });

  return (
    <div>
      <h2>BalanceOverview:</h2>
      <ul>{listNames}</ul>
    </div>
  );
};

export default BalanceOverview;
