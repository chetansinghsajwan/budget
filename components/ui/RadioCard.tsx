import { Card } from '@components/ui/Card'
import { Text } from '@components/ui/Text'
import { View } from '@components/ui/View'

export interface RadioButtonProps {
  id: string
  label: string
}

export interface RadioCardProps {
  buttons: RadioButtonProps[]
  id?: string
  onValueChange?: (id: string) => void
  initialValue?: string
}

const RadioButton = (props: RadioButtonProps) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text id={props.id} value={props.label} category='h5' />
    </View>
  )
}

export const RadioCard = (props: RadioCardProps) => {
  return (
    <Card>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 20,
        }}
      >
        {props.buttons.map(button => {
          return <RadioButton key={button.id} {...button} />
        })}
      </View>
    </Card>
  )
}
