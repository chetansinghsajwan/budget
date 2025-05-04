import { Button } from '@components/Button'
import { useClient } from '@client/ClientProvider'
import { useNavigate } from 'react-router'
import { Transaction } from '@client/Transaction'
import { useState } from 'react'
import { PageTemplate } from '@templates/Page'
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

  function onCancel() {
    navigate(-1)
  }

  function onSave() {
    client.addTransaction(transaction)
    navigate(-1)
  }

  function onChange(changes: Partial<Transaction>) {
    return setTransaction({ ...transaction, ...changes })
  }

  return (
    <PageTemplate
      footer={
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            height: 70,
          }}
        >
          <Button label='Cancel' variant='light' size='sm' onPress={onCancel} />
          <Button label='Save' variant='light' size='sm' onPress={onSave} />
        </div>
      }
    >
      <TransactionEditView transaction={transaction} onChange={onChange} />
    </PageTemplate>
  )
}
