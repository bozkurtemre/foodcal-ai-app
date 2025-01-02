import { useState } from 'react'
import { Button, Input, YStack, Text, XStack } from 'tamagui'
import { useAuth } from '../../src/contexts/AuthContext'
import { SocialAuthButtons } from './SocialAuthButtons'
import EyeIcon from '../icons/EyeIcon'

interface LoginFormProps {
    onRegisterPress: () => void
}

export function LoginForm({ onRegisterPress }: LoginFormProps) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)
    const { login } = useAuth()

    const handleLogin = async () => {
        try {
            // Implement your login logic here
            // const response = await loginAPI(email, password)
            // if successful:
            login('dummy-token') // Replace with actual token
        } catch (error) {
            console.error('Login failed:', error)
        }
    }

    return (
        <YStack space="$4" w="100%">
            <Text ta="center" fow="800" fos="$8">
                Login
            </Text>
            <Input
                size="$5"
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            <XStack ai="center" maxWidth="100%">
                <Input
                    flex={1}
                    size="$5"
                    placeholder="Password"
                    secureTextEntry={!passwordVisible}
                    value={password}
                    onChangeText={setPassword}
                />
                <Button
                    chromeless
                    paddingHorizontal="$2"
                    marginLeft="$-8"
                    position="absolute"
                    right={0}
                    onPress={() => setPasswordVisible(!passwordVisible)}
                >
                    <EyeIcon visible={passwordVisible} />
                </Button>
            </XStack>
            <Text
                color="$gray11"
                ta="center"
                onPress={() => console.log('Forgot password')}
            >
                Forgot Password?
            </Text>
            <Button
                backgroundColor="$red10Light"
                color="white"
                onPress={handleLogin}
            >
                Login
            </Button>
            <Button
                backgroundColor="white"
                borderColor="$gray5"
                borderWidth={1}
                color="black"
                onPress={onRegisterPress}
            >
                Don't have an account? Register
            </Button>
            <SocialAuthButtons />
        </YStack>
    )
} 