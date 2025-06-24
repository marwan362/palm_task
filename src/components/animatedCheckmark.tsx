import React, { useEffect } from 'react';
import Animated, {
  interpolate,
  useSharedValue,
  withTiming,
  Easing,
  useAnimatedProps,
} from 'react-native-reanimated';
import { Circle, Path, Svg } from 'react-native-svg';
import {
  ANIMATION_DURATION,
  CHECK_PROPS,
  CIRCLE_PROPS,
  SVG_PROPS,
} from '../constants/animation';

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function AnimatedCheckmark() {
  const circleProgress = useSharedValue(0);
  const checkProgress = useSharedValue(0);

  useEffect(() => {
    const circleAnimation = withTiming(1, {
      duration: ANIMATION_DURATION.CIRCLE,
      easing: Easing.out(Easing.ease),
    });

    const checkAnimation = withTiming(1, {
      duration: ANIMATION_DURATION.CHECK,
      easing: Easing.out(Easing.ease),
    });

    circleProgress.value = circleAnimation;

    const timer = setTimeout(() => {
      checkProgress.value = checkAnimation;
    }, ANIMATION_DURATION.DELAY);

    return () => {
      clearTimeout(timer);
      circleProgress.value = 0;
      checkProgress.value = 0;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animatedCircleProps = useAnimatedProps(() => ({
    r: interpolate(circleProgress.value, [0, 1], [0, 40]),
  }));

  const animatedPathProps = useAnimatedProps(() => ({
    strokeDashoffset: interpolate(checkProgress.value, [0, 1], [100, 0]),
  }));

  return (
    <Svg {...SVG_PROPS}>
      <AnimatedCircle {...CIRCLE_PROPS} animatedProps={animatedCircleProps} />
      <AnimatedPath {...CHECK_PROPS} animatedProps={animatedPathProps} />
    </Svg>
  );
}
