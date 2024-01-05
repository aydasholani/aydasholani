import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const registerUser = () => {
    axios
      .post("http://localhost:8080/v1/auth/register", formData)
      .then((response) => {
        console.log(response.data);
        alert("Registration successful!");
        // Redirect to login page or handle success accordingly
      })
      .catch((error) => {
        console.error(error.response.data);
        alert("Registration failed. Please check your input.");
        // Handle error or display error message to the user
      });
  };

  return (
    <>
      <h2>Registration Form</h2>
      <form>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="first_name"
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <br />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="last_name"
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <br />

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <br />

        <button type="button" onClick={registerUser}>
          Register
        </button>
      </form>
      
      <p>Already have an account? <Link to="/login">Login here!</Link></p>
    </>
  );
}
