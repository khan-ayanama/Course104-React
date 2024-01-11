import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "./firebase/firebase";
import { useState } from "react";

const auth = getAuth(firebaseApp);

const signUpUser = (e, email, password) => {
  e.preventDefault();

  createUserWithEmailAndPassword(auth, email, password).then((value) =>
    console.log(value)
  );
};

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    signUpUser(e, email, password);
  };

  return (
    <>
      <h1>HEllo form </h1>
      <form action="/dashboard" onSubmit={handleFormSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => {
            const email = e.target.value;
            setEmail(email);
          }}
        />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => {
            const password = e.target.value;
            setPassword(password);
          }}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default SignUpForm;
