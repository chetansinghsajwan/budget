import { View } from '@components/ui/View'
import { TransactionsPage } from './Transactions'

export default function HomeScreen() {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
      }}
    >
      <TransactionsPage />
    </View>
  )
}
