import React from 'react'
import { ColorValue, useColorScheme } from 'react-native'
import { useFonts } from 'expo-font'
import { Poppins_400Regular } from '@expo-google-fonts/poppins'

const colors = {
  matteBlack: '#28282B',
  onyx: '#353935',
  black: '#000000',
  white: '#FFFFFF',
}

export interface Theme {
  primaryColor: ColorValue
  backgroundColor: ColorValue
  separatorColor: ColorValue
  iconColor: ColorValue
  cardColor: ColorValue
  listItemColor: ColorValue
  selectedListItemColor: ColorValue
  h1Family: string
  h1Size: number
  h1Color: ColorValue
  h2Family: string
  h2Size: number
  h2Color: ColorValue
  h3Family: string
  h3Size: number
  h3Color: ColorValue
  h4Family: string
  h4Size: number
  h4Color: ColorValue
  h5Family: string
  h5Size: number
  h5Color: ColorValue
  h6Family: string
  h6Size: number
  h6Color: ColorValue
  textFamily: string
  textSize: number
  textColor: ColorValue
}

export const lightTheme: Theme = {
  primaryColor: 'rgb(0, 122, 255)',
  backgroundColor: 'rgb(242, 242, 242)',
  separatorColor: colors.black,
  iconColor: colors.black,
  cardColor: 'lightgrey',
  listItemColor: 'lightgrey',
  selectedListItemColor: 'grey',
  h1Family: 'Poppins_400Regular',
  h1Size: 50,
  h1Color: colors.black,
  h2Family: 'Poppins_400Regular',
  h2Size: 35,
  h2Color: colors.black,
  h3Family: 'Poppins_400Regular',
  h3Size: 30,
  h3Color: colors.black,
  h4Family: 'Poppins_400Regular',
  h4Size: 25,
  h4Color: colors.black,
  h5Family: 'Poppins_400Regular',
  h5Size: 20,
  h5Color: colors.black,
  h6Family: 'Poppins_400Regular',
  h6Size: 15,
  h6Color: colors.black,
  textFamily: 'Poppins_400Regular',
  textSize: 10,
  textColor: colors.black,
}

export const darkTheme: Theme = {
  ...lightTheme,

  primaryColor: colors.onyx,
  backgroundColor: colors.black,
  separatorColor: colors.white,
  iconColor: colors.white,
  cardColor: colors.matteBlack,
  listItemColor: colors.matteBlack,
  selectedListItemColor: colors.onyx,
  h1Color: colors.white,
  h2Color: colors.white,
  h3Color: colors.white,
  h4Color: colors.white,
  h5Color: colors.white,
  h6Color: colors.white,
  textColor: colors.white,
}

export const ThemeContext = React.createContext<Theme>(lightTheme)

export interface ThemeProviderProps {
  theme?: Theme
  children: any
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'light' ? lightTheme : darkTheme

  useFonts({ Poppins_400Regular })

  return (
    <ThemeContext.Provider
      value={props.theme ?? theme}
      children={props.children}
    />
  )
}

export const useTheme = (): Theme => {
  return React.useContext(ThemeContext)
}
