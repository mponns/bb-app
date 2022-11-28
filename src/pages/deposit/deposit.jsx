import './deposit.css';

const Deposit = () => {
    return (
        <div className="deposit">
            <div className="deposit-account">
                <h1>Account Name</h1>
                <p>Account Number</p>
            </div>
            <div className="deposit-details">
                <h1>Deposit</h1>
                <input type="number" />
                <button type="submit" />
            </div>
        </div>
    )
}

export default Deposit;