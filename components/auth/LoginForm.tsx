import { useState } from 'react'
import { Button, Input, Text, YStack, XStack, Stack } from 'tamagui'
import { useAuth } from '../../src/contexts/AuthContext'
import { SocialAuthButtons } from './SocialAuthButtons'
import EyeIcon from '../icons/EyeIcon'

interface LoginFormProps {
    onRegisterPress: () => void
    onForgotPasswordPress: () => void
}

export function LoginForm({ onRegisterPress, onForgotPasswordPress }: LoginFormProps) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)
    const { login } = useAuth()

    const handleLogin = async () => {
        try {
            login('dummy-token')
        } catch (error) {
            console.error('Login failed:', error)
        }
    }

    return (
        <YStack f={1} w="100%">
            <Stack backgroundColor="#272835" p="$4" h="30%" jc="center">
                <Text fontFamily="ClashDisplay-Bold" fos="$10" top="$5"  color="white">
                    Login
                </Text>
                <Text fos="$8" top="$10" color="white">
                    Welcome back!
                </Text>
            </Stack>
            <YStack f={1} space="$4" p="$4" pt="$6">
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
                    color="$gray12"
                    ta="center"
                    fos="$5"
                    onPress={onForgotPasswordPress}
                >
                    Forgot Password?
                </Text>
                <Button
                    fontSize="$5"
                    backgroundColor="#272835"
                    color="white"
                    onPress={handleLogin}
                    pressStyle={{
                        backgroundColor: "#272835",
                        opacity: 1
                    }}
                >
                    Login
                </Button>
                <Button
                    fontSize="$5"
                    backgroundColor="white"
                    color="black"
                    onPress={onRegisterPress}
                    pressStyle={{
                        backgroundColor: "$gray2",
                        opacity: 1
                    }}
                >
                    Don't have an account? Register
                </Button>
                <SocialAuthButtons />
            </YStack>
        </YStack>
    )
} 