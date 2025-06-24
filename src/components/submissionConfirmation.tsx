import React from 'react';
import { YStack } from 'tamagui';
import AnimatedCheckmark from './animatedCheckmark';
import AnimatedText from './animatedText';

const SubmissionConfirmation = React.memo(({ text }: { text: string }) => {
  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="$background"
    >
      <AnimatedCheckmark />

      <AnimatedText text={text} />
    </YStack>
  );
});

export default SubmissionConfirmation;
