import React from 'react';
import PaymentForms from '../components/PaymentForms';
import PaymentMetod from '../components/PaymentMetod';
import ProductReview from '../components/ProductReview';

export default function PaymentPage(props) {
  const shoppingCart = [...props.location.state.shoppingCart];
  return (


    <div className="payment-wrap">
      <p> revise seus produtos</p>
      <div className="product_list">
        <ul>
          {shoppingCart
            .map(({ item: { title, thumbnail, price, availableQuantity }, qty: qtd }) => (
              <ProductReview
                key={title}
                title={title}
                thumbnail={thumbnail}
                price={price}
                qtd={qtd}
                availableQuantity={availableQuantity}
              />
            ))}
        </ul>
      </div>
      <PaymentForms />
      <PaymentMetod />
    </div>
  );
}
