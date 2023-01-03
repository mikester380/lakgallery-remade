import { React, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CurrContext } from "../context/CurrContext";
import { formatPrice } from "../utils/helpers";

const CartItem = ({ title, creator, edition, price, quantity, image }) => {
  const { updateItemQuantity, remove } = useContext(CartContext);
  const { currency, exchangeRate } = useContext(CurrContext);

  const increaseQty = () => {
    if (quantity < 20) {
      updateItemQuantity({
        title,
        price: price / quantity,
        quantity: quantity + 1,
      });
    }
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      updateItemQuantity({
        title,
        price: price / quantity,
        quantity: quantity - 1,
      });
    }
  };

  return (
    <div className="cart__item">
      <div className="cart__item-image">
        <img src={image} alt={title} />
      </div>
      <div className="cart__item-details">
        <div className="cart__item-top">
          <p className="cart__item-title">
            <span>{title}</span> <br />
            <span>by {creator}</span> <br />
            <span>{edition}</span>
          </p>
          <p className="cart__item-price">
            {formatPrice({
              curr: currency,
              price: price * exchangeRate,
            })}
          </p>
        </div>
        <div className="cart__item-bottom">
          <div className="cart__item-quantity">
            <button className="cart__item-decrease-qty" onClick={decreaseQty}>
              -
            </button>
            <span className="cart__item-qty-value">{quantity}</span>
            <button className="cart__item-increase-qty" onClick={increaseQty}>
              +
            </button>
          </div>
          <button className="cart__item-remove" onClick={() => remove(title)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
