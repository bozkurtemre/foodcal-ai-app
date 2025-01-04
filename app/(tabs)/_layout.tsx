import { Tabs, Redirect } from 'expo-router'
import { useTheme } from 'tamagui'
import { Home, Settings } from '@tamagui/lucide-icons'
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
        tabBarActiveTintColor: "#272835",
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
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <Settings color={color} />,
        }}
      />
    </Tabs>
  )
}
