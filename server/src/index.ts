import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
require('graphql-import-node');
const typeDefs = require('./users.graphql');
import admin, { firebaseConfig } from './config/firebaseConfig';

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
        books: () => books,
    },
    Mutation: {
        createUser: (parent, args, context, info) => {
            const email = args.email;
            const password = args.password;
            admin
                .auth()
                .createUser({ email, password })
                .then((userRecord) => console.log(userRecord));
            return { email, password };
        },
    },
};

const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4001 },
});

console.log(`🚀  Server ready at ${url}`);
