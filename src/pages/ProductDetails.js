import React, { useState, useContext, Fragment } from "react";
import { useParams } from "react-router-dom";
import { formatPrice } from "../utils/helpers";
import { CurrContext } from "../context/CurrContext";
import { CartContext } from "../context/CartContext";
import { LayerContext } from "../context/LayerContext";
import Product from "../components/Product";
import { products } from "../data/data";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { title, creator, price, images } = product;
  const { details, dimentions, edition, leadTime, material, origin, year } =
    product.details;

  const relatedPieces = products.filter(
    (pdct) => pdct.category === product.category && pdct.title !== title
  );
  const onlyOneRelated = relatedPieces.length === 1;

  const [showMore, setShowMore] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const { currency, exchangeRate } = useContext(CurrContext);
  const { setShowCart, add } = useContext(CartContext);
  const { setShowLayer } = useContext(LayerContext);

  const formattedPrice = formatPrice({
    price: price * exchangeRate,
    curr: currency,
  });

  const decreaseQty = () => quantity > 1 && setQuantity((prev) => prev - 1);
  const increaseQty = () => quantity < 20 && setQuantity((prev) => prev + 1);

  const addToCart = () => {
    setShowLayer(true);
    setShowCart(true);
    add({
      title,
      creator,
      price: price * quantity,
      quantity,
      edition,
      image: images[0],
    });
  };

  return (
    <Fragment>
      <div className="details">
        <div className="details__details">
          <div className="details__details-top">
            <div className="details__image">
              <img src={images[0]} alt={title} />
            </div>
            <p className="details__title">
              <span>{title}</span>
              <br />
              <span>by {creator}</span>
            </p>
            <p className="details__price">{formattedPrice}</p>
          </div>
          <div className="details__details-bottom">
            <div>
              <div className="details__info">
                <span>Year:</span>
                <span>{year}</span>
              </div>
              <div className="details__info">
                <span>Dimentions:</span>
                <span>{dimentions}</span>
              </div>
              <div className="details__info">
                <span>Edition:</span>
                <span>{edition}</span>
              </div>
              <div className="details__info">
                <span>Material:</span>
                <span>{material}</span>
              </div>
              <div className="details__info">
                <span>Lead Time:</span>
                <span>{leadTime}</span>
              </div>
              <div className="details__info">
                <span>Place of Origin:</span>
                <span>{origin}</span>
              </div>
            </div>
            <div>
              <div className="details__info">
                <span>Details:</span>
                <span>
                  <span
                    className={
                      !showMore
                        ? "details__desc details__desc--less"
                        : "details__desc"
                    }
                  >
                    {details}
                  </span>
                  <button
                    className="details__show-desc"
                    onClick={() => setShowMore(!showMore)}
                  >
                    {!showMore ? "+More" : "-Less"}
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="details__actions">
            <div className="details__quantity">
              <button className="details__decrease-qty" onClick={decreaseQty}>
                -
              </button>
              <span className="details__qty-count">{quantity}</span>
              <button className="details__increase-qty" onClick={increaseQty}>
                +
              </button>
            </div>
            <button className="details__atc" onClick={addToCart}>
              Add to cart
            </button>
          </div>
          <a href="#" className="details__inquire">
            Inquire about this pieces
          </a>
        </div>
        <div className="details__images">
          {images.map((image, index) => (
            <div className="details__image" key={index}>
              <img src={image} alt={title} />
            </div>
          ))}
        </div>
      </div>
      <div className="related-pieces">
        <div className="related-pieces__title">
          <span className="related-pieces__title-sub">(B)</span>
          <h2 className="related-pieces__title-main">Related Pieces</h2>
        </div>
        <div
          className={
            !onlyOneRelated
              ? "related-pieces__pieces"
              : "related-pieces__pieces related-pieces__pieces--one-match"
          }
        >
          {relatedPieces.map(({ creator, title, images, price, id }) => (
            <Product
              creator={creator}
              title={title}
              image={images[0]}
              price={price}
              id={id}
              key={id}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
