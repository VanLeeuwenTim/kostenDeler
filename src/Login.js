import React from "react";

const login = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <input name="userName" type="text" placeholder="--Username--" />
      <input name="password" type="text" placeholder="--Password--" />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default login;
