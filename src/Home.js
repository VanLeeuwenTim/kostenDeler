import React from "react";

export default function Home() {
  return (
    <div id="home">
      <h2>Home</h2>
      <p>
        Welcome. This is the homepage. Here you can enter your personal account.
      </p>
      <form onSubmit={console.log("welkom")}>
        <input name="username" type="text" placeholder="--Username--" />
        <input name="password" type="text" placeholder="--Password--" />
        <input
          type="submit"
          value="Submit"
          onClick={console.log("submitted")}
        />
      </form>
    </div>
  );
}
