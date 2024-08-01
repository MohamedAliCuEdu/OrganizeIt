import React from "react";

function SignupForm({ children, handleSubmit }) {
  
  return (
    <form action="POST" onSubmit={handleSubmit}>
      <div className="input-div">
        <label htmlFor="fname">first name:</label>
        <input
          id="fname"
          className="input-md-field light-input"
          type="text"
          name="fname"
          minLength="3"
          placeholder="your last name"
          required
        />
      </div>
      <div className="input-div">
        <label htmlFor="lname">last name:</label>
        <input
          id="lname"
          className="input-md-field light-input"
          type="text"
          name="lname"
          minLength="3"
          placeholder="your last name"
          required
        />
      </div>
      <div className="input-div">
        <label htmlFor="gender">gender:</label>
        <div className="gender-options">
          <label htmlFor="male">male</label>
          <input type="radio" name="gender" id="male" value="male" />
          <label htmlFor="female">female</label>
          <input type="radio" name="gender" id="female" value="female" />
        </div>
      </div>
      <div className="input-div">
        <label htmlFor="age">your age:</label>
        <input
          id="age"
          className="input-md-field light-input"
          type="number"
          name="age"
          min="15"
          max="120"
          placeholder="your age"
          required
          />
      </div>
      <div className="input-div">
        <label htmlFor="username">user name:</label>
        <input
          id="username"
          className="input-md-field light-input"
          type="username"
          name="username"
          minLength="6"
          placeholder="your user name"
          required
          />
      </div>
      <div className="input-div">
        <label htmlFor="password">password:</label>
        <input
          id="password"
          className="input-md-field light-input"
          type="password"
          name="password"
          placeholder="your password"
          required
          />
      </div>
      <div className="input-div">
        <label htmlFor="confirm-password">confirm password:</label>
        <input
          id="confirm-password"
          className="input-md-field light-input"
          type="password"
          name="confirm-password"
          placeholder="confirm password"
          required
        />
      </div>
      {children}
    </form>
  );
}

export default React.memo(SignupForm);
