import { View } from '@components/ui/View'
import { PageTitle } from '@components/ui/PageTitle'
import { RadioCard } from '@components/ui/RadioCard'
import { CurrencyCard } from '@components/ui/CurrencyCard'
import { TimeCard } from '@components/ui/TimeCard'
import { Button } from '@components/ui/Button'
import { Transaction } from '@services/Transaction'
import React from 'react'

export interface TransactionLayoutProps {
  transaction: Transaction
  canEdit?: boolean
  isEditInitialMode?: boolean
}

export const TransactionLayout = (props: TransactionLayoutProps) => {
  const transaction = props.transaction
  const canEdit = props.canEdit ?? false
  const isEditInitialMode = props.isEditInitialMode ?? false

  const [isEditMode, setIsEditMode] = React.useState(isEditInitialMode)

  const onTypeChange = (value: string) => {
    console.log(`transaction type set to ${value}`)
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
          ]}
        />

        {/* Amount */}
        <CurrencyCard
          value={transaction.amount}
          onValueChange={value => transaction.amount = value}
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
