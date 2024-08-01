import React from "react";

function LoginForm({ children, handleSubmit }) {
  return (
    <form action="POST" className="login-form" onSubmit={handleSubmit}>
      <div className="input-div">
        <label htmlFor="username">username:</label>
        <input
          className="input-md-field light-input"
          id="username"
          type="username"
          name="username"
          minLength="3"
          placeholder="your username"
          required
        />
      </div>
      <div className="input-div">
        <label htmlFor="password">password:</label>
        <input
          className="input-md-field light-input"
          id="password"
          type="password"
          name="password"
          placeholder="your password"
          required
        />
      </div>
      {children}
    </form>
  );
}

export default React.memo(LoginForm);
