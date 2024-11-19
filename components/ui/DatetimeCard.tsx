import { Card } from '@components/ui/Card'
import { Text } from '@components/ui/Text'

export interface DatetimeCardProps {
  value: Date
  onPress?: () => void
}

export const DatetimeCard = (props: DatetimeCardProps) => {
  return (
    <Card icon='clock' onPress={props.onPress}>
      <Text value={props.value} format='datetime' category='h5' />
    </Card>
  )
}
