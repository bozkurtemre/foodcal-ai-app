import '../tamagui-web.css'

import { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useTheme } from 'tamagui'
import Provider from './Provider'
import { AuthProvider, useAuth } from '../src/contexts/AuthContext'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'ClashDisplay-Regular': require('../assets/fonts/ClashDisplay-Regular.otf'),
    'ClashDisplay-Medium': require('../assets/fonts/ClashDisplay-Medium.otf'),
    'ClashDisplay-Semibold': require('../assets/fonts/ClashDisplay-Semibold.otf'),
    'ClashDisplay-Bold': require('../assets/fonts/ClashDisplay-Bold.otf'),
  })

  useEffect(() => {
    if (loaded || error) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <Providers>
      <AuthProvider>
        <RootLayoutNav />
      </AuthProvider>
    </Providers>
  )
}

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider>{children}</Provider>
}

function RootLayoutNav() {
  const theme = useTheme()
  const { isAuthenticated } = useAuth()

  return (
    <ThemeProvider value={DefaultTheme}>
      <StatusBar barStyle={isAuthenticated ? 'dark-content' : 'light-content'} />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="auth/index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="modal"
          options={{
            headerShown: false,
            presentation: 'modal',
            animation: 'slide_from_right',
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            contentStyle: {
              backgroundColor: theme.background.val,
            },
          }}
        />
      </Stack>
    </ThemeProvider>
  )
}
