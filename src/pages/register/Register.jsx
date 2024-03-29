import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/register");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="register">
        <div className="register-Img"></div>
          <form className="registerBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="registerInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="registerInput"
              type="email"
              />
            <input
              placeholder="Password"
              required
              ref={password}
              className="registerInput"
              type="password"
              autoComplete="true"
              minLength="6"
              />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="registerInput"
              type="password"
              autoComplete="true"
            />
            <button className="registerButton1" type="submit">
              Sign Up
            </button>
            <a className="registerButton2" href="/login">Log into Account</a>
          </form>
        </div>
  );
}