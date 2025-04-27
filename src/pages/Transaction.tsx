import { useNavigate } from 'react-router'
import { useParams } from 'react-router'
import { Button } from '@components/Button'
import { useClient } from '@client/ClientProvider'
import { TransactionView } from '@components/TransactionView'
import { PageLayout } from '@components/PageLayout'
import { PageFooter } from '@components/PageLayout/Footer'
import { PageLayoutBody } from '@components/PageLayout/Body'

export function TransactionPage() {
  const navigate = useNavigate()
  const client = useClient()
  const params = useParams()
  const transactionResult = client.getTransaction({ id: params.id as string })
  if (!transactionResult) throw 0

  const transaction = transactionResult

  function onCancel() {
    navigate(-1)
  }

  function onEdit() {
    navigate('/transaction/edit/' + transaction.id)
  }

  return (
    <PageLayout>
      <PageLayoutBody>
        <TransactionView transaction={transaction} />
      </PageLayoutBody>
      <PageFooter
        buttons={[
          <Button label='Cancel' size='sm' onPress={onCancel} />,
          <Button label='Save' size='sm' onPress={onEdit} />,
        ]}
      />
    </PageLayout>
  )
}
