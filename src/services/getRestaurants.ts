import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export async function getRestaurants() {
  const querySnapshot = await getDocs(collection(db, 'restaurants'));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}