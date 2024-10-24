import { Button } from '@components/Button'
import { TextField } from '@components/TextField'
import { CancelIcon, CheckIcon } from '@components/Icons'
import { RadioButton, RadioGroup } from 'react-native-ui-lib'
import { View } from 'react-native-ui-lib'

export const Transaction = () => {
  const onTransactionTypeChange = (value: string) => {
    console.log(`transaction type set to ${value}`)
  }

  return (
    <View>
      {/* Amount */}
      <TextField placeholder='Amount' inputMode='numeric' />

      {/* Transaction type */}
      <RadioGroup
        id='transaction-type'
        initialValue='credit'
        onValueChange={onTransactionTypeChange}
      >
        <RadioButton value='credit' label='Credit' />
        <RadioButton value='debit' label='Debit' />
      </RadioGroup>

      {/* Cancel */}
      <Button iconSource={style => <CancelIcon />} />

      {/* Save */}
      <Button iconSource={style => <CheckIcon />} />
    </View>
  )
}
