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
for (let i = 0; i < 10; i++) {
  console.log(i);
  console.log('test');
  console.log('second test');
}
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
    books: (_, __, { user }) => (user ? books : []),
  },
  Mutation,
};

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
});

const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => {
    const token = req.headers.authorization || '';
    if (!token) {
      return {};
    }
    const userTokenId = token.split(' ')[1];
    const decodedToken = await admin.auth().verifyIdToken(userTokenId);
    const user = await admin.auth().getUser(decodedToken.uid);
    console.log(user);
    return {
      user,
    };
  },
  listen: { port: 4001 },
});

console.log(`🚀  Server ready at ${url}`);
