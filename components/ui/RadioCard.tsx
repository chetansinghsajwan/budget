import { FlatList, ListRenderItemInfo, Pressable } from 'react-native'
import { Card } from '@components/ui/Card'
import { Text } from '@components/ui/Text'
import { View } from '@components/ui/View'
import { useTheme } from '@components/Theme'

export interface RadioButtonProps {
  id: string
  label: string
}

export interface RadioCardProps {
  items: RadioButtonProps[]
  value?: string
  onChange?: (id: string) => void
  initialValue?: string
  editable?: boolean
}

export const RadioCard = (props: RadioCardProps) => {
  const theme = useTheme()

  const onSelect = (id: string) => {
    if (!props.editable) return

    props.onChange?.(id)
  }

  const RadioButton = (info: ListRenderItemInfo<RadioButtonProps>) => {
    const selected = info.item.id === props.value
    const bgColor = selected ? theme.selectedListItemColor : theme.listItemColor
    const leftRadius = info.index === 0 ? 20 : 0
    const rightRadius = info.index === props.items.length - 1 ? 20 : 0

    return (
      <Pressable
        onPress={() => onSelect(info.item.id)}
        style={{
          height: '100%',
          width: '100%',
          padding: 20,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: bgColor,
          borderTopLeftRadius: leftRadius,
          borderBottomLeftRadius: leftRadius,
          borderTopRightRadius: rightRadius,
          borderBottomRightRadius: rightRadius,
        }}
      >
        <Text id={info.item.id} value={info.item.label} category='h5' />
      </Pressable>
    )
  }

  return (
    <Card>
      <FlatList
        data={props.items}
        renderItem={RadioButton}
        horizontal
        scrollEnabled
        contentContainerStyle={{
          flex: 1,
        }}
        CellRendererComponent={({ children, style }) => (
          <View style={[style, { flex: 1 }]} children={children} />
        )}
      />
    </Card>
  )
}
