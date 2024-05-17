import React from 'react';

const Payments = ({ payments }) => {
    return (
        <div className="payments-container">
            <ul className="payments-list">
                {payments.map((payment, index) => (
                    <li key={index} className="payment-item">
                        <p className="payment-amount">Date: {payment.payment_date}</p>
                        <p className="payment-amount">Amount: {payment.amount}</p>
                        <p >Status: {payment.payment_status ? 'Paid' : 'Pending'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Payments;
