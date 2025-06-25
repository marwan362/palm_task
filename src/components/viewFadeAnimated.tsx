import React from 'react';
import Animated, {
  Easing,
  FadeInDown,
  FadeOutUp,
} from 'react-native-reanimated';

const ViewFadeAnimated = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay: number;
}) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(300)
        .springify()
        .easing(Easing.inOut(Easing.quad))
        .delay(delay)}
      exiting={FadeOutUp.duration(300)
        .springify()
        .easing(Easing.inOut(Easing.quad))
        .delay(delay)}
    >
      {children}
    </Animated.View>
  );
};

export default React.memo(ViewFadeAnimated);
