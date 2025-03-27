"use client";
// This is a client component
import React from "react";

const Button = ({ buttonClasses }) => {
  const handleOnclick = () => {
    console.log("Button clicked");
  };
  return (
    <button onClick={handleOnclick} type="button" className={buttonClasses}>
      Sign in
    </button>
  );
};

export default Button;
