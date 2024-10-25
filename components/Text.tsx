import * as ReactNative from 'react-native'
import { useFonts } from 'expo-font'
import { Poppins_400Regular } from '@expo-google-fonts/poppins'

export type TextProps = ReactNative.TextProps & {
  value?: string
}

export const Text = (props: TextProps) => {
  useFonts({ Poppins_400Regular })

  return (
    <ReactNative.Text style={{ fontFamily: 'Poppins_400Regular' }} {...props}>
      {props.value}
    </ReactNative.Text>
  )
}
