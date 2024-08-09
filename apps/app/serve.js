/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const path = require('path');

// eslint-disable-next-line import/no-dynamic-require
const serveLocal = require(path.resolve(__dirname, '../../shared/serveLocal'));

const port = process.env.REACT_APP_DEV_PORT || 3000;

serveLocal(port, __dirname);
