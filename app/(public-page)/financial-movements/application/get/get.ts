import { getDolarBlueInfra } from "../../infrastructure/api/get/getDolarBlue";

export async function getDolarBlue(): Promise<any[]> {
  const dolar = await getDolarBlueInfra();
  return dolar.compra;
}