export type TransactionType = 'credit' | 'debit'

export type TransactionId = string

export class Transaction {
  id: TransactionId = ''
  title: string = ''
  amount: number = 0
  type: TransactionType = 'credit'
  category: string = ''
  time: Date = new Date()
  description: string = ''
  createdAt: Date = new Date()
}
