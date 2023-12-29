import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../../store/Context";
import Logo from "../../olx-logo.png";
import "./Login.css";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault()
    firebase
      .auth()
      .signInWithEmailAndPassword(Email, Password)
      .then(() => history.push("/"));
  };

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a
          style={{ color: "blue", textDecoration: "underline" }}
          onClick={() => {
            history.push("/signup");
          }}
        >
          Signup
        </a>
      </div>
    </div>
  );
}

export default Login;
