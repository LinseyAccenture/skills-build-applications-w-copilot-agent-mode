import React from 'react';
import './App.css';
import logo from './octofitapp-small.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';


function App() {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded mb-4">
          <div className="container-fluid">
            <Link className="navbar-brand fw-bold text-white d-flex align-items-center" to="/">
              <img src={logo} alt="Octofit Logo" className="logo-small me-2" />
              Octofit Tracker
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link text-white" to="/activities">Activities</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/leaderboard">Leaderboard</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/teams">Teams</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/users">Users</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/workouts">Workouts</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="card shadow-sm p-4">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={<h2 className="display-5 text-center">Welcome to <span className="text-primary">Octofit Tracker</span>!</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
