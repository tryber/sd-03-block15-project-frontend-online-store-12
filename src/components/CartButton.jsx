import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function CartButton() {
  return (
    <div>
      <Link to="/shopping-cart">
        <button type="button" data-testid="shopping-cart-button">
          <FaShoppingCart size={32} />
        </button>
      </Link>
      <p>Carrinho de Compras</p>
    </div>
  );
}
