import React from 'react';
import { ViewProps } from 'react-native';
import Animated, {
  Easing,
  FadeInDown,
  FadeOutUp,
} from 'react-native-reanimated';

const ViewFadeAnimated = ({
  children,
  delay = 0,
  style,
}: {
  children: React.ReactNode;
  delay: number;
  style?: ViewProps['style'];
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
      style={style}
    >
      {children}
    </Animated.View>
  );
};

export default React.memo(ViewFadeAnimated);
