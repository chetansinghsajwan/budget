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
  onValueChange?: (value: number) => void
  editable?: boolean
}

export const CurrencyCard = (props: CurrencyCardProps) => {
  const theme = useTheme()
  const editable = props.editable ?? false

  const getValueString = () => props.value.toString()

  const onValueChange = (newValueString: string) => {
    if (!props.onValueChange) return

    newValueString = newValueString.replace(/[^0-9]/g, '')
    const newValue = parseInt(newValueString)
    props.onValueChange(newValue)
  }

  return (
    <Card>
      <View
        style={{
          flexDirection: 'row',
          padding: 15,
        }}
      >
        <View
          style={{
            width: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name='currency-rupee' />
        </View>
        <View
          style={{
            justifyContent: 'center',
          }}
        >
          <TextInput
            value={getValueString()}
            onChangeText={onValueChange}
            editable={editable}
            style={{
              outlineStyle: 'none',
              fontFamily: theme.h5FontFamily,
              fontSize: theme.h5Size,
              borderWidth: 0,
            }}
          />
        </View>
      </View>
    </Card>
  )
}
