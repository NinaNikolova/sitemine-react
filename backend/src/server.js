import express from 'express';
import cors from 'cors';
import siteRouter from './routers/site.router.js'

const app = express();

app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000'],
}));

app.use('/api/sites', siteRouter);
const PORT = 5000;
app.listen(PORT, () => {
    console.log('Listening on port' + PORT);
})