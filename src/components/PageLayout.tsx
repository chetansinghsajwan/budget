export interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout(props: PageLayoutProps) {
  return (
    <div
      style={{
        padding: 15,
      }}
    >
      {props.children}
    </div>
  )
}
