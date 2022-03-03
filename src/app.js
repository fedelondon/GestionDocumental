import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import authroutes from './routes/auth.routes';

const app = express();
app.set('PORT', process.env.PORT || 8080);

app.use(express.json());
app.use(morgan('dev'));
app.set('pkg', pkg);

app.get('/', (req, res) => {
  res.json({
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version,
  });
});

app.use('/api', authroutes);

export default app;
