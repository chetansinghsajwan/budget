import TablerIcons from '@tabler/icons-react-native'
import React from 'react'

const UpdateIcon = (
  IconComponent: React.ComponentType<TablerIcons.IconProps>,
) => {
  return (props: TablerIcons.IconProps) => (
    <IconComponent {...props} color='white' />
  )
}

export type Icon = (props: TablerIcons.IconProps) => React.ReactNode
export type IconProps = TablerIcons.IconProps

export const PlusIcon = UpdateIcon(TablerIcons.IconPlus)
// export const CrossIcon = UpdateIcon(TablerIcons.IconX)
// export const CancelIcon = CrossIcon
// export const WrongIcon = CrossIcon
// export const CheckIcon = UpdateIcon(TablerIcons.IconCheck)
// export const CorrectIcon = CheckIcon

// export { IconPlus as PlusIcon } from '@tabler/icons-react-native'
