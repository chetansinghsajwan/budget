import {
  IconProps as Tabler_IconProps,
  IconPlus as Tabler_IconPlus,
  IconCancel as Tabler_IconCancel,
  IconCheck as Tabler_IconCheck,
} from '@tabler/icons-react-native'

const color = 'white'
export type IconsProps = Tabler_IconProps

export const PlusIcon = (props: IconsProps) => <Tabler_IconPlus color={color} />

export const CrossIcon = (props: IconsProps) => (
  <Tabler_IconCancel color={color} />
)

export const CancelIcon = CrossIcon
export const WrongIcon = CrossIcon

export const CheckIcon = (props: IconsProps) => (
  <Tabler_IconCheck color={color} />
)

export const CorrectIcon = CheckIcon
