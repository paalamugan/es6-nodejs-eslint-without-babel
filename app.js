import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import indexRouter from './routes/index';
import usersRouter from './routes/users';

// eslint-disable-next-line no-underscore-dangle
global.__dirname = path.resolve('./');

const app = express();

/*
setup the logger
log only 4xx and 5xx responses to console
*/
// app.use(morgan('combined', {
//   skip: (req, res) => (res.statusCode < 400),
// }));

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;
