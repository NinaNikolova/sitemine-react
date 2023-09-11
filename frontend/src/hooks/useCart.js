import React, { createContext, useContext, useEffect, useState } from 'react';
import { sample_sites } from '../data';

const CartContext = createContext(null);

export default function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(sample_sites.slice(1, 4).map(site => ({ site, quantity: 1, price: site.price })));
    const [totalPrice, setTotalPrice] = useState(40);
    const [totalCount, setTotalCount] = useState(3);
    useEffect(() => {
        const totalPrice = sum(cartItems.map(item => item.price));
        const totalCount = sum(cartItems.map(item => item.quantity));
        setTotalPrice(totalPrice);
        setTotalCount(totalCount);
    }, [cartItems]);

    const sum = items => {
        return items.reduce((prevValue, curValue) => prevValue + curValue, 0);
    };

    const removeFromCart = siteId => {
        const filteredCartItems = cartItems.filter(item => item.site.id !== siteId);
        setCartItems(filteredCartItems);
    };
    const changeQuantity = (cartItem, newQuantity) => {
        const { site } = cartItem;
        const changedCartItem = {
            ...cartItem,
            quantity: newQuantity,
            price: site.price * newQuantity
        };
        setCartItems(
            cartItems.map(item => item.site.id === site.id ? changedCartItem : item)
        );
    };

    return (
        <CartContext.Provider value={{ cart: { items: cartItems, totalPrice, totalCount }, removeFromCart, changeQuantity }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
