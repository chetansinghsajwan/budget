import { Button } from '@components/Button'
import { useClient } from '@client/ClientProvider'
import { useNavigate } from 'react-router'
import { TransactionEditView } from '@components/TransactionEditView'
import { Transaction } from '@client/Transaction'
import { useState } from 'react'
import { PageLayout } from '@components/PageLayout'
import { PageFooter } from '@components/PageLayout/Footer'

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
    <PageLayout>
      <PageFooter
        buttons={[
          <Button
            label='Cancel'
            variant='light'
            size='sm'
            onPress={onCancel}
          />,
          <Button label='Save' variant='light' size='sm' onPress={onSave} />,
        ]}
      />
    </PageLayout>
  )
}
