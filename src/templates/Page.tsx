import { ReactNode, ReactElement, useState } from 'react'
import { Button } from '@components/Button'
import { Text } from '@components/Text'

export interface PageTemplateProps {
  title: string
  beforeTitleButtons?: ReactElement<typeof Button>[]
  afterTitleButtons?: ReactElement<typeof Button>[]
  header?: ReactNode
  footer?: ReactNode
  children?: ReactNode
  headerSize?: number
}

export function PageTemplate(props: PageTemplateProps) {
  const defaultHeaderSize = 220
  const headerSize = props.headerSize ?? defaultHeaderSize
  const header = props.header ?? <Text value={props.title} category='h3' />
  const headerOpacityMultiplier = 3
  const pagePadding = 15

  const [headerShowRatio] = useState(1)

  return (
    <div
      id='page-template'
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <div
        style={{
          paddingInline: pagePadding,
        }}
      >
        <div
          id='header'
          style={{
            height: headerSize * headerShowRatio,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: Math.pow(headerShowRatio, headerOpacityMultiplier),
          }}
        >
          {header}
        </div>
        <div
          id='title-bar'
          style={{
            display: 'flex',
            padding: 10,
          }}
        >
          {props.beforeTitleButtons?.map(button => button)}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              paddingInline: 10,
              opacity: 1 - Math.pow(headerShowRatio, headerOpacityMultiplier),
            }}
          >
            <Text value='Transactions' category='h5' />
          </div>
          {props.afterTitleButtons?.map(button => button)}
        </div>
      </div>
      <div
        id='body'
        style={{
          borderRadius: 25,
          height: '100%',
          paddingInline: pagePadding,
          overflow: 'scroll',
        }}
      >
        {props.children}
      </div>
    </div>
  )
}
