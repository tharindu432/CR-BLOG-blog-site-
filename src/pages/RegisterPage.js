import React, { useState } from "react";
import { CAlert } from "@coreui/react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(null);

  async function register(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok ===false) {
      setAlert(
        <CAlert
          className="my-alert"
          color="danger"
          variant="solid"
          style={{
            backgroundColor: "#F44336",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "100px",
            position: "fixed", // add this property
            width: "100%", // add this property
            top: "0", // add this property
            zIndex: "999", // add this property
          }}
        >
          <FaExclamationCircle
            size={30}
            style={{ marginRight: "5px", color: "#FFFFFF" }}
          />
          <span style={{ fontSize: "1rem", marginLeft: "5px" }}>
            Registration failed
          </span>
        </CAlert>
      );
    } else {
      setAlert(
        <CAlert
          className="my-alert"
          color="success"
          variant="solid"
          style={{
            backgroundColor: "#4CAF50",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            marginTop: "100px",
            position: "fixed", // add this property
            width: "100%", // add this property
            top: "0", // add this property
            zIndex: "999", // add this property

          }}
        >
          <FaCheckCircle
            size={30}
            style={{ marginRight: "5px", color: "#FFFFFF" }}
          />
          <span style={{ fontSize: "1rem", marginLeft: "5px" }}>
            Please check your Email to verify your account
          </span>
        </CAlert>
      );
    }

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <div>
      <form className="register" onSubmit={register}>
        <h1 style={{ marginBottom: "20px" }}>Register</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
         
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          
        />
        <button type="submit">Register</button>
      </form>
      {alert}
    </div>
  );
}
