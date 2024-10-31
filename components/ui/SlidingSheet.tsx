import React from 'react'
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { useTheme } from '@components/Theme'

export interface SlidingSheetProps {
  children: React.ReactNode | React.ReactNode[]
  snapPoints?: string[]
  initialSnapIndex?: number
  onClose?: () => void
}

export type SlidingSheetRef = React.Ref<BottomSheet>

export const useSlidingSheet = () => {
  return React.useRef<BottomSheet>(null)
}

export const SlidingSheet = React.forwardRef(
  (props: SlidingSheetProps, ref: SlidingSheetRef) => {
    const theme = useTheme()
    const defaultSnapPoints = ['50%', '90%']
    const snapPoints = props.snapPoints ?? defaultSnapPoints

    return (
      <BottomSheet
        ref={ref}
        snapPoints={snapPoints}
        index={props.initialSnapIndex}
        enablePanDownToClose
        onClose={props.onClose}
        handleStyle={{
          backgroundColor: theme.primaryColor,
        }}
        handleIndicatorStyle={{
          backgroundColor: theme.iconColor,
        }}
        backgroundStyle={{
          backgroundColor: theme.backgroundColor,
        }}
        children={props.children}
      />
    )
  },
)

export const SlidingSheetScrollView = BottomSheetScrollView
