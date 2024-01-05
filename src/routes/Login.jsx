import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


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
    try {
      const response = await axios.post("http://localhost:8080/v1/auth/login", formData, {
        withCredentials: true,
      });
  
      if (response.data.status === 'success') {
        const authToken = response.data.data.token;
  
        // Store the token securely, for example, in an HTTP-only cookie
        document.cookie = `SessionID=${authToken}; secure; HttpOnly; SameSite=None`;
  
        // Set the user role
        setRole(response.data.data.role);
  
        alert("Login successful!");
  
        if (response.data.data.role === 'admin') {
          console.log('Admin');
          // Redirect to the admin page or perform other admin-related actions
        } else {
          console.log('User');
          // Redirect to the user dashboard or perform other user-related actions
        }
        
        // Additional logic if needed after successful login
      } else {
        console.error('Login failed:', response.data.message);
        alert("Login failed. Please check your credentials.");
        // Handle error or display error message to the user
      }
    } catch (error) {
      console.error('Error during login:', error.response.data);
      alert("Login failed. Please check your credentials.");
      // Handle error or display error message to the user
    }
  };
  
  return (
    <>
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
    </>
  );
};
