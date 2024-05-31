export interface MovementEntity {
  id: string;
  date: Date | string;
  amount: number;
  description: string;
  category: string;
  account: string;
  paid: boolean;
  type: 'income' | 'expense';
  currency: 'USD' | '$';
}

export interface MovementViewModel {
  month: string;
  data: MovementEntity[];
}