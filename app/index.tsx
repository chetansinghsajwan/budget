import { TransactionsPage } from './Transactions'
import { ThemeProvider } from '@react-navigation/native'
import { useColorScheme } from 'react-native'
import { darkTheme, lightTheme } from '@components/theme'
import { View } from '@components/ui/View'

export const App = () => {
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider value={theme}>
      <View
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        <TransactionsPage />
      </View>
    </ThemeProvider>
  )
}

export default App
