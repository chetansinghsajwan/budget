import {
  Icon as TablerIcons_Icon,
  IconProps as TablerIcons_IconProps,
  IconPlus as TablerIcons_IconPlus,
  IconX as TablerIcons_IconX,
  IconCheck as TablerIcons_IconCheck,
} from '@tabler/icons-react-native'
import React from 'react'

const UpdateIcon = (
  IconComponent: React.ComponentType<TablerIcons_IconProps>,
) => {
  return (props: TablerIcons_IconProps) => (
    <IconComponent {...props} color='white' />
  )
}

export type Icon = (props: TablerIcons_IconProps) => React.ReactNode
export type IconProps = TablerIcons_IconProps

export const PlusIcon = UpdateIcon(TablerIcons_IconPlus)
export const CrossIcon = UpdateIcon(TablerIcons_IconX)
export const CancelIcon = CrossIcon
export const WrongIcon = CrossIcon
export const CheckIcon = UpdateIcon(TablerIcons_IconCheck)
export const CorrectIcon = CheckIcon
