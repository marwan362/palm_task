import React from 'react';
import { Card, Paragraph, Text, XStack, YStack, styled } from 'tamagui';
import Animated, { FadeInDown, FadeOut } from 'react-native-reanimated';
const IconContainer = styled(XStack, {
  padding: '$3',
  borderRadius: '$8',
  background: '$blue4',
  alignItems: 'center',
  justifyContent: 'center',
});

interface SuggestionCardProps {
  suggestion: string;
  icon: string;
  delay?: number;
}

const SuggestionCard = React.memo(
  ({ suggestion, icon, delay = 0 }: SuggestionCardProps) => {
    return (
      <Animated.View
        entering={FadeInDown.delay(delay).springify()}
        exiting={FadeOut}
      >
        <Card elevate size="$4" bordered flex={1} padding="$3">
          <XStack gap="$3">
            <IconContainer>
              <Text fontSize="$8">{icon}</Text>
            </IconContainer>
            <YStack flex={1}>
              <Paragraph fontWeight="bold">{suggestion}</Paragraph>
            </YStack>
          </XStack>
        </Card>
      </Animated.View>
    );
  },
);
export default SuggestionCard;
