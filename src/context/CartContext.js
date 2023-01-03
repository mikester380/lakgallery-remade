import { React, useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  const cartSize = cart
    .map((cartItem) => cartItem.quantity)
    .reduce((prev, curr) => prev + curr, 0);

  const totalPrice = cart
    .map((cartItem) => cartItem.price)
    .reduce((prev, curr) => prev + curr, 0);

  const add = (item) => {
    //checks if item is already in cart.
    const inCart = cart.find((cartItem) => cartItem.title === item.title);

    if (inCart) {
      // index of item in cart
      const prevItemIndex = cart.indexOf(inCart);

      //create a copy of the cart
      const cartCopy = [...cart];

      //remove previous item object from cart copy.
      cartCopy.splice(prevItemIndex, 1);

      //create new item object
      const newItem = {
        ...inCart,
        quantity: inCart.quantity + item.quantity,
        price: inCart.price + item.price,
      };

      //add new item object to cart copy.
      cartCopy.splice(prevItemIndex, 0, newItem);

      //update original cart
      setCart(cartCopy);

      return;
    }

    setCart((prev) => [...prev, item]);
  };

  const remove = (item) => {
    const newCart = cart.filter((cartItem) => cartItem.title !== item);
    setCart(newCart);
  };

  const updateItemQuantity = (item) => {
    const cartItem = cart.find((cItem) => cItem.title === item.title);
    const indexOfItem = cart.indexOf(cartItem);

    //create cart copy
    const cartCopy = [...cart];

    //remove prev version from cart
    cartCopy.splice(indexOfItem, 1);

    //create new item version
    const newItem = {
      ...cartItem,
      quantity: item.quantity,
      price: item.quantity * item.price,
    };

    //add new item to cart copy.
    cartCopy.splice(indexOfItem, 0, newItem);

    //update cart
    setCart(cartCopy);
  };

  const value = {
    showCart,
    setShowCart,
    cart,
    cartSize,
    totalPrice,
    add,
    remove,
    updateItemQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
