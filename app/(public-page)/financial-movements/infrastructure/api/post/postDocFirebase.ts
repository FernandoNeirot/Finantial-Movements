import { db } from "../../config/firebaseConfig";
import {
  addDoc,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";

export const addDocFirebase = async(collectionValue:string, data:any) => {
  const docsRef = collection(db, collectionValue)
  const res = await addDoc(docsRef, data)
  return res
}

export const updateDocFirebase = async(collectionValue: string, data:any, id: any) => {
  const docRef = doc(db, collectionValue, id)
  const res = await updateDoc(docRef,data)
  return res
}
