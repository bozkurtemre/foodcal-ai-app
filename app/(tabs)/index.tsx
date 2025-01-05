import { ExternalLink } from '@tamagui/lucide-icons'
import { Anchor, Paragraph, XStack, YStack } from 'tamagui'
import HomeChart from '../../components/home/HomeChart'

export default function TabHomeScreen() {
  return (
    <YStack f={1} gap="$8">
      <XStack $sm={{ flexDirection: 'column' }} pt="$12">
        <HomeChart size="$5" height="$20" ml="$4" mr="$4" />
      </XStack>
    </YStack>
  )
}
