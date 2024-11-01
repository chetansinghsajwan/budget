import React from 'react'
import { Card, CardProps } from '@components/ui/Card'
import { Icon } from '@components/ui/Icon'
import { View } from '@components/ui/View'
import { useTheme } from '@components/Theme'
import { TextInput } from 'react-native'

export type CurrencyType = 'inr' | 'usd' | 'lkr'

export type CurrencyCardProps = CardProps & {
  value: number
  type?: CurrencyType
  onChange?: (value: number) => void
  editable?: boolean
}

export const CurrencyCard = (props: CurrencyCardProps) => {
  const theme = useTheme()
  const editable = props.editable ?? false

  const getValueString = () => props.value.toString()

  const onValueChange = (newValueString: string) => {
    if (!props.onChange) return

    newValueString = newValueString.replace(/[^0-9]/g, '')
    const newValue = parseInt(newValueString)
    props.onChange(newValue)
  }

  return (
    <Card icon='currency-rupee'>
      <TextInput
        value={getValueString()}
        onChangeText={onValueChange}
        editable={editable}
        style={{
          fontFamily: theme.h5Family,
          fontSize: theme.h5Size,
          color: theme.h5Color,
        }}
      />
    </Card>
  )
}
