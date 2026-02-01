import React, { useState } from "react";
import UserForm from "./components/UserForm";
import SubmittedData from "./components/SubmittedData";
import "./styles.css";

const App = () => {
  const [submittedUser, setSubmittedUser] = useState(null);

  const handleFormSubmit = (userData) => {
    setSubmittedUser(userData);
  };

  return (
    <div className="app-container">
      <h1>React Form Handling Task</h1>
      <UserForm onSubmit={handleFormSubmit} />
      {submittedUser && <SubmittedData data={submittedUser} />}
    </div>
  );
};

export default App;


