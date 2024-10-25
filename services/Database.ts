import { Transaction, TransactionId } from '@services/Transaction'

export class Database {
  transactions = new Map<TransactionId, Transaction>()

  addTransaction = async (transaction: Transaction): Promise<boolean> => {
    this.transactions.set(transaction.id, transaction)
    return true
  }

  removeTransaction = async (id: TransactionId): Promise<boolean> => {
    return this.transactions.delete(id)
  }

  getTransactions = async (): Promise<Transaction[]> => {
    return Array.from(this.transactions.values())
  }
}
