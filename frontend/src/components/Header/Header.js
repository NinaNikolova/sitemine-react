import React from 'react';
import classes from "./header.module.css";
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';

export default function Header() {
    const { user, logout } = useAuth();

    const { cart } = useCart();


    return <header className={classes.header}>
        <div className={classes.container}>
            <Link to="/" className={classes.logo}>
                Почерпи едно <i className="fas fa-mug-hot"></i> и имаш уебсайт!
            </Link>
            <nav>
                <ul>
                    {
                        user ?
                            (<li className={classes.menu_container}>
                                <Link to="/profile">{user.name}</Link>
                                <div className={classes.menu}>
                                    <Link to="/profile">Профил</Link>
                                    <Link to="/orders">Поръчки</Link>
                                    <button onClick={logout}>Излез от профила си</button>
                                </div>
                            </li>) : (
                                <Link to="/login">Влез в профила си</Link>

                            )}
                    <li>
                        <Link to="/cart">
                            Количка
                            {cart.totalCount > 0 && (
                                <span className={classes.cart_count}>{cart.totalCount}</span>
                            )}
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>;
}
