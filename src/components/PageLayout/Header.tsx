import { ReactNode, ReactElement } from 'react'
import { PageLayoutItemProps } from '@components/PageLayout/Item'
import { Button } from '@components/Button'
import { Text } from '@components/Text'

export interface PageLayoutHeaderProps extends PageLayoutItemProps {
  title: string
  expandedContent?: ReactNode
  leftSideButtons?: ReactElement<typeof Button>[]
  rightSideButtons?: ReactElement<typeof Button>[]
}

export function PageLayoutHeader(props: PageLayoutHeaderProps) {
  return (
      <div
        id='top-bar'
        style={{
          display: 'flex',
          padding: 10,
        }}
      >
        {props.leftSideButtons?.map(button => button)}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            paddingInline: 10,
          }}
        >
          <Text value='Transactions' category='h5' />
        </div>
        {props.rightSideButtons?.map(button => button)}
      </div>
  )
}
