import React, { useState } from "react";
import "../styles/register.css";
import "../styles/register-m.css";
import { useLenis } from "../hooks/useLenis";

const Register: React.FC = () => {
  useLenis(); // Enables smooth scroll animation with Lenis

  const [formData, setFormData] = useState({
    name: "",
    fullName: "",
    address: "",
    country: "",
    phoneNumber: "",
    email: "",
    companyName: "",
    city: "",
    dob: "",
    gender: "",
    declaration: false,
  });

 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const target = e.target as HTMLInputElement | HTMLSelectElement;
  const { name, value } = target;
  const isCheckbox =
    target instanceof HTMLInputElement && target.type === "checkbox";

  setFormData({
    ...formData,
    [name]: isCheckbox ? (target as HTMLInputElement).checked : value,
  });
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    alert("Registration feature coming soon with AWS Cognito!");
  };

  return (
    <>
      <div className="background"></div>

      <div className="logo">
        <a href="/">
          <img src="/assets/favicon.png" alt="Logo" />
        </a>
      </div>

      <div className="container">
        <h1>Signup</h1>
        <h4>Please fill the following details</h4>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            required
            value={formData.fullName}
            onChange={handleChange}
          />

          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter your address"
            required
            value={formData.address}
            onChange={handleChange}
          />

          <input
            type="text"
            id="country"
            name="country"
            placeholder="Enter your country"
            required
            value={formData.country}
            onChange={handleChange}
          />

          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter your phone number"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Enter your company name"
            value={formData.companyName}
            onChange={handleChange}
          />

          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter your city"
            required
            value={formData.city}
            onChange={handleChange}
          />

          <input
            type="date"
            id="dob"
            name="dob"
            required
            value={formData.dob}
            onChange={handleChange}
          />

          <select
            id="gender"
            name="gender"
            required
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <div className="checkbox-container">
            <input
              type="checkbox"
              id="declaration"
              name="declaration"
              required
              checked={formData.declaration}
              onChange={handleChange}
            />
            <label htmlFor="declaration">
              I agree that all the details mentioned above are correct, I agree
              to the terms and conditions.
            </label>
          </div>

          <div className="login-link">
            <p>
              Already have an account?{" "}
              <a href="/login">Login</a>
            </p>
          </div>

          <button type="submit">Signup</button>
        </form>
      </div>
    </>
  );
};

export default Register;