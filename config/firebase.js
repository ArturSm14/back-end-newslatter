import admin from 'firebase-admin';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const serviceAccount = require('../newsletter-artur-firebase-adminsdk-c3gxv-3f8d249032.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

export {db};