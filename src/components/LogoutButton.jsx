import React from 'react';
import axios from 'axios';

const LogoutButton = () => {
  const logoutUser = async () => {
    try {
      const response = await axios.get('http://localhost:8080/v1/auth/logout');
      console.log(response.data);
      alert('Logout successful!');
      
    } catch (error) {
      console.error(error.response.data);
      alert('Logout failed. Please try again.');
      // Handle error or display error message to the user
    }
  };

  return (
    <button type="button" onClick={logoutUser}>
      Logout
    </button>
  );
};

export default LogoutButton;