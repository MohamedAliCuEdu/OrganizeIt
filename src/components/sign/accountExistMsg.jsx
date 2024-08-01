import React from "react";
import { Link } from "react-router-dom";

function AccountExistMsg() {
  return (
    <p className="account-msg">
      have you already account? <Link to="/login">log in</Link>.
    </p>
  );
}

export default React.memo(AccountExistMsg);
