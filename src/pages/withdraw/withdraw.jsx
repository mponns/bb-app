import './withdraw.css';

const Withdraw = () => {
    return (
        <div className="withdraw">
            <div className="withdraw-account">
                <h1>Account Name</h1>
                <p>Account Number</p>
            </div>
            <div className="withdraw-details">
                <h1>Withdraw</h1>
                <input type="number" />
                <button type="submit" />
            </div>
        </div>
    )
}

export default Withdraw;