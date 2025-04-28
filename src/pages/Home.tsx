import { Button } from '@components/Button'
import { NavButton } from '@components/NavButton'
import { Text } from '@components/Text'
import { PageTemplate } from '@templates/Page'

export function HomePage() {
  function showSidebar() {}
  function showOptions() {}

  return (
    <PageTemplate
      title='Home'
      beforeTitleButtons={[
        <Button icon='menu' onPress={showSidebar} variant='light' size='sm' />,
      ]}
      afterTitleButtons={[
        <NavButton
          icon='add'
          to='/transaction/add'
          variant='light'
          size='sm'
        />,
        <NavButton icon='search' to='/search' variant='light' size='sm' />,
        <Button
          icon='options'
          onPress={showOptions}
          variant='light'
          size='sm'
        />,
      ]}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 50,
        }}
      >
        <Text value='Hi this is the home page.' category='h6' />
      </div>
    </PageTemplate>
  )
}
