import { Router } from 'express';
import { SiteModel } from '../models/site.model.js';
import handler from 'express-async-handler';

const router = Router();

router.get(
    '/',
    handler(async (req, res) => {
        const sites = await SiteModel.find({});
        res.send(sites);
    })
);

router.get(
    '/tags',
    handler(async (req, res) => {
        const tags = await SiteModel.aggregate([
            {
                $unwind: '$tags',
            },
            {
                $group: {
                    _id: '$tags',
                    count: { $sum: 1 },
                },
            },
            {
                $project: {
                    _id: 0,
                    name: '$_id',
                    count: '$count',
                },
            },
        ]).sort({ count: -1 });

        const all = {
            name: 'всички',
            count: await SiteModel.countDocuments(),
        };

        tags.unshift(all);

        res.send(tags);
    })
);

router.get(
    '/search/:searchTerm',
    handler(async (req, res) => {
        const { searchTerm } = req.params;
        const searchRegex = new RegExp(searchTerm, 'i');

        const sites = await SiteModel.find({ name: { $regex: searchRegex } });
        res.send(sites);
    })
);

router.get(
    '/tag/:tag',
    handler(async (req, res) => {
        const { tag } = req.params;
        const sites = await SiteModel.find({ tags: tag });
        res.send(sites);
    })
);

router.get(
    '/:siteId',
    handler(async (req, res) => {
        const { siteId } = req.params;
        const site = await SiteModel.findById(siteId);
        res.send(site);
    })
);

export default router;