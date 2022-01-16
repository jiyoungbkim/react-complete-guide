import React, { useState } from "react";
import UserInput from "./User/UserInput";
import "./UserApp.css";

const UserApp = () => {
  let content = (
    <p style={{ textAlign: "center" }}>No user found. Maybe add one?</p>
  );

  return (
    <>
      <section id="user-form">
        <UserInput label="Username" />
      </section>
      <section id="users">{content}</section>
    </>
  );
};

export default UserApp;
