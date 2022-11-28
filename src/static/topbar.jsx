import './topbar.css';
import CreateUser from "../pages/create-user/createuser";
import UserList from "../pages/user-list/userlist";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Topbar = () => {
    return (
        <Router>
            <div className="topbar">
                <div className="brand-container">
                    <h1 className="brand">IronBank</h1>
                </div>
                <div className="topbar-nav">
                    <input type="text" className="search"/>
                    <Link to="/CreateUser">Create User</Link>
                    <Link to="/UserList">User List</Link>
                </div>
            </div>
            <Routes>
                <Route exact path="/createuser" element={<CreateUser />} />
                <Route exact path="/userlist" element={<UserList />} />
            </Routes>
        </Router>
    )
}

export default Topbar;

// will replace links with icons when figured out