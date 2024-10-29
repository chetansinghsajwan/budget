import { useState } from 'react'
import { Transaction } from '@services/Transaction'
import { FlatList, GestureResponderEvent } from 'react-native'
import { TransactionCard } from '@components/layout/TransactionCard'
import { client } from '@services/Client'
import { Text } from '@components/ui/Text'
import { View } from '@components/ui/View'
import { Button } from '@components/ui/Button'
import { router } from 'expo-router'
import { useTheme } from '@components/Theme'

export const TransactionsPage = () => {
  const theme = useTheme()
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
        backgroundColor: theme.backgroundColor,
      }}
    >
      <View
        id='top-buttons-container'
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          padding: 30,
        }}
      >
        <Button icon='plus' onPress={onCreateTransaction} />
      </View>

      <View
        id='heading-container'
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: 300,
        }}
      >
        <Text value='Transactions' category='h1' />
      </View>

      <FlatList
        id='transactions-container'
        data={transactions}
        scrollEnabled
        contentContainerStyle={{
          gap: 13,
          padding: 15,
          alignItems: 'center',
        }}
        renderItem={item => <TransactionCard transaction={item.item} />}
      />
    </View>
  )
}

export default TransactionsPage
