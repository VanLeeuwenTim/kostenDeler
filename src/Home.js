import React, { Component } from "react";
import Login from "./Login";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const input = event.target;
    const targetUserName = input.userName.value;
    const targetPassword = input.password.value;
    this.setState(prevState => {
      const updatedUsers = prevState.users;
      updatedUsers.push({
        userName: targetUserName,
        password: targetPassword
      });
      return {
        users: updatedUsers
      };
    });
  }

  render() {
    console.log("users", this.state.users);
    return (
      <div id="home">
        <h2>Home</h2>
        <p>
          Welcome. This is the homepage. Here you can enter your personal
          account.
        </p>
        <Login onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default Home;
