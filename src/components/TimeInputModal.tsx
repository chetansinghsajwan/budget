import { JSX, createContext, useContext, useEffect, useState } from 'react'
import { Modal, ModalProps } from '@components/Modal'
import { Button } from '@components/Button'
import { Card } from '@components/Card'
import { TimeWheel, TimeWheelProps } from '@components/TimeWheel'
import { useTheme } from '@themes/index'

const nullDate = new Date(0)
export type TimeInputModalCancelCallback = () => void
export type TimeInputModalAcceptCallback = (value: Date) => void

export interface TimeInputModalProps extends ModalProps {
  value?: Date
  onCancel?: TimeInputModalCancelCallback
  onAccept?: TimeInputModalAcceptCallback
  rollerProps?: TimeWheelProps
}

export function TimeInputModal(props: TimeInputModalProps) {
  const theme = useTheme()
  const [value, setValue] = useState(props.value ?? nullDate)

  useEffect(() => {
    if (props.isOpen) setValue(props.value ?? nullDate)
    else setValue(nullDate)
  }, [props.isOpen])

  function onCancel() {
    props.onCancel?.()
  }

  function onAccept() {
    props.onAccept?.(value)
  }

  function onChange(value: Date) {
    setValue(value)
  }

  return (
    <Modal
      overlayStyle={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
      containerStyle={{
        width: '80%',
        maxWidth: 600,
        marginBottom: 20,
      }}
      {...props}
    >
      <Card>
        <TimeWheel
          // value={value}
          // onChange={onChange}
          style={{
            backgroundColor: theme.cardColor,
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Button label='Cancel' onPress={onCancel} />
          <Button label='Accept' onPress={onAccept} />
        </div>
      </Card>
    </Modal>
  )
}

export interface TimeInputModalProviderProps {
  children?: JSX.Element | JSX.Element[]
}

export interface TimeInputHandleOpenProps {
  value: Date
  onAccept: TimeInputModalAcceptCallback
  rollerProps?: TimeWheelProps
}

export interface TimeInputHandle {
  open: (props: TimeInputHandleOpenProps) => void
}

export const TimeInputContext = createContext<TimeInputHandle | null>(null)

export function TimeInputModalProvider(props: TimeInputModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState(nullDate)
  const [userOnAccept, setUserOnAccept] = useState<
    TimeInputModalAcceptCallback | undefined
  >()

  const onAccept = (value: Date) => {
    setIsOpen(false)
    setValue(nullDate)

    userOnAccept?.(value)
  }

  const onCancel = () => {
    setIsOpen(false)
    setValue(nullDate)
  }

  const onCloseRequest = () => {
    setIsOpen(false)
    setValue(nullDate)
  }

  const handle: TimeInputHandle = {
    open: (props: TimeInputHandleOpenProps) => {
      setIsOpen(true)
      setValue(props.value)

      // wrapping inside function to avoid immediate invocation.
      setUserOnAccept(() => props.onAccept)
    },
  }

  return (
    <TimeInputContext.Provider value={handle}>
      <TimeInputModal
        isOpen={isOpen}
        value={value}
        onCancel={onCancel}
        onAccept={value => onAccept(value)}
        onCloseRequest={onCloseRequest}
      />
      {props.children}
    </TimeInputContext.Provider>
  )
}

export function useTimeInputModal() {
  return useContext(TimeInputContext)
}
