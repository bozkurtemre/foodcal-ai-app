import type { CardProps } from 'tamagui';
import { Card, H2, Paragraph, XStack, YStack } from 'tamagui';

export default function HomeChart(props: CardProps) {
    const calorieData = {
        Mon: 1800,
        Tue: 1600,
        Wed: 2000,
        Thu: 1800,
        Fri: 1500,
        Sat: 2200,
        Sun: 2100,
    };

    return (
        <Card elevate size="$4" backgroundColor="#272835" bordered {...props}>
            <Card.Header padded>
                <H2 color="white" pt="$2">1883 Kcal</H2>
                <Paragraph color="$gray5" pt="$2">Remaining</Paragraph>
            </Card.Header>
            <XStack alignItems="flex-end" gap="$4" ml="$6" mb="$4" height={100}>
                {Object.entries(calorieData).map(([day, calories]) => (
                    <YStack key={day} alignItems="center">
                        <YStack
                            width={25}
                            height={Math.min(100, (calories / 2500) * 100)}
                            backgroundColor="white"
                            borderRadius={5}
                        />
                        <Paragraph color="white" pt="$2" size="$4">
                            {day}
                        </Paragraph>
                    </YStack>
                ))}
            </XStack>
        </Card>
    );
}
