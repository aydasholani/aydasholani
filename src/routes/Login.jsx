import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { REACT_APP_API_KEY } from "../configs";

export default function Login() {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
  const navigate = useNavigate()

  const [role, setRole] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    axios
      .post("http://localhost:8080/v1/auth/login", formData)
      .then((response) => {
        console.log(response.data);
        console.log(response.data.data)
        setRole(response.data.data)

        alert("Login successful!");
        if (response.data.data == 'admin') {
          navigate('/admin')
        } else {
          navigate('/dashboard')
        } 

        

        // Redirect to dashboard or handle success accordingly
      })
      .catch((error) => {
        console.error(error.response.data);
        alert("Login failed. Please check your credentials.");
        // Handle error or display error message to the user
      });
  };

  return (
    <div>
      <p>
        {role}
      </p>
      <h2>Login Form</h2>
      <form>
        <label htmlFor="identifier">Email or Username:</label>
        <input
          type="text"
          id="identifier"
          name="identifier"
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
          required
        />
        <br />

        <button type="button" onClick={loginUser}>
          Login
        </button>
      </form>

      <p>Don't have an account? <Link to="/register">Register here!</Link></p>
    </div>
  );
};
