import { Text } from './Text'
import { View } from './View'

export interface PageTitleProps {
  title: string
}

export const PageTitle = (props: PageTitleProps) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
      }}
    >
      <Text value={props.title} category='h1' />
    </View>
  )
}
