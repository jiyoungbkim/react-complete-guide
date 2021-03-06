import React, { useState } from "react";

import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

const UserApp = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevState) => [
      ...prevState,
      { name: uName, age: uAge, id: Math.random().toString() },
    ]);
  };
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
};

export default UserApp;
