import { Button } from '@components/Button'
import { useClient } from '@client/ClientProvider'
import { useNavigate, useParams } from 'react-router'
import { TransactionEditView } from '@components/TransactionEditView'
import { Transaction } from '@client/Transaction'
import { useState } from 'react'
import { PageFooter } from '@components/PageLayout/Footer'
import { PageLayout } from '@components/PageLayout'

export function TransactionEditPage() {
  const navigate = useNavigate()
  const client = useClient()
  const params = useParams()

  const transactionResult = client.getTransaction({ id: params.id as string })
  if (!transactionResult) throw 0

  const [transaction, setTransaction] = useState(transactionResult)

  function onCancel() {
    navigate(-1)
  }

  function onSave() {
    client.updateTransaction(transaction)
    navigate(-1)
  }

  function onChange(changes: Partial<Transaction>) {
    return setTransaction({ ...transaction, ...changes })
  }

  return (
    <PageLayout>
      <div
        id='top-bar'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          height: 60,
        }}
      >
        <Button label='Cancel' size='md' onPress={onCancel} />
        <Button label='Accept' size='md' onPress={onSave} />
      </div>
      <TransactionEditView transaction={transaction} onChange={onChange} />
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
