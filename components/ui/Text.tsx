import * as ReactNative from 'react-native'
import { Theme, useTheme } from '@components/Theme'

export type TextValue = string | number | Date

export type TextCategory = 'text' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type TextFormat = 'none' | 'integer' | 'float' | 'currency' | 'datetime'

export type CurrencyFormat = 'inr' | 'usd'

export type TimeFormat = 'auto' | 'yy:MM:dd HH:mm:ss' | 'yy:MM:dd hh:mm:ss'

export type TextStyle = ReactNative.TextStyle

export type TextProps = ReactNative.TextProps & {
  value: TextValue
  category?: TextCategory
  format?: TextFormat
  currencyFormat?: CurrencyFormat
  datetimeFormat?: TimeFormat
  relativeTime?: Date
}

export const Text = (props: TextProps) => {
  const theme = useTheme()
  const text = _toString(props)
  const style: ReactNative.StyleProp<TextStyle> = _getTextStyle(
    props.category ?? 'text',
    theme,
  )

  return text && <ReactNative.Text style={style} children={text} />
}

const _getTextStyle = (
  category: TextCategory,
  theme: Theme,
): ReactNative.StyleProp<TextStyle> => {
  switch (category) {
    case 'h1':
      return {
        fontFamily: theme.h1Family,
        fontSize: theme.h1Size,
        color: theme.h1Color,
      }
    case 'h2':
      return {
        fontFamily: theme.h2Family,
        fontSize: theme.h2Size,
        color: theme.h2Color,
      }
    case 'h3':
      return {
        fontFamily: theme.h3Family,
        fontSize: theme.h3Size,
        color: theme.h3Color,
      }
    case 'h4':
      return {
        fontFamily: theme.h4Family,
        fontSize: theme.h4Size,
        color: theme.h4Color,
      }
    case 'h5':
      return {
        fontFamily: theme.h5Family,
        fontSize: theme.h5Size,
        color: theme.h5Color,
      }
    case 'h6':
      return {
        fontFamily: theme.h6Family,
        fontSize: theme.h6Size,
        color: theme.h6Color,
      }
    case 'text':
      return {
        fontFamily: theme.textFamily,
        fontSize: theme.textSize,
        color: theme.textColor,
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
      return _formatTime(
        props.value,
        props.datetimeFormat ?? 'auto',
        props.relativeTime ?? new Date(),
      )
  }
}

const _formatNone = (value: TextValue): string => {
  value = value ?? ''
  return value.toString()
}

const _formatFloat = (value: TextValue): string => {
  return value.toString()
}

const _formatInteger = (value: TextValue): string => {
  return value.toString()
}

const _formatTime = (
  value: TextValue,
  format: TimeFormat,
  relativeTime: Date,
): string => {
  if (!(value instanceof Date)) return 'format error'

  const diffSeconds = (relativeTime.getTime() - value.getTime()) / 1000
  const diffMinutes = Math.floor(diffSeconds / 60)
  const diffHours = Math.floor(diffSeconds / 3600)
  const diffDays = Math.floor(diffSeconds / 86400)

  if (diffSeconds < 60) return 'Just now'
  if (diffMinutes < 60) return `${diffMinutes} min ago`
  if (diffHours < 24) return `${diffHours} hr ${diffMinutes / 60} ago`

  const hours = value.getHours()
  const minutes = value.getMinutes()
  const timeString = `${hours}:${minutes}`

  if (diffDays === 1) return `Yesterday ${timeString}`

  const year = value.getFullYear()
  const month = value.getMonth()
  const day = value.getDay()
  const dateString = `${year}:${month}:${day}`

  return `${dateString} ${timeString}`
}

const _formatCurrency = (value: TextValue, format: CurrencyFormat): string => {
  return `INR ${value}`
}
