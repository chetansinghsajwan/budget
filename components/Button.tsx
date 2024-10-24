import ReactNative from 'react-native'
import { Icon } from '@components/Icons'

export type ButtonProps = ReactNative.ButtonProps & {
  icon?: Icon
}

export const Button = (props: ButtonProps) => {
  return <ReactNative.Button {...props}>{props.icon}</ReactNative.Button>
}
