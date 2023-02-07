import { ApolloClient, InMemoryCache } from '@apollo/client';
import { REACT_APP_DEV_API, REACT_APP_DEV_API_PORT } from '@env';

// TODO change the production url later
const uri = `${
    process.env.NODE_ENV === 'development' ? REACT_APP_DEV_API : REACT_APP_DEV_API
}:${REACT_APP_DEV_API_PORT}`;

const client = new ApolloClient({
    uri,
    cache: new InMemoryCache(),
});

export default client;
