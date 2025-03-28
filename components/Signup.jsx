"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "300px",
        margin: "auto",
        backgroundColor: "lightgray",
      }}
    >
      <h1>Sign up</h1>
      <input
        type="text"
        style={{ padding: "8px", color: "GrayText" }}
        placeholder="Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="text"
        style={{ padding: "8px", color: "GrayText" }}
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        style={{ backgroundColor: "crimson", padding: "8px", border: "0px" }}
        type="button"
        onClick={() => {
          axios
            .post("http://localhost:3000/api/user", {
              username: username,
              password: password,
            })
            .then((res) => {
              console.log(res.data);
            //   router.push("/");
            });
        }}
      >
        Sign up
      </button>
    </div>
  );
};

export default Signup;
