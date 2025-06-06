import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { Restaurant } from '../types/Restaurant';

export async function postRestaurant(data: Restaurant) {
  return await addDoc(collection(db, 'restaurants'), data);
}