import { FloatingButton } from '@components/FloatingButton'
import { PlusIcon } from '@components/Icons'
import { Transaction } from '@components/Transaction'
import { View } from 'react-native'

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
      <FloatingButton
        button={{
          label: 'Create',
          iconSource: style => <PlusIcon />,
          size: 'large',
          onPress: onCreateButtonPress,
        }}
      />
    </View>
  )
}
