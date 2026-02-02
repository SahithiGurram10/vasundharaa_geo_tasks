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
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="navbar-title">React Form Handling Task</h1>
      </nav>

      {/* Main Content */}
      <div className="app-container">
        <div className="card">
          <UserForm onSubmit={handleFormSubmit} />
        </div>

        {submittedUser && (
          <div className="card">
            <SubmittedData data={submittedUser} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
