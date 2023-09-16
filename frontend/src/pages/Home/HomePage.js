import React, { useEffect, useReducer } from 'react';
import { getAll, getAllTags, search, getAllTag } from '../../services/siteService';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import { useParams } from 'react-router-dom';
import Search from '../../components/Search/Search';
import Tags from '../../components/Tags/Tags';


const initialState = { sites: [], tags: [] };

const reducer = (state, action) => {
    switch (action.type) {
        case 'SITES_LOADED':
            return { ...state, sites: action.payload };
        case 'TAGS_LOADED':
            return { ...state, tags: action.payload };
        default:
            return state;
    }
};
export default function HomePage() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { sites, tags } = state;
    const { searchTerm, tag } = useParams();

    useEffect(() => {
        getAllTags().then(tags => dispatch({ type: 'TAGS_LOADED', payload: tags }));

        const loadSites = tag
            ? getAllTag(tag)
            : searchTerm
                ? search(searchTerm)
                : getAll();

        loadSites.then(sites => dispatch({ type: 'SITES_LOADED', payload: sites }));
    }, [searchTerm, tag]);

    return (
        <>
            <Search />
            <Tags tags={tags} />
            <Thumbnails sites={sites} />
        </>

    );
}
