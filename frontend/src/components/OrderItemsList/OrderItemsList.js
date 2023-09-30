import React from 'react';
import { Link } from 'react-router-dom';
import Price from '../Price/Price';
import classes from './orderItemsList.module.css';

export default function OrderItemsList({ order }) {
    return (
        <table className={classes.table}>
            <tbody>
                <tr>
                    <td colSpan="5">
                        <h3>Поръчани сайтове:</h3>
                    </td>
                </tr>
                {order.items.map(item => (
                    <tr key={item.site.id}>
                        <td>
                            <Link to={`/site/${item.site.id}`}>
                                <img src={item.site.imageUrl} alt={item.site.name} />
                            </Link>
                        </td>
                        <td>{item.site.name}</td>
                        <td>
                            <Price price={item.site.price} />
                        </td>
                        <td>{item.quantity}</td>
                        <td>
                            <Price price={item.price} />
                        </td>
                    </tr>
                ))}

                <tr>
                    <td colSpan="3"></td>
                    <td>
                        <strong>Total :</strong>
                    </td>
                    <td>
                        <Price price={order.totalPrice} />
                    </td>
                </tr>
            </tbody>
        </table>
    );
}