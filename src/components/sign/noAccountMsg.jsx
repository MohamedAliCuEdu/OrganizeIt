import React from "react";
import { Link } from "react-router-dom";

function NoAccountMsg() {
  return (
    <p className="account-msg">
      dont have account yet? <Link to="/signup">sign up</Link>.
    </p>
  );
}

export default React.memo(NoAccountMsg);
