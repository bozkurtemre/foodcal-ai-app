import { Tabs, Redirect } from 'expo-router'
import { useTheme, View } from 'tamagui'
import { Home, ChartColumnBig, Settings, Plus } from '@tamagui/lucide-icons'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { useAuth } from '../../src/contexts/AuthContext'

export default function TabLayout() {
  const theme = useTheme()

  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Redirect href="/auth" />
  }

  return (
    <View style={{ flex: 1 }}>
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#272835",
        tabBarStyle: {
          backgroundColor: theme.background.val,
          borderTopColor: theme.borderColor.val,
          display: isAuthenticated ? 'flex' : 'none',
          height: 100,
        },
        tabBarIconStyle: {
          marginTop: 10,
          marginBottom: 2,
        },
        tabBarLabelStyle: {
          marginTop: 2,
          fontFamily: 'ClashDisplay-Regular',
          fontSize: 12
        }
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
        name="analytics"
        options={{
          title: 'Analytics',
          tabBarIcon: ({ color }) => <ChartColumnBig color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <Settings color={color} />,
        }}
      />
      <Tabs.Screen
        name="plus"
        options={{
          title: '',
          tabBarIcon: () => (
            <TouchableOpacity style={styles.plusButton}>
              <Plus color="white" size={32} />
            </TouchableOpacity>
          ),
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault()
            console.log('Plus button pressed')
          },
        }}
      />
      </Tabs>
    </View>
  )
}

const styles = StyleSheet.create({
  plusButton: {
    backgroundColor: '#272835',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
})
