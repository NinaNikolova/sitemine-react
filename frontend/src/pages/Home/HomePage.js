import React, { useEffect, useReducer } from 'react';
import { getAll } from '../../services/siteService';
import Thumbnails from '../../components/Thumbnails/Thumbnails';


const initialState = { sites: [] };

const reducer = (state, action) => {
    switch (action.type) {
        case 'SITES_LOADED':
            return { ...state, sites: action.payload };
        default:
            return state;
    }
};
export default function HomePage() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { sites } = state;

    useEffect(() => {
        getAll().then(sites => dispatch({ type: 'SITES_LOADED', payload: sites }));
    }, []);

    return (
        <>
            <Thumbnails sites={sites} />
        </>

    );
}
