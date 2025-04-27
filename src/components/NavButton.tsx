import { NavigateOptions, useNavigate } from 'react-router'
import { Button, ButtonProps } from '@components/Button'

export interface NavButtonProps extends ButtonProps {
  to: string | number
  options?: NavigateOptions
}

export function NavButton(props: NavButtonProps) {
  const navigate = useNavigate()

  function onPress() {
    if (typeof props.to === 'number') {
      navigate(props.to)
    } else {
      navigate(props.to, props.options)
    }

    props.onPress?.()
  }

  return <Button {...props} onPress={onPress} />
}
