import * as ReactNative from 'react-native'

export type ViewProps = ReactNative.ViewProps & {
  row?: boolean
  'space-between'?: boolean
}

export const View = (props: ViewProps) => {
  props = { ...props }

  return (
    <ReactNative.View
      style={{
        ...(props.row && {
          flexDirection: 'row',
        }),
        ...(props['space-between'] && {
          justifyContent: 'space-between',
        }),
      }}
      {...props}
    />
  )
}
