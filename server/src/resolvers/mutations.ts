import admin from '../config/firebase-config';
import client from '../config/mongoDB-config';

const register = async (_, { registerData }) => {
  const email = registerData.email;
  const password = registerData.password;

  const userRecord = await admin.auth().createUser({ email, password });
  console.log(userRecord);

  const db = client.db('on-the-map');
  const collection = db.collection('users');
  const result = await collection.insertOne(registerData);

  return { email, password, firstName: registerData.firstName, lastName: registerData.lastName };
};

export default {
  register,
};
