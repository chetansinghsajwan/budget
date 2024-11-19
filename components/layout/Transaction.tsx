import { useState } from 'react'
import { View } from '@components/ui/View'
import { PageTitle } from '@components/ui/PageTitle'
import { RadioCard } from '@components/ui/RadioCard'
import { CurrencyCard } from '@components/ui/CurrencyCard'
import { DatetimeCard } from '@components/ui/DatetimeCard'
import { Button } from '@components/ui/Button'
import { Transaction, TransactionType } from '@services/Transaction'
import { useSlidingSheet } from '@components/ui/SlidingSheet'
import { DatetimePicker } from '@components/ui/DatetimePicker'

export interface TransactionLayoutProps {
  value: Transaction
  onChange?: (value: Transaction) => void

  /// can edit values
  editable?: boolean

  /// start as edit mode
  edit?: boolean
}

export const TransactionLayout = (props: TransactionLayoutProps) => {
  const transaction = props.value
  const editable = props.editable ?? false
  const edit = props.edit ?? false
  const datetimePicker = useSlidingSheet()
  const [isEditMode, setIsEditMode] = useState(edit)

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

  const onClose = () => {
    setIsEditMode(false)
  }

  const onEdit = () => {
    setIsEditMode(true)
  }

  const onCancel = () => {
    setIsEditMode(false)
  }

  const onSave = () => {
    setIsEditMode(false)
  }

  const onCurrencyCardPress = () => {}

  const onDatetimeCardPress = () => {
    if (!isEditMode) return

    datetimePicker.current?.expand()
  }

  const onDatetimeChange = (value: Date) => {
  }

  const NormalModeTopBar = () => {
    if (!editable) return <View />

    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Button icon='back' onPress={onClose} />
        <Button icon='edit' onPress={onEdit} />
      </View>
    )
  }

  const EditModeTopBar = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Button icon='cross' onPress={onCancel} />
        <Button icon='check' onPress={onSave} />
      </View>
    )
  }

  return (
    <View>
      {/* Top Bar */}
      <View
        id='top-bar'
        style={{
          height: 70,
          width: '100%',
          padding: 20,
        }}
      >
        {isEditMode ? <EditModeTopBar /> : <NormalModeTopBar />}
      </View>

      {/* Title */}
      <PageTitle
        value={transaction.title}
        placeholder='Title'
        onChange={onTitleChange}
        editable={isEditMode}
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
          editable={isEditMode}
        />

        {/* Amount */}
        <CurrencyCard
          value={transaction.amount}
          onPress={onCurrencyCardPress}
        />

        {/* Time */}
        <DatetimeCard value={transaction.time} onPress={onDatetimeCardPress} />

        {/* Location */}
        {/* <LocationCard value={transaction.location} /> */}
      </View>
      <DatetimePicker ref={datetimePicker} value={transaction.time} onChange={onDatetimeChange} />
    </View>
  )
}
