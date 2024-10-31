import React from 'react'
import { ColorValue, useColorScheme } from 'react-native'
import { useFonts } from 'expo-font'
import { Poppins_400Regular } from '@expo-google-fonts/poppins'

export interface Theme {
  primaryColor: ColorValue
  backgroundColor: ColorValue
  separatorColor: ColorValue
  iconColor: ColorValue
  cardColor: ColorValue
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
  separatorColor: 'black',
  iconColor: 'black',
  cardColor: 'lightgrey',
  h1Family: 'Poppins_400Regular',
  h1Size: 50,
  h1Color: 'black',
  h2Family: 'Poppins_400Regular',
  h2Size: 35,
  h2Color: 'black',
  h3Family: 'Poppins_400Regular',
  h3Size: 30,
  h3Color: 'black',
  h4Family: 'Poppins_400Regular',
  h4Size: 25,
  h4Color: 'black',
  h5Family: 'Poppins_400Regular',
  h5Size: 20,
  h5Color: 'black',
  h6Family: 'Poppins_400Regular',
  h6Size: 15,
  h6Color: 'black',
  textFamily: 'Poppins_400Regular',
  textSize: 10,
  textColor: 'black',
}

export const darkTheme: Theme = {
  ...lightTheme,

  primaryColor: '#353935', // Onyx
  backgroundColor: '#000000', // Black
  separatorColor: 'white',
  iconColor: 'white',
  cardColor: '#28282B', // Matte Black
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
