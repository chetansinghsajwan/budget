import { TextInput } from 'react-native'
import { View } from '@components/ui/View'
import { useTheme } from '@components/Theme'

export interface PageTitleProps {
  value: string
  onChange?: (value: string) => void
  placeholder?: string
  editable?: boolean
  focusable?: boolean
}

export const PageTitle = (props: PageTitleProps) => {
  const theme = useTheme()
  const editable = props.editable ?? false
  const focusable = props.focusable ?? props.editable ?? false

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
      }}
    >
      <TextInput
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor={theme.placeholderColor}
        onChangeText={props.onChange}
        editable={editable}
        focusable={focusable}
        style={{
          fontFamily: theme.h1Family,
          fontSize: theme.h1Size,
          color: theme.h1Color,
          textAlign: 'center',
        }}
      />
    </View>
  )
}
