import { useTheme } from '@components/Theme'
import { View } from '@components/ui/View'
import { Icon, IconName } from '@components/ui/Icon'
import { ReactNode } from 'react'
import { Pressable, PressableProps } from 'react-native'

export type CardProps = PressableProps & {
  icon?: IconName
}

export const Card = (props: CardProps) => {
  const theme = useTheme()

  const RenderWithIcon = (props: {
    iconName?: IconName
    children?: ReactNode | any
  }) => {
    if (!props.iconName) return props.children

    return (
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
          <Icon name={props.iconName} />
        </View>
        <View
          style={{
            justifyContent: 'center',
          }}
          children={props.children}
        />
      </View>
    )
  }

  return (
    <Pressable
      {...props}
      style={[
        {
          borderRadius: 20,
          backgroundColor: theme.cardColor,
          minHeight: 80,
          justifyContent: 'center',
        },
        props.style,
      ]}
    >
      <RenderWithIcon iconName={props.icon} children={props.children} />
    </Pressable>
  )
}
