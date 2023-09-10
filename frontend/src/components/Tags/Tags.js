import React from 'react';
import classes from './tags.module.css';
import { Link } from 'react-router-dom';

export default function Tags({ tags, forSitePage }) {
    return (
        <div className={classes.container} style={{ justifyContent: forSitePage ? 'start' : 'center' }}>
            {tags.map(tag => <Link key={tag.name} to={`/tag/${tag.name}`}>{tag.name}{!forSitePage && `(${tag.count})`}</Link>)}
        </div>
    );
}
