import { Button, View } from 'tamagui'
import { useAuth } from '../../src/contexts/AuthContext'

export default function TabSettingsScreen() {
  const { logout } = useAuth()

  const handleLogout = async () => {
    try {
      logout()
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <Button
        backgroundColor="#272835"
        color="white"
        onPress={handleLogout}
        pressStyle={{
          backgroundColor: "#272835",
          opacity: 1
        }}
      >
        Logout
      </Button>
    </View>
  )
}
