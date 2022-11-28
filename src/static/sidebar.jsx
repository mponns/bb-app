import React from "react";
import Dashboard from "../pages/dashboard/dashboard";
import Deposit from "../pages/deposit/deposit";
import Withdraw from "../pages/withdraw/withdraw";
import Transactions from "../pages/transactions/transactions";
import Budget from "../pages/expenses/expenses";
import './sidebar.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <Router>
            <div className="sidebar">
                <div>
                    <img src="imgs/avatar-bb-app.png" className="prof-picture"/>
                    <h1 className="hello">Hello, Marc</h1>
                    <p className="welcome-text">Welcome back to IronBank</p>
                </div>
                <div className="nav-container">
                    <Link to="/">Dashboard</Link>
                    <Link to="/deposit">Deposit</Link>
                    <Link to="/withdraw">Withdraw</Link>
                    <Link to="/transactions">Transactions</Link>
                    <Link to="/expenses">Budget</Link>
                </div>
                <div className="logout">Log out</div>
            </div>
            <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route exact path="/deposit" element={<Deposit />} />
                <Route exact path="/withdraw" element={<Withdraw />} />
                <Route exact path="/transactions" element={<Transactions />} />
                <Route exact path="/expenses" element={<Budget />} />
            </Routes>
        </Router>
    )
}

export default Sidebar;