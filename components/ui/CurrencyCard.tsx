import { Card, CardProps } from '@components/ui/Card'
import { Text, CurrencyFormat } from '@components/ui/Text'
import { Icon } from './Icon'
import { View } from './View'

export type CurrencyCardProps = CardProps & {
  value: number
  format?: CurrencyFormat
}

export const CurrencyCard = (props: CurrencyCardProps) => {
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
          <Text
            value={props.value}
            currencyFormat={props.format}
            category='h5'
          />
        </View>
      </View>
    </Card>
  )
}
