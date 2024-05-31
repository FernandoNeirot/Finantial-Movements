import { MovementEntity } from "../entities/Movement.entity";

export interface ClientRepository {
  getAll: () => Promise<MovementEntity>;
  // getById: (id: string) => Promise<ClientAsyncResultHandler>;
}