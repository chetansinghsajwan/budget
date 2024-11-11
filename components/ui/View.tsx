import * as ReactNative from 'react-native'

export type ViewProps = ReactNative.ViewProps & {
  row?: boolean
  'space-between'?: boolean
}

export const View = (props: ViewProps) => {
  return (
    <ReactNative.View
      {...props}
      style={[
        props.row && { flexDirection: 'row' },
        props['space-between'] && { justifyContent: 'space-between' },
        props.style,
      ]}
    />
  )
}
