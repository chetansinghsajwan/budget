import { Transaction, TransactionType } from '@services/Transaction'

export interface TransactionCreate {
  amount: number
  type: TransactionType
}

export class Client {
  createTranscation = async (
    input: TransactionCreate,
  ): Promise<Transaction> => {
    return {
      id: 0,
      type: input.type,
      amount: input.amount,
      time: new Date(),
      description: '',
      createdAt: new Date(),
    }
  }
}
