import express from 'express';
import compression from 'compression'
import { apiController } from './controller/api';
import { spaController } from './controller/spa';

const PORT = process.env.PORT || 8000;
const app = express();

app.use(compression())
app.use(express.static('public'));
app.use(apiController);
app.use(spaController);

app.listen(PORT, () => console.log(`http:localhost:${PORT}`));
