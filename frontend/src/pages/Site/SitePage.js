import React, { useEffect, useState } from 'react';
import classes from './sitePage.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { getById } from '../../services/siteService';
import StarRating from '../../components/StarRating/StarRating';
import Tags from '../../components/Tags/Tags';
import Price from '../../components/Price/Price';
import { useCart } from '../../hooks/useCart';
import NotFound from '../../components/NotFound/NotFound';

export default function SitePage() {
    const [site, setSite] = useState({});
    const { id } = useParams();
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const handleAddToCart = () => {
        addToCart(site);
        navigate('/cart');
    };

    useEffect(() => {
        getById(id).then(setSite);
    }, [id]);
    return (
        <>
            {!site ? (<NotFound message="Сайтът не е намерен!" linkText="Върнете се на Начална страница" />) :
                (<div className={classes.container}>
                    <img
                        className={classes.image}
                        src={`${site.imageUrl}`}
                        alt={site.name}
                    />

                    <div className={classes.details}>
                        <div className={classes.header}>
                            <span className={classes.name}>{site.name}</span>
                            <span
                                className={`${classes.favorite} ${site.favorite ? '' : classes.not
                                    }`}
                            >
                                ❤
                            </span>
                        </div>
                        <div className={classes.rating}>
                            <StarRating stars={site.stars} size={25} />
                        </div>

                        <div className={classes.origins}>
                            {site.origins?.map(origin => (
                                <span key={origin}>{origin}</span>
                            ))}
                        </div>

                        <div className={classes.tags}>
                            {site.tags && (
                                <Tags
                                    tags={site.tags.map(tag => ({ name: tag }))}
                                    forSitePage={true}
                                />
                            )}
                        </div>

                        <div className={classes.cook_time}>
                            <span>
                                Време за направа на сайта в <strong>{site.cookTime}</strong> дни
                            </span>
                        </div>

                        <div className={classes.price}>
                            <Price price={site.price} />
                        </div>

                        <button onClick={handleAddToCart}>Добави към количката</button>
                    </div>
                </div>)
            }
        </>
    );
}