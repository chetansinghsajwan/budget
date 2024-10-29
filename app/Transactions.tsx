import React, { useEffect, useRef, useState } from 'react'
import { Transaction } from '@services/Transaction'
import { FlatList, GestureResponderEvent, Pressable } from 'react-native'
import { TransactionCard } from '@components/layout/TransactionCard'
import { client } from '@services/Client'
import { View } from '@components/ui/View'
import { Button } from '@components/ui/Button'
import { useTheme } from '@components/Theme'
import { TransactionLayout } from '@components/layout/Transaction'
import { PageTitle } from '@components/ui/PageTitle'
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'

export const TransactionsPage = () => {
  const theme = useTheme()
  const sheetRef = useRef<BottomSheet>(null)
  const sheetSnapPoints = ['50%', '90%']
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [transaction, setTransaction] = useState<Transaction>()

  useEffect(() => {
    client.getTransactions().then(transactions => {
      setTransactions(transactions)
    })
  }, [])

  const onCreateTransaction = (event: GestureResponderEvent) => {
    const emptyTransaction: Transaction = {
      id: 0,
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
        data={transactions}
        scrollEnabled
        contentContainerStyle={{
          gap: 13,
          padding: 15,
          alignItems: 'center',
        }}
        renderItem={item => (
          <Pressable onPress={() => onCardPress(item.item)}>
            <TransactionCard transaction={item.item} />
          </Pressable>
        )}
      />

      <BottomSheet
        ref={sheetRef}
        snapPoints={sheetSnapPoints}
        index={-1}
        enablePanDownToClose
        onClose={onSheetClose}
        handleStyle={{
          backgroundColor: theme.primaryColor,
        }}
        handleIndicatorStyle={{
          backgroundColor: theme.iconColor,
        }}
        backgroundStyle={{
          backgroundColor: theme.backgroundColor,
        }}
      >
        <BottomSheetScrollView>
          {transaction && <TransactionLayout transaction={transaction} />}
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  )
}

export default TransactionsPage
