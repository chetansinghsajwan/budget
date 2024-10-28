import { Pressable, PressableProps } from 'react-native'
import { Icon, IconName } from '@components/ui/Icon'
import { Text } from '@components/ui/Text'

export type ButtonProps = PressableProps & {
  label?: string
  icon?: IconName
}

export const Button = (props: ButtonProps) => {
  return (
    <Pressable
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        elevation: 3,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        gap: 15,
      }}
      {...props}
    >
      <Icon name={props.icon} />
      <Text value={props.label ?? ''} category='h4' />
    </Pressable>
  )
}
