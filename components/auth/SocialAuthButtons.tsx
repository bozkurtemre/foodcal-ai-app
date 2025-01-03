import { Button, YStack, Text, XStack, Stack } from 'tamagui'
import * as WebBrowser from 'expo-web-browser'
import AppleIcon from '../icons/AppleIcon'
import GoogleIcon from '../icons/GoogleIcon'
import { useAuth } from '../../src/contexts/AuthContext'

type Provider = 'google' | 'apple'

const OAUTH_URLS = {
    google: 'https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&response_type=code&scope=email%20profile&redirect_uri=YOUR_REDIRECT_URI',
    apple: 'https://appleid.apple.com/auth/authorize?client_id=YOUR_APPLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email%20name&response_mode=form_post'
}

export function SocialAuthButtons() {
    const { login } = useAuth()

    const handleSocialLogin = async (provider: Provider) => {
        try {
            const result = await WebBrowser.openAuthSessionAsync(
                OAUTH_URLS[provider],
                'YOUR_REDIRECT_URI'
            )

            if (result.type === 'success') {
                // Handle successful authentication
                console.log(`${provider} Sign in successful`, result)
                // Extract token from URL and login
                // const token = extractTokenFromUrl(result.url)
                // login(token)
            }
        } catch (error) {
            console.error(`${provider} Sign in error:`, error)
        }
    }

    return (
        <YStack space="$4" w="100%">
            <XStack alignItems="center" space="$2">
                <Stack height={1} bg="$gray10" flex={1} />
                <Text color="$gray12" fos="$5">or continue with</Text>
                <Stack height={1} bg="$gray11" flex={1} />
            </XStack>
            <Button
                icon={<GoogleIcon />}
                fontSize="$5"
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
                fontSize="$5"
                backgroundColor="black"
                color="white"
                onPress={() => handleSocialLogin('apple')}
            >
                Continue with Apple
            </Button>
        </YStack>
    )
} 