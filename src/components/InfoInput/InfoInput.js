import React, { useState } from "react";

import styles from "./InfoInput.module.css";

const InfoInput = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const [isValid, setIsValid] = useState(true);

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  let errorMessage = <p>t</p>;

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
    } else {
      setIsValid(false)
    }
    
  };
  
  if (isValid === false) {
    errorMessage = <p className={styles.infoInput__errorMessage}>Username and/or Age does not match the required ruleset</p>
  }
  
  return (
    <div className={styles.infoInput}>
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input type="text" value={username} onChange={usernameChangeHandler} />
        <label>Age (Years)</label>
        <input
          type="number"
          value={age}
          onChange={ageChangeHandler}
        />
        <button type="submit">Add User</button>
      {errorMessage}
      </form>

    </div>
  );
};

export default InfoInput;
