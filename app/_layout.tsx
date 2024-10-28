import { Slot } from 'expo-router'
import { View } from '@components/ui/View'
import { ThemeProvider } from '@components/Theme'

export const RootLayout = () => {
  return (
    <ThemeProvider>
      <View
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        <Slot />
      </View>
    </ThemeProvider>
  )
}

export default RootLayout
