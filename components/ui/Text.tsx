import * as ReactNative from 'react-native'
import { useFonts } from 'expo-font'
import { Poppins_400Regular } from '@expo-google-fonts/poppins'

export type TextValue = string | number | Date

export type TextCategory = 'plain' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type TextFormat = 'none' | 'integer' | 'float' | 'currency' | 'datetime'

export type CurrencyFormat = 'inr' | 'usd'

export type DatetimeFormat = 'auto' | 'yy:MM:dd HH:mm:ss' | 'yy:MM:dd hh:mm:ss'

export type TextStyle = ReactNative.TextStyle

export type TextProps = ReactNative.TextProps & {
  value: TextValue
  category?: TextCategory
  format?: TextFormat
  currencyFormat?: CurrencyFormat
  datetimeFormat?: DatetimeFormat
  relativeDatetime?: Date
}

export const Text = (props: TextProps) => {
  const text = _toString(props)
  const style: ReactNative.StyleProp<TextStyle> = _getTextStyle(
    props.category ?? 'plain',
  )

  useFonts({ Poppins_400Regular })

  return (
    <ReactNative.Text
      style={{ fontFamily: 'Poppins_400Regular', ...style }}
      {...props}
    >
      {text}
    </ReactNative.Text>
  )
}

const _getTextStyle = (
  category: TextCategory,
): ReactNative.StyleProp<TextStyle> => {
  switch (category) {
    case 'plain':
      return {
        fontSize: 10,
      }
    case 'h1':
      return {
        fontSize: 50,
      }
    case 'h2':
      return {
        fontSize: 40,
      }
    case 'h3':
      return {
        fontSize: 30,
      }
    case 'h4':
      return {
        fontSize: 20,
      }
    case 'h5':
      return {
        fontSize: 15,
      }
    case 'h6':
      return {
        fontSize: 12,
      }
    default:
      return {}
  }
}

const _toString = (props: TextProps): string => {
  switch (props.format ?? 'none') {
    case 'none':
      return _formatNone(props.value)
    case 'float':
      return _formatFloat(props.value)
    case 'integer':
      return _formatInteger(props.value)
    case 'currency':
      return _formatCurrency(props.value, props.currencyFormat ?? 'inr')
    case 'datetime':
      return _formatDatetime(
        props.value,
        props.datetimeFormat ?? 'auto',
        props.relativeDatetime ?? new Date(),
      )
  }
}

const _formatNone = (value: TextValue): string => {
  return value.toString()
}

const _formatFloat = (value: TextValue): string => {
  return value.toString()
}

const _formatInteger = (value: TextValue): string => {
  return value.toString()
}

const _formatDatetime = (
  value: TextValue,
  format: DatetimeFormat,
  relativeDatetime: Date,
): string => {
  if (value instanceof Date === false) return 'format error'

  return value.toLocaleTimeString()
}

const _formatCurrency = (value: TextValue, format: CurrencyFormat): string => {
  return `INR ${value}`
}
