import React from 'react';
import classes from './thumbnails.module.css';
import { Link } from 'react-router-dom';
import StarRating from '../StarRating/StarRating';
import Price from '../Price/Price';

export default function Thumbnails({ sites }) {
    return (
        <ul className={classes.list}>
            {sites.map(site => (
                <li key={site.id}>
                    <Link to={`/site/${site.id}`}>
                        <img
                            className={classes.image}
                            src={`${site.imageUrl}`}
                            alt={site.name}
                        />

                        <div className={classes.content}>
                            <div className={classes.name}>{site.name}</div>
                            <span
                                className={`${classes.favorite} ${site.favorite ? '' : classes.not
                                    }`}
                            >
                                ❤
                            </span>
                            <div className={classes.stars}>
                                <StarRating stars={site.stars} />
                            </div>
                            <div className={classes.product_item_footer}>
                                <div className={classes.origins}>
                                    {site.origins.map(origin => (
                                        <span key={origin}>{origin}</span>
                                    ))}
                                </div>
                                <div className={classes.cook_time}>
                                    <span>🕒</span>
                                    {site.cookTime}
                                </div>
                            </div>
                            <div className={classes.price}>
                                <Price price={site.price} />
                            </div>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
