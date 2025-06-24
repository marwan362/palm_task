import React, { useCallback } from 'react';
import { Text, XStack, YStack, styled } from 'tamagui';
import { MoodType } from '../../../types';
import { moods } from '../../../constants/moods';
import locales from '../../../locales';
const MoodButton = styled(XStack, {
  padding: '$3',
  borderRadius: '$8',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$backgroundHover',
  variants: {
    selected: {
      true: {
        backgroundColor: '$blue6',
      },
    },
  },
});

interface MoodPickerProps {
  selectedMood: MoodType;
  onSelect: (mood: MoodType) => void;
}

const MoodPicker = React.memo(({ selectedMood, onSelect }: MoodPickerProps) => {
  const handleMoodSelect = useCallback(
    (mood: MoodType) => {
      onSelect(mood);
    },
    [onSelect],
  );

  return (
    <YStack gap="$2">
      <Text fontSize="$6">{locales.moodPicker.title}</Text>
      <XStack gap="$2">
        {moods.map(mood => (
          <MoodButton
            key={mood.type}
            selected={selectedMood === mood.type}
            onPress={() => handleMoodSelect(mood.type as MoodType)}
            animation="quick"
          >
            <Text fontSize="$8">{mood.emoji}</Text>
          </MoodButton>
        ))}
      </XStack>
    </YStack>
  );
});

export default MoodPicker;
