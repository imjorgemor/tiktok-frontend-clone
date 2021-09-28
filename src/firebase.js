import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyC6npw6dt6IlR02ls-9r8uZwSQcBM8Wrsw",
    authDomain: "tiktokclone-a67d4.firebaseapp.com",
    projectId: "tiktokclone-a67d4",
    storageBucket: "tiktokclone-a67d4.appspot.com",
    messagingSenderId: "550140462756",
    appId: "1:550140462756:web:8d37e3493457b7292ec831"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;