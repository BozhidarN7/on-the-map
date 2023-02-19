import admin from 'firebase-admin';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const serviceAccount = require('../service-accounts/on-the-map-365014-firebase-adminsdk-tkkja-a559be07fe.json');

export const firebaseConfig = () => {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
};

export default admin;
