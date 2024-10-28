import * as TablerIcons from '@tabler/icons-react-native'
import { useTheme } from '@react-navigation/native'
import { View, ViewProps } from '@components/ui/View'

export type IconName =
  | 'plus'
  | 'cross'
  | 'cancel'
  | 'wrong'
  | 'check'
  | 'correct'
  | 'currency-rupee'
  | 'clock'

export interface IconProps extends ViewProps {
  name?: IconName
}

export const Icon = (props: IconProps) => {
  const theme = useTheme()
  const TablerIcon = getTablerIcon(props.name)

  if (!TablerIcon) {
    return <View />
  }

  return (
    <View {...props}>
      {<TablerIcon color={theme.dark ? 'white' : 'black'} />}
    </View>
  )
}

const getTablerIcon = (name?: IconName): TablerIcons.Icon | undefined => {
  switch (name) {
    case 'plus':
      return TablerIcons.IconPlus
    case 'cross':
      return TablerIcons.IconX
    case 'cancel':
      return TablerIcons.IconX
    case 'wrong':
      return TablerIcons.IconX
    case 'check':
      return TablerIcons.IconCheck
    case 'correct':
      return TablerIcons.IconCheck
    case 'currency-rupee':
      return TablerIcons.IconCurrencyRupee
    case 'clock':
      return TablerIcons.IconClock
    default:
      return undefined
  }
}
