import React from "react";
import Logo from "../../olx-logo.png";
import "./Signup.css";
import { useState, useContext } from "react";
import { FirebaseContext } from "../../store/Context";
import { useHistory } from "react-router-dom";

export default function Signup() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(Email, Password)
      .then((result) => {
        result.user.updateProfile({ displayName: username });
        return result;
      })
      .then((result) => {
        firebase
          .firestore()
          .collection("users")
          .add({ id: result.user.uid, username: username, phone: Phone });
      })
      .then(() => {
        history.push("/login");
      });
  };

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit} style={{ marginBottom: 15 }}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="name"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a
          style={{ color: "blue", textDecoration: "underline" }}
          onClick={() => history.push("/login")}
        >
          Login
        </a>
      </div>
    </div>
  );
}
