import React from "react";

function ErrorDiv({ errorObj }) {
  const { msg, status } = errorObj;
  return (
    <div className="error-msg-div">
      {status && (
        <>
          <br />
          <span className="status">{status}</span>
        </>
      )}
      <h2>Error: {msg}</h2>
    </div>
  );
}

export default ErrorDiv;
