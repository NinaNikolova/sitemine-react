import axios from 'axios';

export const getAll = async () => {
    const { data } = await axios.get('/api/sites');
    return data;
};

export const search = async searchTerm => {
    const { data } = await axios.get('/api/sites/search/' + searchTerm);
    return data;
};

export const getAllTags = async () => {
    const { data } = await axios.get('/api/sites/tags');
    return data;
};

export const getAllTag = async tag => {
    if (tag === 'всички') return getAll();
    const { data } = await axios.get('/api/sites/tag/' + tag);
    return data;

};

export const getById = async siteId => {
    const { data } = await axios.get('/api/sites/' + siteId);
    return data;
}