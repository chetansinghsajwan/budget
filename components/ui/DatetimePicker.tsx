import { forwardRef } from 'react'
import { SlidingSheet, SlidingSheetRef } from '@components/ui/SlidingSheet'
import { BottomSheetView } from '@gorhom/bottom-sheet'
import {
  DatetimeRoller,
  DatetimeRollerProps,
} from '@components/ui/DatetimeRoller'

export interface DatetimePickerProps {
  rollerProps?: DatetimeRollerProps
}

export const DatetimePicker = forwardRef(
  (props: DatetimePickerProps, ref: SlidingSheetRef) => {
    const snapPoints = ['50%']

    return (
      <SlidingSheet ref={ref} snapPoints={snapPoints}>
        <BottomSheetView
          style={{
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}
        >
          <DatetimeRoller {...props.rollerProps} />
        </BottomSheetView>
      </SlidingSheet>
    )
  },
)
