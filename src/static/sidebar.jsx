import React from "react";
import Dashboard from "../pages/dashboard/dashboard";
import './sidebar.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <Router>
            <div className="sidebar">
                <div>
                    <img src="imgs/avatar-bb-app.png" className="prof-picture"/>
                    <h1>Hello, Marc</h1>
                    <p className="welcome-text">Welcome back to IronBank</p>
                </div>
                <div className="nav-container">
                    <Link to="/">Dashboard</Link>
                    <Link to="/deposit">Deposit</Link>
                    <Link to="/withdraw">Withdraw</Link>
                    <Link to="/transactions">Transactions</Link>
                </div>
                <div className="logout">Log out</div>
            </div>
            <Routes>
                <Route path="/" exact>
                    <Dashboard />
                </Route>
                <Route path="/deposit" exact>
                    <Deposit />
                </Route>
                <Route path="/withdraw" exact>
                    <Withdraw />
                </Route>
                <Route path="/transactions" exact>
                    <Transactions />
                </Route>
            </Routes>
        </Router>
    )
}

export default Sidebar;