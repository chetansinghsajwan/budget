import {
  Button as ReactNativeButton,
  ButtonProps as ReactNativeButtonProps,
} from 'react-native'
import { Icon } from '@components/Icons'

export type ButtonProps = ReactNativeButtonProps & {
  icon?: Icon
}

export const Button = (props: ButtonProps) => {
  return <ReactNativeButton {...props}>{props.icon}</ReactNativeButton>
}
