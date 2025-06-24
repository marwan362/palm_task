import React from 'react';
import { Spinner, Text, YStack } from 'tamagui';

const Loading = ({ text }: { text: string }) => (
  <YStack flex={1} justifyContent="center" alignItems="center" gap="$2">
    <Spinner size="large" />
    <Text>{text}</Text>
  </YStack>
);

export default React.memo(Loading);
