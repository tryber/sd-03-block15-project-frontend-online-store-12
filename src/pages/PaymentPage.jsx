import React from 'react';
import PaymentForms from '../components/PaymentForms';
import PaymentMetod from '../components/PaymentMetod';

export default function PaymentPage() {
  return (
    <div className="payment-wrap">
      <p> revise seus produtos</p>
      <div className="product_list">
        <ul>
          <li>items</li>
        </ul>
      </div>
      <PaymentForms />
      <PaymentMetod />
    </div>
  );
}
