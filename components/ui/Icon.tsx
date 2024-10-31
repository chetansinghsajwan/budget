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
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-up'
  | 'arrow-down'
  | 'back'
  | 'search'

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

const _tablerIconMap = {
  none: undefined,
  plus: TablerIcons.IconPlus,
  cross: TablerIcons.IconX,
  cancel: TablerIcons.IconX,
  wrong: TablerIcons.IconX,
  check: TablerIcons.IconCheck,
  correct: TablerIcons.IconCheck,
  'currency-rupee': TablerIcons.IconCurrencyRupee,
  clock: TablerIcons.IconClock,
  pencil: TablerIcons.IconPencil,
  edit: TablerIcons.IconPencil,
  'arrow-left': TablerIcons.IconArrowLeft,
  'arrow-right': TablerIcons.IconArrowRight,
  'arrow-up': TablerIcons.IconArrowUp,
  'arrow-down': TablerIcons.IconArrowDown,
  back: TablerIcons.IconArrowLeft,
  search: TablerIcons.IconSearch,
}

const getTablerIcon = (name?: IconName): TablerIcons.Icon | undefined => {
  return _tablerIconMap[name ?? 'none']
}
