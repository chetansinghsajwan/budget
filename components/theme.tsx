import React from 'react'
import { ColorValue } from 'react-native'

export interface Theme {
  primaryColor: ColorValue
  backgroundColor: ColorValue
  iconColor: ColorValue
  cardColor: ColorValue
  h1Color: ColorValue
  h2Color: ColorValue
  h3Color: ColorValue
  h4Color: ColorValue
  h5Color: ColorValue
  h6Color: ColorValue
  textColor: ColorValue
}

export const lightTheme: Theme = {
  primaryColor: 'rgb(0, 122, 255)',
  backgroundColor: 'rgb(242, 242, 242)',
  iconColor: 'black',
  cardColor: 'lightgrey',
  h1Color: 'black',
  h2Color: 'black',
  h3Color: 'black',
  h4Color: 'black',
  h5Color: 'black',
  h6Color: 'black',
  textColor: 'black',
}

export const darkTheme: Theme = {
  primaryColor: 'rgb(10, 132, 255)',
  iconColor: 'white',
  backgroundColor: 'rgb(1, 1, 1)',
  cardColor: 'lightgrey',
  h1Color: 'white',
  h2Color: 'white',
  h3Color: 'white',
  h4Color: 'white',
  h5Color: 'white',
  h6Color: 'white',
  textColor: 'white',
}

export const ThemeContext = React.createContext<Theme>(lightTheme)

export interface ThemeProviderProps {
  theme?: Theme
  children: any
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider
      value={props.theme ?? lightTheme}
      children={props.children}
    />
  )
}

export const useTheme = (): Theme => {
  return React.useContext(ThemeContext)
}
