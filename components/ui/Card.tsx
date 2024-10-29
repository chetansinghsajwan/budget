import { useTheme } from '@components/Theme'
import { View, ViewProps } from '@components/ui/View'

export type CardProps = ViewProps

export const Card = (props: CardProps) => {
  const theme = useTheme()

  return (
    <View
      style={{
        borderRadius: 20,
        backgroundColor: theme.cardColor,
        minHeight: 80,
        justifyContent: 'center',
      }}
      {...props}
    ></View>
  )
}
