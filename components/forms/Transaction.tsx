import { View } from '@components/ui/View'
import { Button } from '@components/ui/Button'
import { TextField } from '@components/ui/TextField'
import { RadioGroup } from '@components/ui/RadioGroup'
import { CancelIcon, CheckIcon } from '@components/ui/Icons'

export interface TransactionProps {}

export const Transaction = (props: TransactionProps) => {
  const onTransactionTypeChange = (value: string) => {
    console.log(`transaction type set to ${value}`)
  }

  return (
    <View>
      {/* Amount */}
      <TextField placeholder='Amount' inputMode='numeric' />

      {/* Transaction type */}
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
        <Button title='Cancel' icon={CancelIcon} />

        {/* Save */}
        <Button title='Save' icon={CheckIcon} />
      </View>
    </View>
  )
}
