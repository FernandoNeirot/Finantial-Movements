import { db } from "../../config/firebaseConfig";
import {
  addDoc,
  collection,
} from "firebase/firestore";

export const addDocFirebase = async (collectionValue: string, data: any) => {
  const docsRef = collection(db, collectionValue);
  const res = await addDoc(docsRef, data);
  return res;
};
