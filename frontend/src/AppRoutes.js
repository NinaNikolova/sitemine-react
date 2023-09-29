import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import SitePage from './pages/Site/SitePage';
import CartPage from './pages/Cart/CartPage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import AuthRoute from './components/AuthRoute/AuthRoute';
import CheckoutPage from './pages/Checkout/CheckoutPage';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search/:searchTerm" element={<HomePage />} />
            <Route path="/tag/:tag" element={<HomePage />} />
            <Route path="/site/:id" element={<SitePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/checkout" element={<AuthRoute>
                <CheckoutPage />
            </AuthRoute>} />
        </Routes>
    );
}
