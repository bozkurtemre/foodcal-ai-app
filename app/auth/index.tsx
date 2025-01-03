import { useState } from 'react'
import { Redirect } from 'expo-router'
import { YStack } from 'tamagui'
import { useAuth } from '../../src/contexts/AuthContext'
import { LoginForm } from '../../components/auth/LoginForm'
import { RegisterForm } from '../../components/auth/RegisterForm'

export default function Auth() {
    const { isAuthenticated } = useAuth()
    const [isLogin, setIsLogin] = useState(true)

    if (isAuthenticated) {
        return <Redirect href="/(tabs)" />
    }

    return (
        <YStack f={1} jc="center" ai="center" space="$4">
            {isLogin ? (
                <LoginForm onRegisterPress={() => setIsLogin(false)} />
            ) : (
                <RegisterForm onLoginPress={() => setIsLogin(true)} />
            )}
        </YStack>
    )
}
