import ReactNative from 'react-native'

export type ViewProps = ReactNative.ViewProps

export const View = (props: ViewProps) => {
  return <ReactNative.View {...props} />
}
