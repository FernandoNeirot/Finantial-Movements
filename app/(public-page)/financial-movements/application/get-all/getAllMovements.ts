

import { COLLECTIONS } from "../../domain/constants/constants";
import { MovementBalanceViewModel, MovementViewModel } from "../../domain/entities/Movement.entity";
import { getAllDocsFirebase } from "../../infrastructure/api/get-all/getAllDocFirebase";
import { createGroupMonth } from "../../domain/functions/functions";

export async function getAllMoviments(): Promise<MovementBalanceViewModel> {
  const movements = await getAllDocsFirebase(COLLECTIONS.MOVEMENTS);
  return createGroupMonth(movements)  ;
}