import React from 'react'
import { Card, CardProps } from '@components/ui/Card'
import { Icon } from '@components/ui/Icon'
import { View } from '@components/ui/View'
import { useTheme } from '@components/Theme'
import { TextInput } from 'react-native'

export type SearchBarProps = CardProps & {
  value: string
  onChange?: (value: string) => void
}

export const SearchBar = (props: SearchBarProps) => {
  const theme = useTheme()

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
          <Icon name='search' />
        </View>
        <View
          style={{
            justifyContent: 'center',
          }}
        >
          <TextInput
            value={props.value}
            onChangeText={props.onChange}
            style={{
              fontFamily: theme.h5Family,
              fontSize: theme.h5Size,
            }}
          />
        </View>
      </View>
    </Card>
  )
}
