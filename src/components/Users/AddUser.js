import React, { useState, useRef } from "react";
import Wrapper from "../Helpers/Wrapper";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import UserButton from "../UI/UserButton";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    // setEnteredUsername("");
    // setEnteredUserAge("");
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  // const usernameChangeHandler = (e) => {
  //   setEnteredUsername(e.target.value);
  // };
  // const ageChangeHandler = (e) => {
  //   setEnteredUserAge(e.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={`user-card ${classes.input}`}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Uears)</label>
          <input
            id="age"
            type="number"
            // value={enteredUserAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <UserButton type="submit">Add User</UserButton>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
