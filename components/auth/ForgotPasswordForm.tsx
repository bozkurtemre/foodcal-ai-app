import { useState } from 'react'
import { Button, Input, Text, YStack, Stack } from 'tamagui'
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
            <Stack backgroundColor="#272835" p="$4" h="25%" jc="center">
                <Text fontFamily="ClashDisplay-Bold" fos="$9" top="$4" color="white">
                    Forgot Password
                </Text>
                <Text fos="$6" top="$6" color="white">
                    No worries, we got you!
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
                <Button
                    fontSize="$5"
                    backgroundColor="#272835"
                    color="white"
                    onPress={handleForgotPassword}
                    pressStyle={{
                        backgroundColor: "#272835",
                        opacity: 1
                    }}
                >
                    Send
                </Button>
                <Button
                    fontSize="$5"
                    backgroundColor="white"
                    color="black"
                    onPress={onLoginPress}
                    pressStyle={{
                        backgroundColor: "$gray2",
                        opacity: 1
                    }}
                >
                    Back to Login
                </Button>
            </YStack>
        </YStack>
    )
} 