import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helpers";
import { CurrContext } from "../context/CurrContext";

const Product = function ({ title, creator, price, image, id }) {
  const { currency, exchangeRate } = useContext(CurrContext);
  price = formatPrice({
    price: price * exchangeRate,
    curr: currency,
  });

  return (
    <Link to={`/piece/${id}`} className="product">
      <div className="product__image">
        <img src={image} alt={title} />
      </div>
      <div className="product__info">
        <span>{title}</span>
        <br />
        <span>by {creator}</span>
        <br />
        <span>{price}</span>
      </div>
    </Link>
  );
};

export default Product;
