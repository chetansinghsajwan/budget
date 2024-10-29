import { Card } from '@components/ui/Card'
import { Text } from '@components/ui/Text'
import { View } from '@components/ui/View'
import { Icon } from '@components/ui/Icon'

export interface TimeCardProps {
  value: Date
}

export const TimeCard = (props: TimeCardProps) => {
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
          <Icon name='clock' />
        </View>
        <View
          style={{
            justifyContent: 'center',
          }}
        >
          <Text value={props.value} format='datetime' category='h5' />
        </View>
      </View>
    </Card>
  )
}
