import { Pressable, PressableProps } from 'react-native'
import { Icon, IconName } from '@components/ui/Icon'
import { Text } from '@components/ui/Text'
import { useTheme } from '@components/Theme'

export type ButtonProps = PressableProps & {
  label?: string
  icon?: IconName
}

export const Button = (props: ButtonProps) => {
  const theme = useTheme()

  return (
    <Pressable
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderWidth: 2,
        borderRadius: 50,
        borderColor: theme.iconColor,
        gap: 15,
      }}
      {...props}
    >
      <Icon name={props.icon} />
      <Text value={props.label ?? ''} category='h4' />
    </Pressable>
  )
}
