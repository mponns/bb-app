import './expenses.css';

const Budget = () => {
    return (
        <div className="budget">
            <div className="balance-budget">
                <h1>Your Balance</h1>
                <h1>10,000</h1>
            </div>
            <div className="budget-info">
                <div className="income-total">
                    <h1>Income</h1>
                    <h1>+0.00</h1>
                </div>
                <form className="income-form">
                    <input type="text" placeholder="Add Income..." />
                    <input type="number" placeholder="Amount" />
                    <button type="Submit">Submit</button>
                </form>
                <div className="expense-total">
                    <h1>Expenses</h1>
                    <h1>-0.00</h1>
                </div>
                <form className="expenses-form">
                    <input type="text" placeholder="Add Expense..." />
                    <input type="number" placeholder="Amount" />
                    <button type="Submit">Submit</button>
                </form>
            </div>
            <div className="transaction-history">
                <div className="income-transactions">
                    <h1>Transaction History</h1>
                    <div class="income-table">
                        <h4>Transaction</h4>
                        <h4>Amount</h4>
                    </div>
                    <div class="income-entered">
                        <p>Salary</p>
                        <p>5,000</p>
                    </div>
                </div>
                <div className="expenses-transactions">
                    <h1>Transaction History</h1>
                    <div class="expenses-table">
                        <h4>Transaction</h4>
                        <h4>Amount</h4>
                    </div>
                    <div class="expenses-entered">
                        <p>Food</p>
                        <p>1,000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Budget;