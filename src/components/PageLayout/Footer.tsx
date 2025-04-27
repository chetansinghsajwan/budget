import { ReactElement } from 'react'
import { Button } from '@components/Button'

export interface PageFooterProps {
  buttons: ReactElement<typeof Button>[]
}

export function PageFooter(props: PageFooterProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        height: 60,
      }}
    >
      {props.buttons?.map(button => button)}
    </div>
  )
}
