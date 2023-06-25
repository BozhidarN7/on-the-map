import admin from '../config/firebase-config';
import client from '../config/mongodb-config';

const register = async (_, { registerData }) => {
  const db = client.db('on-the-map');
  const collection = db.collection('users');
  const result = await collection.insertOne(registerData);

  return {
    email: registerData.email,
    firstName: registerData.firstName,
    lastName: registerData.lastName,
  };
};

export default {
  register,
};
