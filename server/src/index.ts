import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { createRequire } from 'module';
import 'dotenv/config';

const require = createRequire(import.meta.url);
require('graphql-import-node');
const typeDefs = require('./users.graphql');
import admin, { firebaseConfig } from './config/firebase-config';
import client from './config/mongoDB-config';
import Mutation from './resolvers/mutations';

firebaseConfig();

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    books: (_, __, { userTokenId }) => (userTokenId ? books : []),
  },
  Mutation,
};

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
});

const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => {
    const token = req.headers.authorization || '';
    const userTokenId = token.split(' ')[1];
    console.log(userTokenId);
    return {
      userTokenId,
    };
  },
  listen: { port: 4001 },
});

console.log(`🚀  Server ready at ${url}`);
