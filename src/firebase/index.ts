import { initializeApp } from 'firebase/app'
import type { FirebaseApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { firebaseConfig } from './config'
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const app: FirebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export { db };
export default app
