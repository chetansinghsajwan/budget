export enum TransactionType {
  credit,
  debit,
}

export type TransactionId = number

export class Transaction {
  id: TransactionId = 0
  amount: number = 0
  type: TransactionType = TransactionType.credit
  time: Date = new Date()
  description: string = ''
  createdAt: Date = new Date()
}
