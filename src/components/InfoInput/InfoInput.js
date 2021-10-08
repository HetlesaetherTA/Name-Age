import React, { useState } from "react";

import styles from "./InfoInput.module.css";
import Button from "../UI/Button";
let errorMessage;

const InfoInput = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const [isValid, setIsValid] = useState(true);

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
    setIsValid(true);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
    setIsValid(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
    const inputData = {
      username: username,
      age: age,
      id: Math.random().toString(),
    };
    
    if (username.trim().length && age.length > 0) {
      setIsValid(true);

      props.onAddInputData(inputData);
  
      setUsername("");
      setAge("");

      errorMessage = ""
    } else {
      setIsValid(false);
    }
  };
  if (isValid === false) {
    errorMessage = (
      <p className={styles.infoInput__errorMessage}>
        Username and/or Age does not match the required ruleset
      </p>
    );
  }

  return (
    <div className={styles.infoInput}>
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input
          className={`${styles.infoInput} ${!isValid && styles.invalid}`}
          type="text"
          value={username}
          onChange={usernameChangeHandler}
        />
        <label>Age (Years)</label>
        <input
          className={`${styles.infoInput} ${!isValid && styles.invalid}`}
          type="number"
          value={age}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
        {errorMessage}
      </form>
    </div>
  );
};

export default InfoInput;
