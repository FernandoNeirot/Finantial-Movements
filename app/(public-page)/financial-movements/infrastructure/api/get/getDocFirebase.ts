import { db } from "../../config/firebaseConfig";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const getDocFirebase = async (
  collectionValue: string,
  field: string,
  value: any
) => {
  const array: any = [];
  const q = query(collection(db, collectionValue), where(field, "==", value));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    data.id = doc.id;
    array.push(data);
  });

  return array[0];
};
