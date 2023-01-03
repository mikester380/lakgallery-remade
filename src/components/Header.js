import { React, useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Cart from "./Cart";
import { LayerContext } from "../context/LayerContext";
import { CartContext } from "../context/CartContext";
// import { animateHeader } from "../animations/index";
// import gsap from "gsap";

const Header = function () {
  const [showMenu, setShowMenu] = useState(false);
  const { setShowLayer } = useContext(LayerContext);
  const { showCart, setShowCart, cartSize } = useContext(CartContext);

  const { pathname } = useLocation();

  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);

  return (
    <header className={showMenu ? "header header--fixed" : "header"}>
      <div className="header__top">
        <Link to="/" className="header__home">
          <h1 className="header__title">
            <span>LAK Gallery</span>
          </h1>
        </Link>
        <button
          className="header__menu"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          Menu
        </button>
        <button
          className="header__cart"
          onClick={() => {
            if (!showMenu) {
              setShowLayer(true);
              setShowCart(true);
            }
          }}
        >
          Cart ({cartSize})
        </button>
      </div>
      <Navigation showMenu={showMenu} />
      <Cart
        showCart={showCart}
        setShowCart={setShowCart}
        setShowLayer={setShowLayer}
      />
    </header>
  );
};

export default Header;
