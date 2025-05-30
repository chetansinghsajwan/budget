import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { List } from '@components/List'
import { Button } from '@components/Button'
import { Transaction } from '@client/Transaction'
import { useClient } from '@client/ClientProvider'
import { TransactionCard } from '@components/TransactionCard'
import { PageTemplate } from '@templates/Page'
import { NavButton } from '@components/NavButton'

export function TransactionsPage() {
  const navigate = useNavigate()
  const client = useClient()

  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    const newTransactions = client.getTransactions()
    if (newTransactions.length !== 0) {
      setTransactions(newTransactions)
    } else {
      client.loadData().then(() => {
        const newTransactions = client.getTransactions()
        setTransactions(newTransactions)
      })
    }
  }, [])

  function showOptions() { }

  function onRefresh() {
    const transactions = client.getTransactions()
    setTransactions(transactions)
  }

  function onTransactionPress(id: string) {
    navigate(`/transaction/${id}`)
  }

  function renderTransaction(transaction: Transaction) {
    return (
      <div
        style={{
          paddingInline: 10,
          paddingBlock: 4,
        }}
      >
        <TransactionCard
          transaction={transaction}
          onPress={() => onTransactionPress(transaction.id)}
        />
      </div>
    )
  }

  return (
    <PageTemplate
      title='Transactions'
      beforeTitleButtons={[
        <NavButton icon='back' to={-1} variant='light' size='sm' />,
      ]}
      afterTitleButtons={[
        <Button icon='refresh' onPress={onRefresh} variant='light' size='sm' />,
        <NavButton icon='add' to='/transaction/add' variant='light' size='sm' />,
        <NavButton icon='search' to='/search' variant='light' size='sm' />,
        <Button icon='options' onPress={showOptions} variant='light' size='sm' />,
      ]}
    >
      <List items={transactions} itemRenderer={renderTransaction} />
    </PageTemplate>
  )
}
