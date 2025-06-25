import React from 'react';
import { Card, Paragraph, Text, XStack, YStack, styled } from 'tamagui';
import Animated, { FadeInDown, FadeOut } from 'react-native-reanimated';

const IconContainer = styled(XStack, {
  padding: '$3',
  borderRadius: '$8',
  backgroundColor: '$blue4',
  alignItems: 'center',
  justifyContent: 'center',
});

const AnimatedCard = Animated.createAnimatedComponent(Card);

interface SuggestionCardProps {
  suggestion: string;
  icon: string;
  delay?: number;
}

const SuggestionCard = React.memo(
  ({ suggestion, icon, delay = 0 }: SuggestionCardProps) => {
    return (
      <AnimatedCard
        elevate
        size="$4"
        bordered
        flex={1}
        padding="$3"
        entering={FadeInDown.delay(delay).springify()}
        exiting={FadeOut}
      >
        <XStack gap="$3">
          <IconContainer>
            <Text fontSize="$8">{icon}</Text>
          </IconContainer>
          <YStack flex={1}>
            <Paragraph fontWeight="bold">{suggestion}</Paragraph>
          </YStack>
        </XStack>
      </AnimatedCard>
    );
  },
);

export default SuggestionCard;
