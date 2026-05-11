"use client";
import { createContext, useContext, useState, useEffect } from "react";
import toast from 'react-hot-toast'; 

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setCart(savedCart);
    setWishlist(savedWishlist);
  }, []);

  const addToWishlist = (product) => {
    const isExist = wishlist.find(item => item.product_id === product.product_id);
    if (!isExist) {
      const updatedWishlist = [...wishlist, product];
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      toast.success(`${product.product_title} added to Wishlist!`);
    } else {
      toast.error("Already in Wishlist!");
    }
  };

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success(`${product.product_title} added to Cart!`);
  };

  const removeFromCart = (id) => {
    const updated = cart.filter(item => item.product_id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    toast.error("Item removed from Cart");
  };

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter(item => item.product_id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <CartContext.Provider value={{ cart, wishlist, addToCart, addToWishlist, removeFromCart, removeFromWishlist }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);