import { View } from '@components/ui/View'
import { Roller, RollerProps } from '@components/ui/Roller'
import { NumRoller } from '@components/ui/NumRoller'

export interface TimeRollerProps {
  year?: number
  month?: number
  day?: number
  hour?: number
  minute?: number
  second?: number

  showYear?: boolean
  showMonth?: boolean
  showDay?: boolean
  showHour?: boolean
  showMinute?: boolean
  showSecond?: boolean

  useMonthFullNames?: boolean
  useMonthLowerCaseNames?: boolean

  onYearChange?: (value: number) => void
  onMonthChange?: (value: number) => void
  onDayChange?: (value: number) => void
  onHourChange?: (value: number) => void
  onMinuteChange?: (value: number) => void
  onSecondChange?: (value: number) => void

  yearProps?: RollerProps
  monthProps?: RollerProps
  dayProps?: RollerProps
  hourProps?: RollerProps
  minuteProps?: RollerProps
  secondProps?: RollerProps
}

const getTimeNames = (props: {
  fullNames?: boolean
  lowercase?: boolean
}): string[] => {
  if (props.fullNames && props.lowercase) return monthNames
  if (props.fullNames && !props.lowercase) return monthNamesUppercase
  if (!props.fullNames && props.lowercase) return monthShortNames
  if (!props.fullNames && !props.lowercase) return monthShortNamesUppercase

  return []
}

export const TimeRoller = (props: TimeRollerProps) => {
  const defaults = {
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
    showYear: true,
    showMonth: true,
    showDay: true,
    showHour: true,
    showMinute: true,
    showSecond: false,
  }

  const year = props.year ?? defaults.year
  const month = props.month ?? defaults.month
  const day = props.day ?? defaults.day
  const hour = props.hour ?? defaults.hour
  const minute = props.minute ?? defaults.minute
  const second = props.second ?? defaults.second
  const showYear = props.showYear ?? defaults.showYear
  const showMonth = props.showMonth ?? defaults.showMonth
  const showDay = props.showDay ?? defaults.showDay
  const showHour = props.showHour ?? defaults.showHour
  const showMinute = props.showMinute ?? defaults.showMinute
  const showSecond = props.showSecond ?? defaults.showSecond

  const monthNames = getTimeNames({
    fullNames: props.useMonthFullNames,
    lowercase: props.useMonthLowerCaseNames,
  })

  const onYearChange = (value: number) => {
    if (!props.onYearChange) return

    props.onYearChange(value)
  }

  const onMonthChange = (value: number) => {
    if (!props.onMonthChange) return

    props.onMonthChange(value)
  }

  const onDayChange = (value: number) => {
    if (!props.onDayChange) return

    props.onDayChange(value)
  }

  const onHourChange = (value: number) => {
    if (!props.onHourChange) return

    props.onHourChange(value)
  }

  const onMinuteChange = (value: number) => {
    if (!props.onMinuteChange) return

    props.onMinuteChange(value)
  }

  const onSecondChange = (value: number) => {
    if (!props.onSecondChange) return

    props.onSecondChange(value)
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 10,
      }}
    >
      {showYear && (
        <NumRoller
          title='Year'
          value={year}
          from={1900}
          to={3000}
          onChange={onYearChange}
          {...props.yearProps}
        />
      )}
      {showMonth && (
        <Roller
          title='Month'
          index={month}
          items={monthNames}
          onChange={onMonthChange}
          {...props.monthProps}
        />
      )}
      {showDay && (
        <NumRoller
          title='Day'
          value={day}
          from={1}
          to={31}
          onChange={onDayChange}
          {...props.dayProps}
        />
      )}
      {showHour && (
        <NumRoller
          title='Hour'
          value={hour}
          from={1}
          to={24}
          onChange={onHourChange}
          {...props.hourProps}
        />
      )}
      {showMinute && (
        <NumRoller
          title='Minute'
          value={minute}
          from={1}
          to={60}
          onChange={onMinuteChange}
          {...props.minuteProps}
        />
      )}
      {showSecond && (
        <NumRoller
          title='Second'
          value={second}
          from={1}
          to={60}
          onChange={onSecondChange}
          {...props.secondProps}
        />
      )}
    </View>
  )
}

const monthNames = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'novemeber',
  'december',
]

const monthShortNames = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
]

const monthNamesUppercase = monthShortNames.map(name =>
  name.toUpperCase(),
)

const monthShortNamesUppercase = monthShortNames.map(name =>
  name.toUpperCase(),
)
