import React from "react";
import './style.css'

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <div className="error-message">{message}</div>;
};

export default ErrorMessage;
