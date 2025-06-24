import React from 'react';
import { YStack } from 'tamagui';
import AnimatedCheckmark from './animatedCheckmark';
import locales from '../locales';
import AnimatedText from './animatedText';

const SubmissionConfirmation = React.memo(() => {
  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="$background"
    >
      <AnimatedCheckmark />

      <AnimatedText text={locales.wellnessScreen.confirmation} />
    </YStack>
  );
});

export default SubmissionConfirmation;
