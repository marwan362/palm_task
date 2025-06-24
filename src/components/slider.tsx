import React from 'react';
import { Slider as SliderComp } from 'tamagui';

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
}

const Slider = React.memo(({ value, onChange }: SliderProps) => {
  return (
    <SliderComp
      size="$4"
      min={1}
      max={12}
      step={0.5}
      value={[value]}
      onValueChange={([val]) => onChange(val)}
    >
      <SliderComp.Track />
      <SliderComp.Thumb index={0} scale={0.5} circular />
    </SliderComp>
  );
});
export default Slider;
