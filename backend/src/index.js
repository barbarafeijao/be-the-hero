const express = require ('express');
const routes = require ('./routes');
const cors = require('cors');
/**  o ./ é para se referir que é um arquivo, se não tivesse seria entendido como pacote */

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
