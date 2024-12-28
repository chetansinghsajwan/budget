import { Wheel } from '@components/Wheel'

export interface NumWheelProps {
  value: number

  title: string

  /// on value change
  onChange?: (value: number) => void

  /// can user interact with this
  interatable?: boolean

  /// starting year of the list
  from?: number

  /// ending year of the list
  to?: number
}

export const NumWheel = (props: NumWheelProps) => {
  const from = props.from ?? 1900
  const to = props.to ?? 3000
  const numStrings = generateNumList(from, to)
  const initialValue = clamp(props.value, from, to)
  const initialIndex = initialValue - from

  const onChange = (index: number) => {
    if (!props.onChange) return

    const year = from + index

    props.onChange(year)
  }

  return (
    <Wheel
      title={props.title}
      index={initialIndex}
      items={numStrings}
      onChange={onChange}
    />
  )
}

const generateNumList = (from: number, to: number): string[] => {
  return Array(to - from + 1)
    .fill(undefined)
    .map((value, index) => `${from + index}`)
}

function clamp(num: number, lower: number, upper: number) {
  return Math.min(Math.max(num, lower), upper)
}
