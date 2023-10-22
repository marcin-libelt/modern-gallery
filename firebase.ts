import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FBASE_KEY,
  authDomain: process.env.FBASE_AUTH_DOMAIN,
  databaseURL: process.env.FBASE_DATABASE_URL,
  projectId: process.env.FBASE_PROJECT_ID,
  storageBucket: process.env.FBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FBASE_MESSEGING_SENDER_ID,
  appId: process.env.FBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export default app;
