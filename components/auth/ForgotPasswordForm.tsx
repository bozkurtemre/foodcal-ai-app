import { useState } from 'react'
import { Button, Input, Text, YStack, XStack, Stack } from 'tamagui'
import { useAuth } from '../../src/contexts/AuthContext'

interface ForgotPasswordFormProps {
    onLoginPress: () => void
}

export function ForgotPasswordForm({ onLoginPress }: ForgotPasswordFormProps) {
    const [email, setEmail] = useState('')
    const { forgotPassword } = useAuth()

    const handleForgotPassword = async () => {
        try {
            forgotPassword(email)
        } catch (error) {
            console.error('Send failed:', error)
        }
    }

    return (
        <YStack f={1} w="100%">
            <Stack backgroundColor="#272835" p="$4" h="30%" jc="center">
                <Text fontFamily="ClashDisplay-Bold" fos="$10" top="$3" color="white">
                    Forgot Password
                </Text>
                <Text fos="$8" top="$8" color="white">
                    No worries, we got you!
                </Text>
            </Stack>
            <YStack f={1} space="$4" p="$4">
                <Input
                    size="$5"
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
                <Button
                    fontSize="$5"
                    backgroundColor="#272835"
                    color="white"
                    onPress={handleForgotPassword}
                >
                    Send
                </Button>
                <Button
                    fontSize="$5"
                    backgroundColor="white"
                    borderColor="$gray5"
                    borderWidth={1}
                    color="black"
                    onPress={onLoginPress}
                >
                    Back to Login
                </Button>
            </YStack>
        </YStack>
    )
} 