import { PageLayoutItemProps } from '@components/PageLayout/Item'

export interface PageLayoutBodyProps extends PageLayoutItemProps {
  children: React.ReactNode
}

export function PageLayoutBody(props: PageLayoutBodyProps) {
  return <>{props.children}</>
}
