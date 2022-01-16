import React, { useState } from "react";
import styles from "./UserInput.module.css";

import Button from "../UI/Button";

const UserInput = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  const userChangeHandler = (event) => {};
  const userAgeChangeHandler = (event) => {};

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Username</label>
        <input type="text" onChange={userChangeHandler} />
      </div>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Age (Years)</label>
        <input type="text" onChange={userAgeChangeHandler} />
      </div>
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default UserInput;
