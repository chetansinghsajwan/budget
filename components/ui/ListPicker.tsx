import { forwardRef, useEffect, useState } from 'react'
import {
  SlidingSheet,
  SlidingSheetRef,
  useSlidingSheet,
} from '@components/ui/SlidingSheet'
import { ListRenderItemInfo, Pressable } from 'react-native'
import { View } from '@components/ui/View'
import { Text } from '@components/ui/Text'
import { SearchBar } from '@components/ui/SearchBar'
import { useTheme } from '@components/Theme'
import { Icon } from '@components/ui/Icon'
import { BottomSheetFlatList } from '@gorhom/bottom-sheet'

export type ListPickerSearchFunc = (items: string[], search: string) => string[]

export interface ListPickerProps {
  items: string[]
  index?: number
  onChange?: (index: number | undefined) => void
  enableSearch?: boolean
  enableClear?: boolean
  searchFunc?: ListPickerSearchFunc
}

export type ListPickerRef = SlidingSheetRef

export const useListPicker = () => {
  return useSlidingSheet()
}

const defaultSearchFunc = (items: string[], search: string): string[] => {
  return items
}

export const ListPicker = forwardRef(
  (props: ListPickerProps, ref: ListPickerRef) => {
    const theme = useTheme()
    const sheetSnapPoints = ['50%', '80%']
    const enableSearch = props.enableSearch ?? false
    const enableClear = props.enableClear ?? false
    const [searchString, setSearchString] = useState('')
    const [filteredItems, setFilteredItems] = useState(props.items)
    const searchFunc = props.searchFunc ?? defaultSearchFunc

    // update filtered items based on search string
    useEffect(() => {
      const newFilteredItems = searchFunc(props.items, searchString)
      setFilteredItems(newFilteredItems)
    }, [searchString])

    const onSearchStringChange = (value: string) => {
      setSearchString(value)
    }

    const onSelect = (index: number) => {
      ref?.current?.close()
      props.onChange?.(index)
    }

    const onClear = () => {
      ref?.current?.close()
      props.onChange?.(undefined)
    }

    const openSheet = () => {
      ref?.current?.snapToIndex(0)
    }

    const renderSearchBar = () => {
      return (
        <View
          style={{
            flex: 1,
          }}
        >
          <SearchBar value={searchString} onChange={onSearchStringChange} />
        </View>
      )
    }

    const renderClearButton = () => {
      return (
        <Pressable
          onPress={onClear}
          style={{
            width: 70,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.cardColor,
            borderRadius: 20,
          }}
        >
          <Icon name='trash' />
        </Pressable>
      )
    }

    const renderItem = (info: ListRenderItemInfo<string>) => {
      const bgcolor =
        info.index === props.index
          ? theme.selectedListItemColor
          : theme.backgroundColor

      return (
        <Pressable
          style={{
            height: 60,
            width: '100%',
            justifyContent: 'center',
            paddingHorizontal: 20,
            paddingVertical: 5,
            backgroundColor: bgcolor,
            borderRadius: 10,
            borderWidth: info.index === props.index ? 0 : 1,
          }}
          onPress={() => onSelect(info.index)}
        >
          <Text value={info.item} category='h6' />
        </Pressable>
      )
    }

    const ListHeader = () => {
      return (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            gap: 10,
            backgroundColor: theme.backgroundColor,
          }}
        >
          {enableSearch && renderSearchBar()}
          {enableClear && renderClearButton()}
        </View>
      )
    }

    return (
      <SlidingSheet
        ref={ref}
        initialSnapIndex={-1}
        snapPoints={sheetSnapPoints}
      >
        <BottomSheetFlatList
          data={filteredItems}
          renderItem={renderItem}
          ListHeaderComponent={ListHeader}
          stickyHeaderIndices={[0]}
        />
      </SlidingSheet>
    )
  },
)
