import * as ReactNative from 'react-native'
import { useFonts } from 'expo-font'
import { Poppins_400Regular } from '@expo-google-fonts/poppins'

export type TextCategory = 'none' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type TextFormat = 'none' | 'integer' | 'currency-inr' | 'datetime-24' | 'datetime-12'

export type TextProps = ReactNative.TextProps & {
  value?: string | number | Date
  format?: TextFormat
  category?: TextCategory
}

export const Text = (props: TextProps) => {
  useFonts({ Poppins_400Regular })

  const text =
    props.value instanceof Date ? props.value.toLocaleTimeString() : props.value

  return (
    <ReactNative.Text style={{ fontFamily: 'Poppins_400Regular' }} {...props}>
      {text}
    </ReactNative.Text>
  )
}
