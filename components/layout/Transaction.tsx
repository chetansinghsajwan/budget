import { View } from '@components/ui/View'
import { PageTitle } from '@components/ui/PageTitle'
import { RadioCard } from '@components/ui/RadioCard'
import { CurrencyCard } from '@components/ui/CurrencyCard'
import { TimeCard } from '@components/ui/TimeCard'
import { Button } from '@components/ui/Button'
import { Transaction } from '@services/Transaction'

export interface TransactionLayoutProps {
  transaction: Transaction
}

export const TransactionLayout = (props: TransactionLayoutProps) => {
  const transaction = props.transaction

  const onTypeChange = (value: string) => {
    console.log(`transaction type set to ${value}`)
  }

  const onEdit = () => {}
  const onCancel = () => {}
  const onSave = () => {}

  return (
    <View>
      <View
        id='top-buttons'
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}
      >
        <Button icon='cross' onPress={onCancel} />

        {/* Save */}
        <Button icon='check' onPress={onSave} />
      </View>

      {/* Title */}
      <PageTitle title={transaction.title} />

      {/* Contents */}
      <View
        id='contents'
        style={{
          gap: 10,
          padding: 20,
        }}
      >
        {/* Type */}
        <RadioCard
          id='transaction-type'
          onValueChange={onTypeChange}
          initialValue='credit'
          buttons={[
            { id: 'credit', label: 'Credit' },
            { id: 'debit', label: 'Debit' },
            { id: 'debit', label: 'Debit' },
            { id: 'debit', label: 'Debit' },
          ]}
        />

        {/* Amount */}
        <CurrencyCard value={transaction.amount} />

        {/* Time */}
        <TimeCard value={transaction.time} />

        {/* Location */}
        {/* <LocationCard value={transaction.location} /> */}
      </View>
    </View>
  )
}
