import { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { SlidingSheet, SlidingSheetRef } from './SlidingSheet'
import { forwardRef } from 'react'

export interface ModalProps {
  children?: any
}

export type ModalRef = SlidingSheetRef

export const Modal = forwardRef((props: ModalProps, ref: ModalRef) => {
  return (
    <SlidingSheet ref={ref}>
      <BottomSheetScrollView>{props.children}</BottomSheetScrollView>
    </SlidingSheet>
  )
})
