import { Transaction } from '@services/Transaction'
import { Card } from '@components/ui/Card'
import { View } from '@components/ui/View'
import { Text } from '@components/ui/Text'

export interface TransactionProps {
  transaction: Transaction
}

export const TransactionCard = (props: TransactionProps) => {
  const transaction = props.transaction
  const transactionSign = transaction.type === 'credit' ? '+' : '-'

  return (
    <Card>
      <View
        style={{
          padding: 20,
          minWidth: 400,
          maxWidth: 700,
        }}
      >
        <View row space-between>
          <Text value={transaction.title} category='h5' />
          <Text value={transaction.time} format='datetime' category='h5' />
        </View>
        <View row space-between>
          <View row>
            <Text value={transactionSign} category='h3' />
            <Text value={transaction.amount} format='currency' category='h3' />
          </View>
          <Text value={transaction.category} category='h6' />
        </View>
      </View>{' '}
    </Card>
  )
}
