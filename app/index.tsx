import { Button } from '@components/Button'
import { View } from '@components/View'
import { PlusIcon } from '@components/Icons'
import { Transaction } from '@components/Transaction'

export default function HomeScreen() {
  const onCreateButtonPress = (props: any): void => {
    console.log('create button pressed')
  }

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
      }}
    >
      <Transaction />
      <Button title='Create' icon={PlusIcon} onPress={onCreateButtonPress} />
    </View>
  )
}
