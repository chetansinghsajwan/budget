import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useClient } from '@client/ClientProvider'
import { Transaction } from '@client/Transaction'
import { TransactionEditView } from '@components/TransactionEditView'

export function TransactionCreatePage() {
  const navigate = useNavigate()
  const client = useClient()

  const initTransaction: Transaction = {
    id: '',
    title: '',
    amount: 0,
    datetime: new Date(),
    category: '',
    tags: [],
    notes: '',
  }
  const [transaction, setTransaction] = useState(initTransaction)

  function onChange(changes: Partial<Transaction>) {
    return setTransaction({ ...transaction, ...changes })
  }

  function onBack() {
    navigate(-1)
  }

  function onSave() {
    client.updateTransaction(transaction)
    navigate(-1)
  }

  return <TransactionEditView
    transaction={transaction}
    onChange={onChange}
    onBack={onBack}
    onSave={onSave}
  />
}
