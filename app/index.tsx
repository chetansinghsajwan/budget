import { Button } from '@components/ui/Button'
import { View } from '@components/ui/View'
import { PlusIcon } from '@components/ui/Icons'
import { Transaction } from '@components/forms/Transaction'

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
