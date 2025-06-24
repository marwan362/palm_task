import React from 'react';
import { HistoryEntry } from '..';
import ViewFadeAnimated from '../../../components/viewFadeAnimated';
import { Paragraph, Text, XStack, YStack } from 'tamagui';

const HistoryEntryItem = React.memo(
  ({ item, delay }: { item: HistoryEntry; delay: number }) => (
    <ViewFadeAnimated delay={delay}>
      <YStack
        padding="$4"
        marginBottom="$3"
        backgroundColor="$background"
        borderRadius="$2"
        gap="$2"
      >
        <Text fontWeight="bold" marginBottom="$2">
          {item.date}
        </Text>
        <XStack gap="$2">
          <Text>Sleep:</Text>
          <Text>{item.sleepHours} hours</Text>
        </XStack>
        <XStack gap="$2">
          <Text>Mood:</Text>
          <Text>{item.mood}</Text>
        </XStack>
        <XStack gap="$2">
          <Text>Notes:</Text>
          <Paragraph>{item.notes}</Paragraph>
        </XStack>
      </YStack>
    </ViewFadeAnimated>
  ),
);

export default HistoryEntryItem;
