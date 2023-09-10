import React, { useEffect, useReducer } from 'react';
import { getAll, search } from '../../services/siteService';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import { useParams } from 'react-router-dom';
import Search from '../../components/Search/Search';


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
    const { searchTerm } = useParams();

    useEffect(() => {
        const loadSites = searchTerm ? search(searchTerm) : getAll(); //the loadSites is a promise
        loadSites.then(sites => dispatch({ type: 'SITES_LOADED', payload: sites }));
    }, [searchTerm]);

    return (
        <>
            <Search />
            <Thumbnails sites={sites} />
        </>

    );
}
