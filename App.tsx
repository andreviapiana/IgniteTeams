/* eslint-disable camelcase */
import { StatusBar, ActivityIndicator } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import theme from './src/theme'

import { Groups } from '@screens/Groups'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Groups /> : <ActivityIndicator />}
      </>
    </ThemeProvider>
  )
}
