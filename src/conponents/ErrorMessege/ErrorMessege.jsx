import React from "react";
import s from "./ErrorMessege.module.css";

const ErrorMessage = ({ message }) => (
  <div className={s.ErrorMessage}>
    <p>{message}</p>
  </div>
);

export default ErrorMessage;