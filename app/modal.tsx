import { useCallback } from 'react'
import { WebView } from 'react-native-webview'
import { useRouter, useLocalSearchParams } from 'expo-router'
import { YStack } from 'tamagui'
import { useAuth } from '../src/contexts/AuthContext'

const OAUTH_URLS = {
  google: 'https://accounts.google.com/o/oauth2/v2/auth',
  apple: 'https://appleid.apple.com/auth/authorize'
}

export default function BrowserModal() {
  const router = useRouter()
  const { provider } = useLocalSearchParams<{ provider: 'google' | 'apple' }>()
  const { login } = useAuth()

  const getOAuthUrl = () => {
    switch (provider) {
      case 'google':
        return `${OAUTH_URLS.google}?client_id=YOUR_GOOGLE_CLIENT_ID&response_type=code&scope=email%20profile&redirect_uri=YOUR_REDIRECT_URI`
      case 'apple':
        return `${OAUTH_URLS.apple}?client_id=YOUR_APPLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email%20name&response_mode=form_post`
      default:
        return OAUTH_URLS.google
    }
  }

  const handleNavigationStateChange = useCallback((navState: { url: string }) => {
    // Handle OAuth redirects
    if (navState.url.includes('YOUR_REDIRECT_URI')) {
      // login('dummy-token') // Replace with actual token
      // router.back()
    }

    // Provider-specific success checks
    if (provider === 'google' && navState.url.includes('accounts.google.com/signin/oauth/consent')) {
      console.log('Google OAuth flow started')
    } else if (provider === 'apple' && navState.url.includes('appleid.apple.com')) {
      console.log('Apple OAuth flow started')
    }
  }, [login, router, provider])

  return (
    <YStack f={1}>
      <WebView
        source={{ uri: getOAuthUrl() }}
        onNavigationStateChange={handleNavigationStateChange}
        style={{ flex: 1 }}
        incognito={true} // Use incognito mode to prevent session conflicts
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </YStack>
  )
}
