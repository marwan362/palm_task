import React from 'react';
import { Text } from 'tamagui';
import Animated, { FadeOut, FadeInLeft } from 'react-native-reanimated';

const AnimatedText = React.memo(({ text }: { text: string }) => {
  return (
    <Animated.View
      entering={FadeInLeft.delay(100).springify(2000)}
      exiting={FadeOut}
    >
      <Text marginTop="$4" fontSize="$6" color="$color">
        {text}
      </Text>
    </Animated.View>
  );
});

export default AnimatedText;
