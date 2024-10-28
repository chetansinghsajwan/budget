import { View } from '@components/ui/View'
import { TransactionLayout } from '@components/layout/Transaction'
import { Transaction } from '@services/Transaction'

export interface TransactionPageProps {
  transaction: Transaction
}

export const TransactionPage = (props: TransactionPageProps) => {
  return (
    <View>
      <TransactionLayout transaction={props.transaction} />
    </View>
  )
}

export default TransactionPage
