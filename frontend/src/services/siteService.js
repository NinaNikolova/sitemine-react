import { sample_sites, sample_tags } from "../data";

export const getAll = async () => sample_sites;

export const search = async searchTerm => sample_sites.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

export const getAllTags = async () => sample_tags;

export const getAllTag = async tag => {
    if (tag === 'Всички') {
        return getAll();
    } else {
        return sample_sites.filter(item => item.tags?.includes(tag));
    }

};

export const getById = async siteId => sample_sites.find(item => item.id === siteId);