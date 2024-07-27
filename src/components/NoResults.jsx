import React from "react";

function NoResults() {
  console.log("no")
  return (
    <div className="no-results-match">
      <img src="/no-results.svg" alt="no-results" />
      <h2>no search result found!</h2>
    </div>
  );
}

export default NoResults;
