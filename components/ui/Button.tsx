import { Pressable, PressableProps } from 'react-native'
import { Icon } from '@components/ui/Icons'
import { Text } from '@components/ui/Text'

export type ButtonProps = PressableProps & {
  label?: string
  icon?: Icon
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
      }}
      {...props}
    >
      <Text value={props.label ?? ''} category='h4' />
    </Pressable>
  )
}
