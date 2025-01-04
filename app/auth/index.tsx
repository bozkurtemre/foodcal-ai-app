import { useState } from 'react'
import { Redirect } from 'expo-router'
import { YStack } from 'tamagui'
import { useAuth } from '../../src/contexts/AuthContext'
import { LoginForm } from '../../components/auth/LoginForm'
import { RegisterForm } from '../../components/auth/RegisterForm'
import { ForgotPasswordForm } from '../../components/auth/ForgotPasswordForm'

export default function Auth() {
    const { isAuthenticated } = useAuth()
    const [currentScreen, setCurrentScreen] = useState<'login' | 'register' | 'forgotPassword'>('login')

    if (isAuthenticated) {
        return <Redirect href="/(tabs)" />
    }

    return (
        <YStack f={1} jc="center" ai="center" space="$4">
            {currentScreen === 'login' ? (
                <LoginForm onRegisterPress={() => setCurrentScreen('register')}
                    onForgotPasswordPress={() => setCurrentScreen('forgotPassword')} />
            ) : currentScreen === 'register' ? (
                <RegisterForm onLoginPress={() => setCurrentScreen('login')} />
            ) : (
                <ForgotPasswordForm onLoginPress={() => setCurrentScreen('login')} />
            )}
        </YStack>
    )
}
