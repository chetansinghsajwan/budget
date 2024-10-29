import { View } from '@components/ui/View'
import { TransactionLayout } from '@components/layout/Transaction'
import { Transaction } from '@services/Transaction'
import { useTheme } from '@components/Theme'

export interface TransactionPageProps {
  transaction: Transaction
}

export const TransactionPage = (props: TransactionPageProps) => {
  const theme = useTheme()

  const transaction: Transaction = {
    id: 0,
    type: 'credit',
    title: 'Eggs',
    amount: 240,
    description: 'KK White Eggs 12',
    category: 'food/eggs',
    time: new Date(),
    createdAt: new Date(),
  }

  return (
    <View
      style={{
        backgroundColor: theme.backgroundColor,
        height: '100%',
        width: '100%',
      }}
    >
      <TransactionLayout transaction={transaction} canEdit />
    </View>
  )
}

export default TransactionPage
