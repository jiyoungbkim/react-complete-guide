import React, { useState } from "react";
import Button from "./components/UI/Button";
import ExpenseApp from "./components/ExpenseApp";
import UserApp from "./components/UserApp";

function App() {
  const [practice, setPractice] = useState(0);
  const practiceHandler = (page) => {
    setPractice(page);
  };

  return (
    <>
      <Button type="button" onClick={() => practiceHandler(0)}>
        Expense
      </Button>
      <Button type="button" onClick={() => practiceHandler(1)}>
        User
      </Button>
      {practice === 0 && <ExpenseApp />}
      {practice === 1 && <UserApp />}
    </>
  );
}

export default App;
