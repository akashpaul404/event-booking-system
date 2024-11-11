import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/header.css';

function Header() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Check login status

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Remove the login flag from localStorage
    navigate('/'); // Redirect to the login page after logout
  };

  return (
    <header className="header">
      <h1>Event Booking System</h1>
      <nav>
        {/* Conditionally render Home link and Logout button based on login status */}
        {isLoggedIn ? (
          <>
            <Link to="/home">Home</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/">Login</Link> // If not logged in, show Login link
        )}
      </nav>
    </header>
  );
}

export default Header;
