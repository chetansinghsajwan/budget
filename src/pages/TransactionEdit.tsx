import { useState } from 'react'
import { useClient } from '@client/ClientProvider'
import { useNavigate, useParams } from 'react-router'
import { TransactionEditView } from '@components/TransactionEditView'
import { Transaction } from '@client/Transaction'

export function TransactionEditPage() {
  const navigate = useNavigate()
  const client = useClient()
  const params = useParams()

  const transactionResult = client.getTransaction({ id: params.id as string })
  if (!transactionResult) throw 0

  const [transaction, setTransaction] = useState(transactionResult)

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

  return (
    <TransactionEditView
      transaction={transaction}
      onChange={onChange}
      onBack={onBack}
      onSave={onSave}
    />
  )
}
