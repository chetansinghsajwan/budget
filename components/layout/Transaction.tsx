import { View } from '@components/ui/View'
import { Button } from '@components/ui/Button'
import { TextField } from '@components/ui/TextField'
import { RadioGroup } from '@components/ui/RadioGroup'
import { Transaction } from '@services/Transaction'
import { Icon } from '@components/ui/Icon'

export interface TransactionLayoutProps {
  transaction: Transaction
}

export const TransactionLayout = (props: TransactionLayoutProps) => {
  const onTransactionTypeChange = (value: string) => {
    console.log(`transaction type set to ${value}`)
  }

  return (
    <View>
      {/* Amount */}
      <TextField placeholder='Amount' inputMode='numeric' />

      {/* TransactionLayout type */}
      <RadioGroup
        key='transaction-type'
        onPress={onTransactionTypeChange}
        containerStyle={{
          flexDirection: 'row',
        }}
        radioButtons={[
          {
            id: 'credit',
            label: 'Credit',
          },
          {
            id: 'debit',
            label: 'Debit',
          },
        ]}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          gap: 15,
        }}
      >
        {/* Cancel */}
        <Button label='Cancel' icon='cross' />

        {/* Save */}
        <Button label='Save' icon='check' />
      </View>
    </View>
  )
}
