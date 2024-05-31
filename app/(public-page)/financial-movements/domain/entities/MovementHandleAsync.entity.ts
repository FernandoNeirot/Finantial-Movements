export interface MovementHandleEntity {
  map(arg0: (movement: any) => import("react").JSX.Element): import("react").ReactNode;
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