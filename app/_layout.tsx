import { Slot } from 'expo-router'
import { View } from '@components/ui/View'
import { ThemeProvider } from '@components/Theme'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export const RootView = () => {
  return (
    <GestureHandlerRootView>
      <ThemeProvider>
        <View
          style={{
            backgroundColor: '#000000',
            height: '100%',
            width: '100%',
            paddingTop: 50,
          }}
        >
          <Slot />
        </View>
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}

export default RootView
