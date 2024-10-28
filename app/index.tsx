import { useColorScheme } from 'react-native'
import { TransactionsPage } from '@app/Transactions'
import { View } from '@components/ui/View'
import { ThemeProvider, darkTheme, lightTheme } from '@components/Theme'

export const App = () => {
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={theme}>
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
