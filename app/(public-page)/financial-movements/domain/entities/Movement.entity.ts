export interface MovementBalanceEntity {
  amount: number;
  category: string;
  paid: boolean;
  type: string;
  currency: string;
}
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
export interface StateCompleted {
  bancoGalicia: number;
  mercadoPago: number;
  efectivoFer: number;
  efectivoEly: number;
  tarjetaNaranja: number;
}
export interface MovementBalanceViewModel {
  movements: MovementViewModel[];
  balanceArPaid: number;
  balanceUSDPaid: number;
  balanceAr: number;
  balanceUSD: number;
  stateCompleted: StateCompleted;
}
