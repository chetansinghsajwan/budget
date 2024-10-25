import { useState } from 'react'
import { Transaction } from '@services/Transaction'
import { FlatList, View } from 'react-native'
import { TransactionItem } from '@components/forms/TransactionItem'
import { client } from '@services/Client'
import { Text } from '@components/ui/Text'

export const TransactionsPage = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  client.getTransactions().then(transactions => {
    setTransactions(transactions)
  })

  return (
    <View
      style={{
        alignItems: 'center',
      }}
    >
      <Text value='Transactions' category='h1' />

      <FlatList
        data={transactions}
        scrollEnabled
        renderItem={item => <TransactionItem transaction={item.item} />}
      />
    </View>
  )
}
