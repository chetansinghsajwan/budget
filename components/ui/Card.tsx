import { View, ViewProps } from '@components/ui/View'

export type CardProps = ViewProps

export const Card = (props: CardProps) => {
  return (
    <View
      style={{
        backgroundColor: 'red',
      }}
      {...props}
    ></View>
  )
}
