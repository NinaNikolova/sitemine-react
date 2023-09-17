import { Router } from "express";
import { sample_sites, sample_tags } from "../data.js";

const router = Router();

router.get('/', (req, res) => {
    res.send(sample_sites);
});
router.get('/tags', (req, res) => {
    res.send(sample_tags);
});
router.get('/search/:searchTerm', (req, res) => {
    const { searchTerm } = req.params;
    const sites = sample_sites.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(sites);
});


router.get('/tag/:tag', (req, res) => {
    const { tag } = req.params;

    const sites = sample_sites.filter(item => item.tags?.includes(tag));
    res.send(sites);
});
router.get('/:siteId', (req, res) => {
    const { siteId } = req.params;
    const site = sample_sites.find(item => item.id == siteId);
    res.send(site);
})
export default router;