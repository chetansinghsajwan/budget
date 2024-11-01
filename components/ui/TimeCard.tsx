import { Card } from '@components/ui/Card'
import { Text } from '@components/ui/Text'

export interface TimeCardProps {
  value: Date
}

export const TimeCard = (props: TimeCardProps) => {
  return (
    <Card icon='clock'>
      <Text value={props.value} format='datetime' category='h5' />
    </Card>
  )
}
