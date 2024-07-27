import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import axiosApi from "../services/api";;
import FormBtns from "../components/buttons/formBtns";

import SignIndex from "../components/sign";

function LoginPage() {
  const [isPending, setIsPending] = useState(false);
  const [loginErr, setLoginErr] = useState(null);

  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

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
    let data = Object.fromEntries(formData);
    // 2. make post request:
    try {
      const res = await axiosApi.post("/api/auth", data);
      // 3. store response data in auth context:
      setAuth(res.data);
      // 4. go to previos path or home page:
      navigate(fromPath, { replace: true });
    } catch (err) {
      console.log(err);
      !err?.response
        ? setLoginErr("server not response")
        : err.response.status === 403
        ? setLoginErr("username or password is invalid")
        : setLoginErr("login failed");
      setTimeout(() => setLoginErr(false), 5000);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <main className="login-page">
      <div className="container">
        <div className="content">
          <h2 className="form-title">log in</h2>
          <SignIndex.LoginForm handleSubmit={handleSubmit}>
            <SignIndex.PresistCheck />
            <FormBtns value="log in" isPending={isPending} formErr={loginErr} />
          </SignIndex.LoginForm>
          <SignIndex.NoAccountMsg />
        </div>
      </div>
    </main>
  );
}
export default LoginPage;
