import React from 'react';
import { YStack, Text, TextArea, Button, ScrollView } from 'tamagui';
import MoodPicker from './moodPicker';
import SleepSlider from '../../../components/slider';
import { MoodType } from '../../../types';
import locales from '../../../locales';
import ViewFadeAnimated from '../../../components/viewFadeAnimated';
import { ActivityIndicator, StyleSheet } from 'react-native';

type WellnessFormProps = {
  mood: MoodType;
  sleepHours: number;
  notes: string;
  isPending: boolean;
  isError: boolean;
  onMoodChange: (mood: MoodType) => void;
  onSleepHoursChange: (hours: number) => void;
  onNotesChange: (text: string) => void;
  onSubmit: () => void;
};

export const WellnessForm = React.memo(
  ({
    mood,
    sleepHours,
    notes,
    onMoodChange,
    onSleepHoursChange,
    onNotesChange,
    onSubmit,
    isPending,
    isError,
  }: WellnessFormProps) => {
    return (
      <ScrollView
        flex={1}
        padding="$4"
        backgroundColor="$background"
        marginTop="$5"
        contentContainerStyle={styles.contentContainerStyle}
      >
        <YStack gap="$4" flexGrow={1}>
          <ViewFadeAnimated delay={200}>
            <Text fontSize="$8" fontWeight="bold" marginBottom="$2">
              {locales.wellnessScreen.title}
            </Text>
          </ViewFadeAnimated>

          <ViewFadeAnimated delay={400}>
            <MoodPicker selectedMood={mood} onSelect={onMoodChange} />
          </ViewFadeAnimated>

          <ViewFadeAnimated delay={600}>
            <YStack gap="$2">
              <Text fontSize="$6">{locales.wellnessScreen.sleepHours}</Text>
              <SleepSlider value={sleepHours} onChange={onSleepHoursChange} />
              <Text>
                {sleepHours} {locales.wellnessScreen.hours}
              </Text>
            </YStack>
          </ViewFadeAnimated>

          <ViewFadeAnimated delay={800}>
            <YStack gap="$2">
              <Text fontSize="$6">
                {locales.wellnessScreen.additionalNotes}
              </Text>
              <TextArea
                placeholder={locales.wellnessScreen.notesPrompt}
                value={notes}
                onChangeText={onNotesChange}
                numberOfLines={4}
                textAlign="left"
                borderRadius="$2"
                borderWidth={1}
              />
            </YStack>
          </ViewFadeAnimated>

          <ViewFadeAnimated style={styles.buttonContainer} delay={1000}>
            <Button
              backgroundColor="$blue6"
              marginTop="$4"
              onPress={onSubmit}
              theme="active"
              color={isError ? 'red' : 'unset'}
              disabled={isPending}
            >
              {isPending ? (
                <ActivityIndicator />
              ) : isError ? (
                locales.wellnessScreen.error
              ) : (
                locales.wellnessScreen.submitButton
              )}
            </Button>
          </ViewFadeAnimated>
        </YStack>
      </ScrollView>
    );
  },
);

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 'auto',
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
});
