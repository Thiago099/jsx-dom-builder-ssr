
import express from 'express';
import domBuilderExpressPlugin from 'jsx-dom-builder/express-plugin.js';

const app = express();

app.use(domBuilderExpressPlugin("index.html", "./server/main.jsx"));

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});