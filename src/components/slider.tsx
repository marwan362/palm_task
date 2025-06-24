import React from 'react';
import Slider from '@react-native-community/slider';

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
}

const CustomSlider = React.memo(({ value, onChange }: SliderProps) => {
  return (
    <Slider
      minimumValue={1}
      maximumValue={12}
      step={0.5}
      value={value}
      onValueChange={onChange}
      minimumTrackTintColor="lightblue"
      maximumTrackTintColor="lightgray"
      thumbTintColor="lightblue"
    />
  );
});

export default CustomSlider;
