import React from "react";
import Card from "./Card";
import classes from "./ErrorModal.module.css";
import UserButton from "./UserButton";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={`user-card ${classes.modal}`}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <UserButton onClick={props.onConfirm}>Okay</UserButton>
        </footer>
      </Card>{" "}
    </div>
  );
};

export default ErrorModal;
