import { View } from '@components/ui/View'
import { PageTitle } from '@components/ui/PageTitle'
import { RadioCard } from '@components/cards/RadioCard'
import { CurrencyCard } from '@components/cards/CurrencyCard'
import { TimeCard } from '@components/cards/TimeCard'
import { Button } from '@components/ui/Button'
import { Transaction } from '@services/Transaction'

export interface TransactionViewProps {
  value: Transaction
  canEdit?: boolean
}

const defaults = {
  canEdit: true,
}

export const TransactionView = (props: TransactionViewProps) => {
  const transaction = props.value
  const canEdit = props.canEdit ?? defaults.canEdit

  const onClose = () => {}
  const onEdit = () => {}

  return (
    <View>
      {/* Top Bar */}
      <View
        id='top-bar'
        style={{
          height: 100,
          width: '100%',
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Button icon='back' onPress={onClose} />
        {canEdit && <Button icon='edit' onPress={onEdit} />}
      </View>

      {/* Title */}
      <PageTitle value={transaction.title} />

      {/* Content */}
      <View
        id='content'
        style={{
          gap: 10,
          padding: 20,
        }}
      >
        {/* Type */}
        <RadioCard
          value={transaction.type}
          items={[
            { id: 'credit', label: 'Credit' },
            { id: 'debit', label: 'Debit' },
          ]}
        />

        {/* Amount */}
        <CurrencyCard value={transaction.amount} />

        {/* Time */}
        <TimeCard value={transaction.time} />
      </View>
    </View>
  )
}
