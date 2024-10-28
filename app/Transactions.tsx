import { useState } from 'react'
import { Transaction } from '@services/Transaction'
import { FlatList, GestureResponderEvent } from 'react-native'
import { TransactionItem } from '@components/forms/TransactionItem'
import { client } from '@services/Client'
import { Text } from '@components/ui/Text'
import { View } from '@components/ui/View'
import { Button } from '@components/ui/Button'
import { router } from 'expo-router'

export const TransactionsPage = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  client.getTransactions().then(transactions => {
    setTransactions(transactions)
  })

  const onCreateTransaction = (event: GestureResponderEvent) => {
    router.push('/Transaction')
  }

  return (
    <View
      style={{
        padding: 30,
      }}
    >
      <View row>
        <Text value='Transactions' category='h1' />
        <Button label='create' onPress={onCreateTransaction} />
      </View>

      <FlatList
        data={transactions}
        scrollEnabled
        renderItem={item => <TransactionItem transaction={item.item} />}
      />
    </View>
  )
}
