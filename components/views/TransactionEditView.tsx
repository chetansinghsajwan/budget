import { View } from '@components/ui/View'
import { PageTitle } from '@components/ui/PageTitle'
import { RadioCard } from '@components/cards/RadioCard'
import { CurrencyCard } from '@components/cards/CurrencyCard'
import { TimeCard } from '@components/cards/TimeCard'
import { Button } from '@components/ui/Button'
import { Transaction, TransactionType } from '@services/Transaction'
import { useSlidingSheet } from '@components/ui/SlidingSheet'
import { TimeModal } from '@components/modals/TimeModal'

export interface TransactionViewProps {
  value: Transaction
  onChange?: (value: Transaction) => void
}

export const TransactionEditView = (props: TransactionViewProps) => {
  const transaction = props.value
  const timeModal = useSlidingSheet()

  const onClose = () => {}

  const onCancel = () => {}

  const onSave = () => {}

  const onTitleChange = (value: string) => {
    if (!props.onChange) return

    const newTransaction = {
      ...transaction,
      title: value,
    }

    props.onChange(newTransaction)
  }

  const onTypeChange = (value: string) => {
    if (!props.onChange) return
    if (value !== 'credit' && value !== 'debit') return
    const type: TransactionType = value as TransactionType

    const newTransaction = {
      ...transaction,
      type: type,
    }

    props.onChange(newTransaction)
  }

  const onAmountChange = (value: number) => {
    if (!props.onChange) return

    const newTransaction = {
      ...transaction,
      amount: value,
    }

    props.onChange(newTransaction)
  }

  const onTimeChange = (value: Date) => {}

  const onCurrencyCardPress = () => {}

  const onTimeCardPress = () => {
    timeModal.current?.expand()
  }

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
        <Button icon='cross' onPress={onCancel} />
        <Button icon='check' onPress={onSave} />
      </View>

      {/* Title */}
      <PageTitle
        value={transaction.title}
        placeholder='Title'
        onChange={onTitleChange}
        editable
      />

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
          onChange={onTypeChange}
          items={[
            { id: 'credit', label: 'Credit' },
            { id: 'debit', label: 'Debit' },
          ]}
          editable
        />

        {/* Amount */}
        <CurrencyCard
          value={transaction.amount}
          onPress={onCurrencyCardPress}
        />

        {/* Time */}
        <TimeCard value={transaction.time} onPress={onTimeCardPress} />

        {/* Location */}
        {/* <LocationCard value={transaction.location} /> */}
      </View>
      <TimeModal
        ref={timeModal}
        value={transaction.time}
        onChange={onTimeChange}
      />
    </View>
  )
}
