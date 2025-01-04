import { Button, View } from 'tamagui'
import { useAuth } from '../../src/contexts/AuthContext'

export default function TabTwoScreen() {
  const { logout } = useAuth()

  const handleLogout = async () => {
    try {
      logout()
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <View flex={1} alignItems="center" justifyContent="center" bg="$gray5">
      <Button
        backgroundColor="$red10Light"
        color="white"
        onPress={handleLogout}
      >
        Logout
      </Button>
    </View>
  )
}
