import './topbar.css';

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="brand-container">
                <h1 className="brand">IronBank</h1>
            </div>
            <input type="text" className="search"/>
        </div>
    )
}

export default Topbar;