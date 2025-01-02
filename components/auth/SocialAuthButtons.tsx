import { Button, YStack, Text, XStack, Stack } from 'tamagui'
import { Link } from 'expo-router'
import AppleIcon from '../icons/AppleIcon'
import GoogleIcon from '../icons/GoogleIcon'

export function SocialAuthButtons() {
    return (
        <YStack space="$4" w="100%">
            <XStack alignItems="center" space="$2">
                <Stack height={1} bg="$gray10" flex={1} />
                <Text color="$gray11">or continue with</Text>
                <Stack height={1} bg="$gray10" flex={1} />
            </XStack>
            <Link href="/modal" asChild>
                <Button
                    icon={<GoogleIcon />}
                    backgroundColor="white"
                    borderColor="$gray5"
                    borderWidth={1}
                    color="black"
                    onPress={() => console.log('Google auth triggered')}
                >
                    Continue with Google
                </Button>
            </Link>
            <Link href="/modal" asChild>
                <Button
                    icon={<AppleIcon />}
                    backgroundColor="black"
                    color="white"
                    onPress={() => console.log('Apple auth triggered')}
                >
                    Continue with Apple
                </Button>
            </Link>
        </YStack>
    )
} 