import { useNavigate } from 'react-router'
import { useParams } from 'react-router'
import { useClient } from '@client/ClientProvider'
import { TransactionView } from '@components/TransactionView'

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

  async function onDelete() {
    await client.deleteTransaction(transaction.id)
    navigate('/transactions')
  }

  return <TransactionView
    transaction={transaction}
    onBack={onBack}
    onEdit={onEdit}
    onDelete={onDelete}
  />
}
