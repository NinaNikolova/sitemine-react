import { connect, set } from 'mongoose';
import { UserModel } from '../models/user.model.js';
import { SiteModel } from '../models/site.model.js';
import { sample_users } from '../data.js';
import { sample_sites } from '../data.js';
import bcrypt from 'bcryptjs';
const PASSWORD_HASH_SALT_ROUNDS = 10;
const MONGO_URI = 'mongodb://127.0.0.1:27017/sitemine';
set('strictQuery', true);



export const dbconnect = async () => {
    try {
        connect('mongodb://127.0.0.1:27017/sitemine', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await seedUsers();
        await seedSites();
        console.log('connect successfully---');
    } catch (error) {
        console.log(error);
    }
};

async function seedUsers() {
    const usersCount = await UserModel.countDocuments();
    if (usersCount > 0) {
        console.log('Users seed is already done!');
        return;
    }

    for (let user of sample_users) {
        user.password = await bcrypt.hash(user.password, PASSWORD_HASH_SALT_ROUNDS);
        await UserModel.create(user);
    }

    console.log('Users seed is done!');
}

async function seedSites() {
    const sites = await SiteModel.countDocuments();
    if (sites > 0) {
        console.log('Sites seed is already done!');
        return;
    }

    for (const site of sample_sites) {
        site.imageUrl = `/sites/${site.imageUrl}`;
        await SiteModel.create(site);
    }

    console.log('Sites seed Is Done!');
}