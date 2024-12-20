import { useTheme } from '@themes/index'
import { ChangeEvent, CSSProperties } from 'react'
import { Button } from './Button'

export type TextInputChangeCallback = (value: string) => void

export interface TextInputProps {
  value?: string
  onChange?: TextInputChangeCallback
  style?: CSSProperties
  showClear?: boolean
}

export function TextInput(props: TextInputProps) {
  const theme = useTheme()
  const value = props.value ?? ''
  const showClear = props.showClear ?? true

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(event.target.value)
  }

  const onClear = () => {
    props.onChange?.('')
  }

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
      }}
    >
      <input
        type='text'
        value={value}
        onChange={onChange}
        style={{
          ...{
            width: '100%',
            borderWidth: 0,
            borderBottomWidth: 2,
            color: theme.textColor,
            fontFamily: theme.textFamily,
            backgroundColor: theme.backgroundColor,
          },
          ...props.style,
        }}
      />
      {showClear && <Button icon='trash' onPress={onClear} />}
    </div>
  )
}
