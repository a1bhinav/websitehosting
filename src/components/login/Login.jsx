import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import css from "./login.css";

const Login = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    if (localStorage.getItem("isLoggedIn")) {
      setIsLoggedIn(true);
      navigate("/", {replace: true});
    }
  }, [isLoggedIn]);
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChangeValues = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = values;

    const regex_email =
      /^([a-z A-Z 0-9 \.-_]+)@([a-z A-Z 0-9 \.-_]+)\.([a-z]+)(\.[a-z]{2,5})?$/;
    //purpose of ? is it makes regex exp optional like whatever part u want

    if (!regex_email.test(email)) {
      window.alert("Please enter a valid email");
      return;
    }

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (!data) {
      window.alert("Technical error");
      console.log("Technical error");
    } else if (res.status === 422 || res.status === 400) {
      window.alert(data.error);
      console.log(data.error);
    } else {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userId", data._id);
      localStorage.setItem("userTestAttempted", data.testAttempted);
      localStorage.setItem("userLearningAttempted", data.learningAttempted);

      console.log(data.message);

      navigate("/", { replace: true });
    }
  };

  return (
    <div class="login-body">
      <div class="center">
        <h1>Login</h1>
        <div className="form">
          <div class="txt_field">
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChangeValues("email")}
              required
            />
            <span></span>
            <label>Email</label>
          </div>
          <div class="txt_field">
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChangeValues("password")}
              required
            />
            <span></span>
            <label>Password</label>
          </div>
          {/* <div class="pass">Forgot Password?</div> */}
          {/* <input type="submit" value="Login"/>. */}
          <button
            style={{ width: "100%" }}
            className="btn btn-primary btn-lg btn-demo"
            onClick={handleSubmit}
          >
            Login
          </button>
          <div class="signup_link">
            Not a member?
            <NavLink to="/signup" variant="body2">
              Signup
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
