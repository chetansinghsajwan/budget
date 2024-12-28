import { WheelProps } from '@components/Wheel'
import { NumWheel } from '@components/NumWheel'

export type TimeWheelChangeCallback = (value: number) => void

export interface TimeWheelProps {
  hour?: number
  minute?: number
  second?: number

  showHour?: boolean
  showMinute?: boolean
  showSecond?: boolean

  onChange?: TimeWheelChangeCallback
  onHourChange?: TimeWheelChangeCallback
  onMinuteChange?: TimeWheelChangeCallback
  onSecondChange?: TimeWheelChangeCallback

  hourWheelProps?: WheelProps
  minuteWheelProps?: WheelProps
  secondWheelProps?: WheelProps
}

const defaults = {
  hour: 0,
  minute: 0,
  second: 0,
  showHour: true,
  showMinute: true,
  showSecond: false,
}

export const TimeWheel = (props: TimeWheelProps) => {
  const hour = props.hour ?? defaults.hour
  const minute = props.minute ?? defaults.minute
  const second = props.second ?? defaults.second
  const showHour = props.showHour ?? defaults.showHour
  const showMinute = props.showMinute ?? defaults.showMinute
  const showSecond = props.showSecond ?? defaults.showSecond

  const onChange = (value: number) => {
    props.onChange?.(value)
  }

  const onHourChange = (value: number) => {
    props.onHourChange?.(value)
  }

  const onMinuteChange = (value: number) => {
    props.onMinuteChange?.(value)
  }

  const onSecondChange = (value: number) => {
    props.onSecondChange?.(value)
  }

  return (
    <div
      style={{
        display: 'flex',
        gap: 10,
        height: '100%',
        scrollbarWidth: 'none',
      }}
    >
      {showHour && (
        <NumWheel
          title='Hour'
          value={hour}
          from={1}
          to={24}
          onChange={props.onHourChange}
          {...props.hourWheelProps}
        />
      )}
      {showMinute && (
        <NumWheel
          title='Minute'
          value={minute}
          from={1}
          to={60}
          onChange={props.onMinuteChange}
          {...props.minuteWheelProps}
        />
      )}
      {showSecond && (
        <NumWheel
          title='Second'
          value={second}
          from={1}
          to={60}
          onChange={props.onSecondChange}
          {...props.secondWheelProps}
        />
      )}
    </div>
  )
}
