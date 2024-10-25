import { Pressable, PressableProps } from 'react-native'
import { Icon } from '@components/Icons'
import { Text } from '@components/Text'

export type ButtonProps = PressableProps & {
  title?: string
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
      <Text value={props.title} />
    </Pressable>
  )
}
