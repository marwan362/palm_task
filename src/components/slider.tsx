import React from 'react';
import Slider from '@react-native-community/slider';

const CustomSlider = React.memo(
  ({
    value,
    onChange,
  }: {
    value: number;
    onChange: (value: number) => void;
  }) => {
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
  },
);

export default CustomSlider;
