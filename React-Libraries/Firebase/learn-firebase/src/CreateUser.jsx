import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { firebaseApp } from "./firebase/firebase";

// const database = getDatabase(firebaseApp);

const createUserForm = (name, email) => {
  const db = getDatabase();
  set(ref(db, "users/"), {
    userName: name,
    email: email,
  });
};

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createUserForm(name, email);
  };
  return (
    <>
      <h1>Create Contact</h1>
      <form action="" onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CreateUser;
