
import React, { useState } from "react";
import {Link, Route} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import "./LoginPage.css"
import Home from "./HomePage";
function LoginPage({setUserData}) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birthdate: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data submitted:", formData);
    setUserData(formData)
    navigate('/home',{state:{formData}});
    
  };

  return (
    <div>
      <h1 id="header">Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div class="form-control">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label>
            <span style={{ transitionDelay: "0ms" }}>U</span>
            <span style={{ transitionDelay: "50ms" }}>s</span>
            <span style={{ transitionDelay: "100ms" }}>e</span>
            <span style={{ transitionDelay: "150ms" }}>r</span>
            <span style={{ transitionDelay: "200ms" }}>n</span>
            <span style={{ transitionDelay: "250ms" }}>a</span>
            <span style={{ transitionDelay: "300ms" }}>m</span>
            <span style={{ transitionDelay: "350ms" }}>e</span>
          </label>
        </div>
        <div class="form-control">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label>
            <span style={{ transitionDelay: "0ms" }}>E</span>
            <span style={{ transitionDelay: "50ms" }}>m</span>
            <span style={{ transitionDelay: "100ms" }}>a</span>
            <span style={{ transitionDelay: "150ms" }}>i</span>
            <span style={{ transitionDelay: "200ms" }}>l</span>
          </label>
        </div>
        <span class="datepicker-toggle">
          <span class="datepicker-toggle-button"></span>
          <input
            type="date"
            class="datepicker-input"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleInputChange}
            required
          />
        </span>
        <button class="button type1" type="submit">
          <span class="btn-txt">Enter</span>
        </button>
      </form>
    </div>
  );
}

export default LoginPage;


