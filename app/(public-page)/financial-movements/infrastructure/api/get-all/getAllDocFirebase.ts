
import { revalidatePath } from "next/cache";
import { MovementEntity } from "../../../domain/entities/Movement.entity";
import { db } from "../../config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const getAllDocsFirebase = async (collectionValue: string) => {
  const docsRef = collection(db, collectionValue);
  const response = await getDocs(docsRef);
  revalidatePath(collectionValue); // Perform revalidation for the specified collection
  const array: MovementEntity[] = [];
  response.forEach((doc) => {
    const data = doc.data() as MovementEntity;
    data.id = doc.id;
    array.push(data);
  });
  return array;
};
