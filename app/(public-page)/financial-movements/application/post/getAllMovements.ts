

import { COLLECTIONS } from "../../domain/constants/constants";
import { MovementEntity } from "../../domain/entities/Movement.entity";
import { addDocFirebase } from "../../infrastructure/api/post/postDocFirebase";

interface IMovementViewModel {
  data:MovementEntity;
}

export async function AddMovement(data:MovementEntity):Promise<boolean> {
  await addDocFirebase(COLLECTIONS.MOVEMENTS,data);
  console.log("ok")
  return true
}