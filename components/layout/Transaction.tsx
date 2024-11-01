import { useState } from 'react'
import { View } from '@components/ui/View'
import { PageTitle } from '@components/ui/PageTitle'
import { RadioCard } from '@components/ui/RadioCard'
import { CurrencyCard } from '@components/ui/CurrencyCard'
import { TimeCard } from '@components/ui/TimeCard'
import { Button } from '@components/ui/Button'
import { Transaction, TransactionType } from '@services/Transaction'

export interface TransactionLayoutProps {
  value: Transaction
  onChange?: (value: Transaction) => void
  editable?: boolean
  isEditInitialMode?: boolean
}

export const TransactionLayout = (props: TransactionLayoutProps) => {
  const transaction = props.value
  const canEdit = props.editable ?? false
  const isEditInitialMode = props.isEditInitialMode ?? false

  const [isEditMode, setIsEditMode] = useState(isEditInitialMode)

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

    const type: TransactionType | undefined =
      value === 'credit' ? 'credit' : value === 'debit' ? 'debit' : undefined

    if (!type) return

    const newTransaction = {
      ...transaction,
      type: type,
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

  const NormalModeTopBar = () => {
    if (!canEdit) return <View />

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
          ]}
        />

        {/* Amount */}
        <CurrencyCard
          value={transaction.amount}
          onValueChange={value => (transaction.amount = value)}
          editable={isEditMode}
        />

        {/* Time */}
        <TimeCard value={transaction.time} />

        {/* Location */}
        {/* <LocationCard value={transaction.location} /> */}
      </View>
    </View>
  )
}
