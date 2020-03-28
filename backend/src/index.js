const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/*Para que quando for pegar dados em json ele converta par aum objeto em JS*/
app.use(cors());
app.use(express.json());
app.use(routes);
/*Rotas e recurso*/
/**
 * Metodos HTTP:
 * 
 * GET:Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parametros:
  * 
  * Query PArams: Parametros nomeados e enviados na rota apos o simbolo de ? (Filtos, paginações)
  * Route PArams: Parametros utilizados para identificar recursos (usa o : depois vem o id do usuarios)
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  * 
  */

    /**
     * SQL : MYSQL, SQLite, PostgreSQL, Oracle, Microsoft SQL server
     * NoSQL: MongoDB, Couch, etc
     * 
     */

app.listen(3333);