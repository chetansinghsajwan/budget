import { Card, CardProps } from '@components/ui/Card'
import { Text } from '@components/ui/Text'

export type CurrencyType = 'inr' | 'usd' | 'lkr'

export type CurrencyCardProps = CardProps & {
  value: number
  type?: CurrencyType
}

export const CurrencyCard = (props: CurrencyCardProps) => {
  const valueString = props.value.toString()

  return (
    <Card icon='currency-rupee' onPress={props.onPress}>
      <Text value={valueString} category='h5' />
    </Card>
  )
}
