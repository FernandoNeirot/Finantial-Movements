export interface MovementEntity {
  id?: string;
  date: Date | string | null;
  amount: number;
  description: string;
  category: string;
  account: string;
  paid: boolean;
  type: string;
  currency: string;
}

export interface MovementViewModel {
  month: string;
  data: MovementEntity[];
}