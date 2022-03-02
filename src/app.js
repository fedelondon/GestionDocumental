import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';

const app = express();
app.set('PORT', process.env.PORT || 8080);

app.use(express.json());
app.use(morgan('dev'));
app.set('pkg', pkg);

app.get('/', (req, res) =>{
    res.json({
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    });
});

export default app;
