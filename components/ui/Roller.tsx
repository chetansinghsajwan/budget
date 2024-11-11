import { useRef, useState } from 'react'
import {
  FlatList,
  ListRenderItemInfo,
  StyleProp,
  View,
  ViewStyle,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
} from 'react-native'
import { Text } from '@components/ui/Text'

export type RollerItem = string

export interface RollerProps {
  title: string
  items: RollerItem[]
  index?: number
  style?: StyleProp<ViewStyle>
  onChange?: (index: number) => void
}

export const Roller = (props: RollerProps) => {
  const itemHeight = 40
  const lineHeight = 4
  const [selectedIndex, setSelectedIndex] = useState(0)
  const listRef = useRef<FlatList<RollerItem>>(null)

  const onPress = (index: number) => {
    listRef.current?.scrollToIndex({
      index: index,
    })
  }

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y
    const newIndex = Math.round(offsetY / itemHeight)
    if (newIndex !== selectedIndex) {
      setSelectedIndex(newIndex)
    }
  }

  const onMomentumScrollEnd = () => {
    if (!listRef.current) return

    const index = selectedIndex - 3

    listRef.current.scrollToIndex({
      index: index,
      animated: true,
    })

    props.onChange?.(index)
  }

  const renderItem = (info: ListRenderItemInfo<RollerItem>) => (
    <Pressable
      onPress={() => onPress(info.index)}
      style={{
        height: itemHeight,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text value={info.item} category='h5' />
    </Pressable>
  )

  const Line = () => (
    <View
      style={{
        height: lineHeight,
        borderRadius: 50,
        backgroundColor: 'white',
        width: '100%',
      }}
    />
  )

  return (
    <View style={[{ height: 150 }, props.style]}>
      {/* Selection lines */}
      <View
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: '100%',
          alignItems: 'center',
          gap: lineHeight * 10,
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <Line />
        <Line />
      </View>

      <FlatList
        ref={listRef}
        data={props.items}
        renderItem={renderItem}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        snapToInterval={itemHeight}
        decelerationRate='fast'
        contentContainerStyle={{
          paddingVertical: itemHeight + 15,
          width: 100,
        }}
        onScroll={onScroll}
        onMomentumScrollEnd={onMomentumScrollEnd}
      />
    </View>
  )
}
