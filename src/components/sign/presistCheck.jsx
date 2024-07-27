import React, {useEffect} from "react";
import useAuth from "../../hooks/useAuth";

function PresistCheck() {
  const { presist, setPresist } = useAuth();
  // handle check:
  function handlePresist() {
    setPresist((prev) => !prev);
  }
  useEffect(() => {
    localStorage.setItem("presist", presist);
  }, [presist]);
  return (
    <div className="remember-device input-div">
      <label htmlFor="remember-device">remember me:</label>
      <input
        type="checkbox"
        name="remember-device"
        id="remember"
        onChange={handlePresist}
        checked={presist}
      />
    </div>
  );
}

export default PresistCheck;
