import { View } from '@components/View'
import { Button } from '@components/Button'
import { TextField } from '@components/TextField'
import { RadioGroup } from '@components/RadioGroup'
import { CancelIcon, CheckIcon } from '@components/Icons'

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
          backgroundColor: 'red',
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
