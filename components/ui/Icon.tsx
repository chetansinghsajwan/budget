import * as TablerIcons from '@tabler/icons-react-native'
import { View, ViewProps } from '@components/ui/View'
import { useTheme } from '@components/Theme'

export type IconName =
  | 'plus'
  | 'cross'
  | 'cancel'
  | 'wrong'
  | 'check'
  | 'correct'
  | 'currency-rupee'
  | 'clock'
  | 'pencil'
  | 'edit'

export interface IconProps extends ViewProps {
  name?: IconName
}

export const Icon = (props: IconProps) => {
  const theme = useTheme()
  const TablerIcon = getTablerIcon(props.name)

  if (!TablerIcon) {
    return <View />
  }

  return <View {...props}>{<TablerIcon color={theme.iconColor} />}</View>
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
    case 'pencil':
      return TablerIcons.IconPencil
    case 'edit':
      return TablerIcons.IconPencil
    default:
      return undefined
  }
}
