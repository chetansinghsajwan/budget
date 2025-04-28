import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { List } from '@components/List'
import { Button } from '@components/Button'
import { Transaction } from '@client/Transaction'
import { useClient } from '@client/ClientProvider'
import { TransactionCard } from '@components/TransactionCard'
import { PageTemplate } from '@templates/Page'
import { NavButton } from '@components/NavButton'
import { Text } from '@components/Text'

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

  function showMenu() {}

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
        <NavButton icon='arrow-left' to={-1} variant='light' size='sm' />,
      ]}
      afterTitleButtons={[
        <NavButton
          icon='add'
          to='/transaction/add'
          variant='light'
          size='sm'
        />,
        <NavButton icon='search' to='/search' variant='light' size='sm' />,
        <Button icon='options' onPress={showMenu} variant='light' size='sm' />,
      ]}
    >
      <List items={transactions} itemRenderer={renderTransaction} />
    </PageTemplate>
  )
}
