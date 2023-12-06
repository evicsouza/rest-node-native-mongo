const express = require('express');
const bodyParser = require('body-parser');
const { connect } = require('./database/database');
const livroRoutes = require('./routes/livroRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/', livroRoutes);

connect().then(() => {
  app.listen(port, () => {
    console.log(`Servidor ativo na porta ${port}`);
  });
});
