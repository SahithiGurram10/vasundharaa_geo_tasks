import React from "react";

const SubmittedData = ({ data }) => {
  return (
    <div className="result">
      <h2>Submitted Data</h2>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>ID:</strong> {data.id}</p>
      <p><strong>Password:</strong> {data.password}</p>
    </div>
  );
};

export default SubmittedData;
