import { forwardRef, useRef } from 'react'
import { SlidingSheet, SlidingSheetRef } from '@components/ui/SlidingSheet'
import { BottomSheetScrollView, BottomSheetView } from '@gorhom/bottom-sheet'
import {
  DatetimeRoller,
  DatetimeRollerProps,
} from '@components/ui/DatetimeRoller'
import { Button } from '@components/ui/Button'

export interface DatetimePickerProps {
  value: Date
  onChange?: (value: Date) => void
  rollerProps?: DatetimeRollerProps
}

export const DatetimePicker = forwardRef(
  (props: DatetimePickerProps, ref: SlidingSheetRef) => {
    const snapPoints = ['50%']
    const newValue = useRef<Date>(props.value)

    const onCancel = () => {
      ref?.current?.close()
    }

    const onSave = () => {
      ref?.current?.close()
      props.onChange?.(newValue.current)
    }

    return (
      <SlidingSheet ref={ref} snapPoints={snapPoints}>
        <BottomSheetView
          id='header'
          style={{
            width: '100%',
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Button icon='cross' onPress={onCancel} />
          <Button icon='check' onPress={onSave} />
        </BottomSheetView>

        <BottomSheetScrollView
          id='content'
          style={{
            height: '100%',
            width: '100%',
          }}
          contentContainerStyle={{
            alignItems: 'center',
          }}
        >
          <DatetimeRoller {...props.rollerProps} />
        </BottomSheetScrollView>
      </SlidingSheet>
    )
  },
)
