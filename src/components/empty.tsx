import React from 'react';
import { Paragraph, YStack } from 'tamagui';

const Empty = ({ text }: { text: string }) => (
  <YStack flex={1} justifyContent="center" alignItems="center" padding="$5">
    <Paragraph fontSize="$4" color="gray" textAlign="center">
      {text}
    </Paragraph>
  </YStack>
);

export default React.memo(Empty);
