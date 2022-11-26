import './dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="cards-container">
                <div className="balance cards"></div>
                <div className="savings cards"></div>
                <div className="expenses cards"></div>
            </div>
            <div>
                <h1>Recent</h1>
                <div></div>
            </div>
        </div>
    )
}

export default Dashboard;