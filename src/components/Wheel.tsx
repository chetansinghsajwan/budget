import { CSSProperties, useState, useEffect } from 'react'
import { Text } from './Text'

export type WheelItem = string

export interface WheelProps {
  title: string
  items: WheelItem[]
  index?: number
  style?: CSSProperties
  onChange?: (index: number) => void
}

export function Wheel(props: WheelProps) {
  const selectedIndex = props.index ?? 0
  const items = props.items ?? []
  const onChange = props.onChange ?? (() => {})
  const [scrolling, setScrolling] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const detectTouch = () =>
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0)
    detectTouch()
  }, [])

  const handleWheel = (e: React.WheelEvent) => {
    if (scrolling || isTouch) return

    let newIndex = selectedIndex
    if (e.deltaY > 0) {
      newIndex = Math.min(selectedIndex + 1, items.length - 1)
    } else if (e.deltaY < 0) {
      newIndex = Math.max(selectedIndex - 1, 0)
    }

    if (newIndex !== selectedIndex) {
      setScrolling(true)
      onChange(newIndex)
      setTimeout(() => setScrolling(false), 300) // Smooth scrolling delay
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isTouch) return

    const touch = e.touches[0]
    const deltaY = touch.clientY

    let newIndex = selectedIndex
    if (deltaY > 0) {
      newIndex = Math.min(selectedIndex + 1, items.length - 1)
    } else if (deltaY < 0) {
      newIndex = Math.max(selectedIndex - 1, 0)
    }

    if (newIndex !== selectedIndex) {
      onChange(newIndex)
    }
  }

  return (
    <div
      onWheel={handleWheel}
      onTouchMove={handleTouchMove}
      style={{
        ...{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative',
          width: 200,
          height: 150,
        },
        ...props.style,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              padding: '10px',
              transition: 'color 0.3s, transform 0.3s',
            }}
          >
            <Text
              value={item}
              category={index === selectedIndex ? 'h3' : 'h5'}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wheel
