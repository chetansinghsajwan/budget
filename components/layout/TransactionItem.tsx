import { Card } from '@components/ui/Card'
import { View } from '@components/ui/View'
import { Text } from '@components/ui/Text'
import { Transaction } from '@services/Transaction'

export interface TransactionProps {
  transaction: Transaction
}

export const TransactionItem = (props: TransactionProps) => {
  const transaction = props.transaction
  const transactionSign = transaction.type === 'credit' ? '+' : '-'

  return (
    <Card
      style={{
        margin: 10,
        borderRadius: 20,
        borderColor: 'black',
        backgroundColor: 'lightgrey',
        padding: 20,
        maxWidth: 400,
      }}
    >
      <View row space-between>
        <Text value={transaction.title} category='h4' />
        <Text value={transaction.time} format='datetime' category='h4' />
      </View>
      <View row space-between>
        <View row>
          <Text value={transactionSign} category='h3' />
          <Text value={transaction.amount} format='currency' category='h3' />
        </View>
        <Text value={transaction.category} category='h4' />
      </View>
    </Card>
  )
}
