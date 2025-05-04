import { CostCard } from '@components/CostCard'
import { TimeCard } from '@components/TimeCard'
import { TextCard } from '@components/TextCard'
import { Button } from '@components/Button'
import { Transaction } from '@client/Transaction'
import { PageTemplate } from '@templates/Page'
import constants from '@constants'

export interface TransactionViewProps {
  transaction: Transaction
  onBack?: () => void
  onEdit?: () => void
}

export function TransactionView(props: TransactionViewProps) {
  const { transaction } = props

  return (
    <PageTemplate
      title={transaction.title}
      beforeTitleButtons={[
        <Button icon='back' variant='light' size='sm' onPress={props.onBack} />,
      ]}
      afterTitleButtons={[
        <Button icon='edit' variant='light' size='sm' onPress={props.onEdit} />,
      ]}
    >
      <div
        id='content'
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: constants.transactionElementGap,
        }}
      >
        <CostCard key='amount' variant='long-medium' value={transaction.amount} />
        <TimeCard
          key='datetime'
          variant='long-medium'
          value={transaction.datetime}
        />
        <TextCard
          key='category'
          variant='long-medium'
          leftIcon='category'
          value={transaction.category}
        />
        <TextCard
          key='tags'
          variant='long-medium'
          leftIcon='tag'
          value={transaction.tags}
        />
        <TextCard key='notes' variant='long-flex' value={transaction.notes} />
      </div>
    </PageTemplate>
  )
}
