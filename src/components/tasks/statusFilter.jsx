import React from "react";
import { useSearchParams } from "react-router-dom";

function StatusFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  let statusSP = searchParams.get("status");
  function handleStatusSP(status) {
    status ? searchParams.set("status", status) : searchParams.delete("status");
    setSearchParams(searchParams);
  }

  return (
    <div className="status-filter filter-btns">
      <button onClick={() => handleStatusSP("")} className="dark-btn md-btn">
        all
      </button>
      <button
        onClick={() => handleStatusSP("pending")}
        className={`${
          statusSP === "pending" ? "active" : null
        } white-gray-btn md-btn`}
      >
        pending
      </button>
      <button
        onClick={() => handleStatusSP("completed")}
        className={`${
          statusSP === "completed" ? "active" : null
        } white-gray-btn md-btn`}
      >
        completed
      </button>
    </div>
  );
}
export default StatusFilter;
