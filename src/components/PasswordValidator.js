// src/PasswordValidator.js
import React, { useState } from "react";
import "../styles/PasswordValidator.css";

function passwordValidator(password) {
  const lengthCriteria = password.length >= 8;
  const upperCaseCriteria = /[A-Z]/.test(password);
  const lowerCaseCriteria = /[a-z]/.test(password);
  const numberCriteria = /\d/.test(password);
  const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const criteriaMet = [
    lengthCriteria,
    upperCaseCriteria,
    lowerCaseCriteria,
    numberCriteria,
    specialCharCriteria,
  ];
  const criteriaCount = criteriaMet.filter(Boolean).length;

  if (criteriaCount === 5) {
    return "Excellent";
  } else if (criteriaCount === 4) {
    return "Strong";
  } else if (criteriaCount === 3) {
    return "Very Good";
  } else if (criteriaCount === 2) {
    return "Good";
  } else {
    return "";
  }
}

const PasswordValidator = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const handleChange = (event) => {
    const inputPassword = event.target.value;
    setPassword(inputPassword);
    setStrength(passwordValidator(inputPassword));
  };

  return (
    <div className="container">
      <h2>Password Validator</h2>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handleChange}
      />
      <h3 className={strength}>{strength}</h3>
    </div>
  );
};

export default PasswordValidator;
