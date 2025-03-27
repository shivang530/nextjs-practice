import React from "react";
import "./Signin.scss";
import Button from "./Button";

const SigninComponent = () => {
  return (
    <div className="signin-container">
      <div className="signin-box">
        <div className="signin-title">Sign in</div>
        <div className="signin-form">
          <LabelledInput label="Username" placeholder="" />
          <LabelledInput label="Password" type="password" placeholder="" />
          <Button buttonClasses={"signin-button"} />
        </div>
      </div>
    </div>
  );
};

export default SigninComponent;

function LabelledInput({ label, placeholder, type }) {
  return (
    <div className="input-group">
      <label className="input-label">{label}</label>
      <input
        type={type || "text"}
        className="input-field"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
