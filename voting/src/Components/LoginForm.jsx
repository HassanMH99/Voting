import React, { useState } from "react";
import "./LoginForm.css";
import { Users } from "../user";
export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = Users.find(
        (u) => u.email === email && u.password === password
      );
        if(user){
          
            if(user.type==="admin"){
                alert("Admin")
                window.location.href="/admin"
                
            }else{
                alert("User")
                window.location.href="/user"
            }
        }else{
            setError("invalid email or passowrd");
            console.log(error);
            alert("invalid Error")
        }
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form-field">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};
