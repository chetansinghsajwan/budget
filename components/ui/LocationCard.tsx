import { Card } from '@components/ui/Card'
import { Text } from '@components/ui/Text'

export interface LocationCardProps {}

export const LocationCard = (props: LocationCardProps) => {
  return (
    <Card>
      <Text value='Location' />
    </Card>
  )
}
