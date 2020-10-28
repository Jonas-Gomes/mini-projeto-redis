const express = require('express');
const routes = require('./routes');
const postgres = require('./databases/db_postgres');
const redis = require('./databases/db_redis');

const app = express();
app.use(express.json());
app.use(routes);

postgres.authenticate().then(() => {
  console.log('Conectado no postgreSQL!');
}).catch( err => {
  console.log('Erro');
});


//Conexao com redis
redis.on("connect", function(error){
  console.log("Conectado!");
});

redis.on("error", function(error){
  console.log(error);
});
