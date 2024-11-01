import { Transaction, TransactionType } from '@services/Transaction'
import { Database } from './Database'

export interface TransactionCreate {
  title: string
  amount: number
  type: TransactionType
  category?: string
}

export class Client {
  db = new Database()

  constructor() {
    this.generateDummyTransactions(100)
  }

  generateDummyTransactions = async (count: number) => {
    for (let i = 0; i < count; i++) {
      const transaction: Transaction = {
        id: (i + 1).toString(),
        title: `Title ${i + 1}`,
        amount: Math.floor(Math.random() * 1000) + 1,
        type: Math.random() > 0.5 ? 'credit' : 'debit',
        category: `Category ${i + 1}`,
        time: new Date(
          Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30),
        ),
        description: `Transaction ${i + 1}`,
        createdAt: new Date(),
      }

      await this.db.addTransaction(transaction)
    }
  }

  createTranscation = async (
    input: TransactionCreate,
  ): Promise<Transaction> => {
    const transaction = {
      id: '242342-42-43242-42',
      title: input.title,
      type: input.type,
      category: input.category ?? '',
      amount: input.amount,
      time: new Date(),
      description: '',
      createdAt: new Date(),
    }

    await this.db.addTransaction(transaction)
    return transaction
  }

  getTransactions = () => {
    return this.db.getTransactions()
  }
}

export const client = new Client()
