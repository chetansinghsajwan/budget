import { useEffect, useState } from 'react'
import { FlatList, GestureResponderEvent, Pressable } from 'react-native'
import { View } from '@components/ui/View'
import { Button } from '@components/ui/Button'
import { useTheme } from '@components/Theme'
import { TransactionView } from '@components/views/TransactionView'
import { TransactionCard } from '@components/cards/TransactionCard'
import { TransactionEditView } from '@components/views/TransactionEditView'
import { PageTitle } from '@components/ui/PageTitle'
import { SlidingSheet, useSlidingSheet } from '@components/ui/SlidingSheet'
import { SearchBar } from '@components/ui/SearchBar'
import { client } from '@services/Client'
import { Transaction } from '@services/Transaction'
import { Modal } from '@components/ui/Modal'

const defaults = {
  transaction: new Transaction(),
}

export const TransactionsPage = () => {
  const theme = useTheme()
  const transactionSheet = useSlidingSheet()
  const sheetSnapPoints = ['50%', '90%']
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [transaction, setTransaction] = useState<Transaction>(
    defaults.transaction,
  )
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
    setTransaction(defaults.transaction)
    transactionSheet.current?.expand()
  }

  const onCardPress = (transaction: Transaction) => {
    setTransaction(transaction)
    transactionSheet.current?.expand()
  }

  const onSheetClose = () => {
    setTransaction(defaults.transaction)
  }

  const editMode = false

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

      <PageTitle value='Transactions' />

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
          <TransactionCard
            transaction={item.item}
            onPress={() => onCardPress(item.item)}
            style={{
              minWidth: 400,
              maxWidth: 700,
            }}
          />
        )}
      />

      <Modal
        ref={transactionSheet}
        // snapPoints={sheetSnapPoints}
        // onClose={onSheetClose}
      >
        {editMode ? (
          <TransactionView value={transaction} canEdit />
        ) : (
          <TransactionEditView value={transaction} onChange={setTransaction} />
        )}
      </Modal>
    </View>
  )
}

export default TransactionsPage
