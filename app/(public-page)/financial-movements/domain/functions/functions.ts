import dayjs from "dayjs";
import { MovementEntity } from "../entities/Movement.entity";

export const createGroupMonth = (movements: MovementEntity[]) => {
  const groupedData = movements
    .sort((a: MovementEntity, b: MovementEntity) => {
      return dayjs(b.date).diff(dayjs(a.date));
    })
    .reduce((map, item) => {
      const month = dayjs(item.date).format("YYYY-MM-DD");
      if (!map.has(month)) {
        map.set(month, []);
      }

      map.get(month).push({
        ...item,
        hola: true,
      });
      return map;
    }, new Map());
  return Array.from(groupedData ?? [], ([month, data]) => ({ month, data }))
};
