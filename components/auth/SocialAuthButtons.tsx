import { Button, YStack, Text, XStack, Stack } from 'tamagui'
import { router } from 'expo-router'
import AppleIcon from '../icons/AppleIcon'
import GoogleIcon from '../icons/GoogleIcon'

type Provider = 'google' | 'apple'

export function SocialAuthButtons() {
    const handleSocialLogin = (provider: Provider) => {
        router.push({
            pathname: '/modal',
            params: { provider }
        })
    }

    return (
        <YStack space="$4" w="100%">
            <XStack alignItems="center" space="$2">
                <Stack height={1} bg="$gray10" flex={1} />
                <Text color="$gray11">or continue with</Text>
                <Stack height={1} bg="$gray10" flex={1} />
            </XStack>
            <Button
                icon={<GoogleIcon />}
                backgroundColor="white"
                borderColor="$gray5"
                borderWidth={1}
                color="black"
                onPress={() => handleSocialLogin('google')}
            >
                Continue with Google
            </Button>
            <Button
                icon={<AppleIcon />}
                backgroundColor="black"
                color="white"
                onPress={() => handleSocialLogin('apple')}
            >
                Continue with Apple
            </Button>
        </YStack>
    )
} 