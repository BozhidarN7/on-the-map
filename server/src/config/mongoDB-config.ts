import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_CONNECTION_STRING;
const client = new MongoClient(uri);

export default client;
