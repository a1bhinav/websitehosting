import React, {useState, useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import css from '../login/login.css'

const Signup = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    if (localStorage.getItem("isLoggedIn")) {
      setIsLoggedIn(true);
      navigate("/", {replace: true});
    }
  }, [isLoggedIn]);

  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: ""
  });
  
  const handleChangeValues = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, password, confirm_password } = values;

    const regex_email =
      /^([a-z A-Z 0-9 \.-_]+)@([a-z A-Z 0-9 \.-_]+)\.([a-z]+)(\.[a-z]{2,5})?$/; 
    //purpose of ? is it makes regex exp optional like whatever part u want
    
    const regex_password =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      
    if (!regex_email.test(email)) {
      window.alert("Please enter a valid email");
      return;
    }

    if (!regex_password.test(password)) {
      window.alert(
        "Password must have:\n\n Minimum 8 characters,\n At least 1 uppercase letter,\n At least 1 lowercase letter,\n At least 1 number,\n At least 1 special character"
      );
      return;
    }

    if (password !== confirm_password) {
      window.alert("Password mismatch");
      return;
    }
      
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password
      }),
    });

    const data = await res.json();

    if (!data) {
      window.alert("Technical error");
      console.log("Technical error");
    } 
    else if (res.status === 422) {
      window.alert(data.error);
      console.log(data.error);
    } 
    else {
      window.alert(data.message);
      console.log(data.message);
      navigate("/login");
    }
  };



  return (
    <div class="login-body">
    <div class="center">
      <h1>Signup</h1>
      <div className='form'>
        <div class="txt_field">
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChangeValues("name")}
            required
          />
          <span></span>
          <label>Name</label>
        </div>
        <div class="txt_field">
          <input
            type="text"
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
        <div class="txt_field">
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            value={values.confirm_password}
            onChange={handleChangeValues("confirm_password")}
            required
          />
          <span></span>
          <label>Confirm Password</label>
        </div>
        {/* <div class="pass">Forgot Password?</div> */}
        {/* <input type="submit" value="Signup"/> */}
        <button
          style={{width:'100%'}}
          className="btn btn-primary btn-lg btn-demo"
          onClick={handleSubmit}
        >
          Signup
        </button>
        <div class="signup_link">
          Already a member?
          <NavLink
            to="/login"
            variant="body2"
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>

  </div>
  )
}

export default Signup