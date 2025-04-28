import { useNavigate } from 'react-router'
import { useParams } from 'react-router'
import { Button } from '@components/Button'
import { useClient } from '@client/ClientProvider'
import { TransactionView } from '@components/TransactionView'
import { PageTemplate } from '@templates/Page'

export function TransactionPage() {
  const navigate = useNavigate()
  const client = useClient()
  const params = useParams()
  const transactionResult = client.getTransaction({ id: params.id as string })
  if (!transactionResult) throw 0

  const transaction = transactionResult

  function onBack() {
    navigate(-1)
  }

  function onEdit() {
    navigate('/transaction/edit/' + transaction.id)
  }

  return (
    <PageTemplate
      title='Transaction'
      beforeTitleButtons={[
        <Button icon='back' variant='light' size='sm' onPress={onBack} />,
      ]}
      afterTitleButtons={[
        <Button icon='edit' variant='light' size='sm' onPress={onEdit} />,
      ]}
    >
      <TransactionView transaction={transaction} />
    </PageTemplate>
  )
}
