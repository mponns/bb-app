import React from "react";
import Sidebar from "./static/sidebar";
import Topbar from "./static/topbar";
import Dashboard from "./pages/dashboard/dashboard";
import './App.css';
//import Deposits from "./pages/Deposits";
//import Withdrawals from "./pages/Withdrawals";
//import Transfers from "./pages/Transfers";
//import Payments from "./pages/Payments";


function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="main-container">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
