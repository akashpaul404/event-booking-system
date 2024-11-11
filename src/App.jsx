import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import EventDetail from './components/EventDetail.jsx';
import Login from './pages/login';
import PrivateRoute from './components/PrivateRoute';  // Import the PrivateRoute component

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Login />} />
              {/* Protect the /home route with PrivateRoute */}
              <Route element={<PrivateRoute />}>
                <Route path="/home" element={<Home />} />
              </Route>
              <Route path="/event/:id" element={<EventDetail />} />
            </Routes>
          </div>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
