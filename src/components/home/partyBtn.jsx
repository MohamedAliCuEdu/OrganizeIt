import React from "react";

function PartyBtn({party, celebrate}) {
  return (
    <button className="xlg-btn dark-btn" type="button" onClick={celebrate}>
      {party ? "time for work" : "let`s celebrate!"}
    </button>
  );
}

export default PartyBtn;
