import { useEffect, useState } from 'react'
import { Transaction } from '@services/Transaction'
import { FlatList, GestureResponderEvent, Pressable } from 'react-native'
import { TransactionCard } from '@components/layout/TransactionCard'
import { client } from '@services/Client'
import { View } from '@components/ui/View'
import { Button } from '@components/ui/Button'
import { useTheme } from '@components/Theme'
import { TransactionLayout } from '@components/layout/Transaction'
import { PageTitle } from '@components/ui/PageTitle'
import {
  SlidingSheet,
  SlidingSheetScrollView,
  useSlidingSheet,
} from '@components/ui/SlidingSheet'
import { SearchBar } from '@components/ui/SearchBar'

export const TransactionsPage = () => {
  const theme = useTheme()
  const sheetRef = useSlidingSheet()
  const sheetSnapPoints = ['50%', '90%']
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [transaction, setTransaction] = useState<Transaction>()
  const [searchString, setSearchString] = useState<string>('')
  const [filteredTransactions, setFilteredTransactions] = useState(transactions)

  useEffect(() => {
    client.getTransactions().then(transactions => {
      setTransactions(transactions)
    })
  }, [])

  // update filterered transactions if `searchString` or `transactions` are updated
  //
  // @todo implement search logic
  useEffect(() => {
    setFilteredTransactions(transactions)
  }, [searchString, transactions])

  const onCreateTransaction = (event: GestureResponderEvent) => {
    const emptyTransaction: Transaction = {
      id: '2238-234-23-23-423-423',
      type: 'credit',
      title: '',
      amount: 0,
      description: '',
      category: '',
      time: new Date(),
      createdAt: new Date(),
    }

    setTransaction(emptyTransaction)
    sheetRef.current?.expand()
  }

  const onCardPress = (transaction: Transaction) => {
    setTransaction(transaction)
    sheetRef.current?.expand()
  }

  const onSheetClose = () => {
    setTransaction(undefined)
  }

  return (
    <View
      style={{
        backgroundColor: theme.backgroundColor,
        height: '100%',
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

      <PageTitle title='Transactions' />

      <FlatList
        id='transactions-container'
        data={filteredTransactions}
        keyExtractor={item => item.id}
        scrollEnabled
        contentContainerStyle={{
          gap: 13,
          padding: 15,
          paddingTop: 0,
          alignItems: 'center',
        }}
        ListHeaderComponent={() => (
          <SearchBar value={searchString} onChange={setSearchString} />
        )}
        stickyHeaderIndices={[0]}
        renderItem={item => (
          <Pressable
            onPress={() => onCardPress(item.item)}
            style={{
              minWidth: 400,
              maxWidth: 700,
            }}
          >
            <TransactionCard transaction={item.item} />
          </Pressable>
        )}
      />

      <SlidingSheet
        ref={sheetRef}
        snapPoints={sheetSnapPoints}
        initialSnapIndex={-1}
        onClose={onSheetClose}
      >
        <SlidingSheetScrollView>
          {transaction && (
            <TransactionLayout transaction={transaction} canEdit />
          )}
        </SlidingSheetScrollView>
      </SlidingSheet>
    </View>
  )
}

export default TransactionsPage
