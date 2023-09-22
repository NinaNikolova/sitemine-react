import { model, Schema } from 'mongoose';

export const SiteSchema = new Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        tags: { type: [String] },
        favorite: { type: Boolean, default: false },
        stars: { type: Number, default: 0 },
        imageUrl: { type: String, required: true },
        origins: { type: [String], required: true },
        prepareTime: { type: String, required: true },
    },
    {
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
        timestamps: true,
    }
);

export const SiteModel = model('site', SiteSchema);