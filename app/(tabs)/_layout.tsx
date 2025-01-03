import { Tabs } from 'expo-router'
import { useTheme } from 'tamagui'
import { Redirect } from 'expo-router'
import { AudioWaveform, Home } from '@tamagui/lucide-icons'
import { useAuth } from '../../src/contexts/AuthContext'

export default function TabLayout() {
  const theme = useTheme()

  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Redirect href="/auth" />
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.red10Light.val,
        tabBarStyle: {
          backgroundColor: theme.background.val,
          borderTopColor: theme.borderColor.val,
          display: isAuthenticated ? 'flex' : 'none',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Two',
          tabBarIcon: ({ color }) => <AudioWaveform color={color} />,
        }}
      />
    </Tabs>
  )
}
