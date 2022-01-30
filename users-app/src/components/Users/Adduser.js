import React from "react";

export default function AddUser(props) {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />

      <label htmlFor="age">Age (years)</label>
      <input id="age" type="number" />

      <button type="submit">Add User</button>
    </form>
  );
}
