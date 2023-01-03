import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { CurrContext } from "../context/CurrContext";
import { formatPrice } from "../utils/helpers";
import CartItem from "./CartItem";

const Cart = function ({ showCart, setShowCart, setShowLayer }) {
  const { cart, cartSize, totalPrice } = useContext(CartContext);
  const { currency, exchangeRate } = useContext(CurrContext);

  return (
    <section className={!showCart ? "cart" : "cart cart--active"}>
      <div className="cart__top">
        <div className="cart__count">Cart ({cartSize})</div>
        <button
          className="cart__close"
          onClick={() => {
            setShowLayer(false);
            setShowCart(false);
          }}
        >
          Close
        </button>
      </div>
      <div className="cart__items">
        {cart.length ? (
          cart.map(({ title, creator, edition, price, quantity, image }) => (
            <CartItem
              title={title}
              creator={creator}
              edition={edition}
              quantity={quantity}
              price={price}
              image={image}
              key={title}
            />
          ))
        ) : (
          <p className="cart__empty">Your cart is empty.</p>
        )}
      </div>
      {cart.length ? (
        <div className="cart__bottom">
          <div className="cart__total">
            <span className="cart__label-total">Subtotal</span>
            <span className="cart__total-value">
              {formatPrice({
                curr: currency,
                price: totalPrice * exchangeRate,
              })}
            </span>
          </div>
          <Link to="/checkout" className="cart__checkout">
            Checkout
          </Link>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Cart;
