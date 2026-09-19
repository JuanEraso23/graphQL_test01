const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Definir el esquema GraphQL
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Definir los resolvers
const root = {
  hello: () => '¡Hola mundo desde GraphQL!'
};

const app = express();

// Middleware de GraphQL
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,  // Habilita la interfaz gráfica para pruebas
}));

app.listen(4000, () => {
  console.log('Servidor corriendo en http://localhost:4000/graphql');
});