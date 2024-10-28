import { useTheme } from '@components/Theme'
import { View } from '@components/ui/View'
import { ColorValue, DimensionValue } from 'react-native'

export type SeparatorType = 'vertical-line' | 'horizontal-line'

export interface SeparatorProps {
  type: SeparatorType
  color?: ColorValue
  width?: DimensionValue
}

export const Separator = (props: SeparatorProps) => {
  const theme = useTheme()
  const width = props.width ?? 3
  const color = props.color ?? theme.separatorColor

  const VerticalLineSeparator = () => (
    <View
      style={{
        height: '100%',
        width: width,
        backgroundColor: color,
      }}
    />
  )

  const HorizontalLineSeparator = () => (
    <View
      style={{
        height: width,
        width: '100%',
        backgroundColor: color,
      }}
    />
  )

  switch (props.type) {
    case 'vertical-line':
      return <VerticalLineSeparator />
    case 'horizontal-line':
      return <HorizontalLineSeparator />
    default:
      return <View />
  }
}
