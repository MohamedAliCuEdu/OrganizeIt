import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormBtns from "../components/buttons/formBtns";
import useAuth from "../hooks/useAuth";
import axiosApi from "../services/api";
import SignIndex from "../components/sign";

function SignupPage() {
  const [signErr, setSignErr] = useState(""); // fetch request error state:
  const [isPending, setIsPending] = useState(false); // form submiting pending state:
  const { auth, setAuth } = useAuth();
  
  const navigate = useNavigate();

  // if user in login page & he is already login:
  let fromPath = location?.state?.from || "/";
  React.useEffect(() => {
    auth && navigate("/", { replace: true });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsPending(true);
    // 1. create user object:
    const formData = new FormData(e.currentTarget);
    let userObj = Object.fromEntries(formData);
    // 2. turn type of [age] into number:
    userObj.age = +userObj.age;
    //  3. delete [confirm-password]:
    delete userObj["confirm-password"];
    // 2. make post request:
    try {
      const res = await axiosApi.post("/api/users", userObj);
      setAuth(res.data);
      navigate(fromPath, { replace: true });
    } catch (err) {
      console.log(err);
      !err?.response
        ? setSignErr("server not response")
        : err.response.status === 403
        ? setSignErr("username or password is invalid")
        : err.status === 409
        ? setSignErr("username has been taken!")
        : setSignErr("regisrtation failed");
      // remove error msg
      setTimeout(() => setSignErr(false), 5000);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <main className="signup-page">
      <div className="container">
        <div className="content">
          <h2 className="form-title">sign up</h2>
          <SignIndex.SignupForm handleSubmit={handleSubmit}>
            <FormBtns isPending={isPending} value="sign" formErr={signErr} />
          </SignIndex.SignupForm>
          <SignIndex.AccountExistMsg />
        </div>
      </div>
    </main>
  );
}
export default SignupPage;
