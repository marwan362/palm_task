import React from 'react';
import { YStack, ScrollView, Button, Text } from 'tamagui';
import SuggestionCard from './suggestionCard';
import { StyleSheet } from 'react-native';
import locales from '../../../locales';
import ViewFadeAnimated from '../../../components/viewFadeAnimated';
type WellnessSuggestionsProps = {
  suggestions: { text: string; icon: string }[];
  onReset: () => void;
};

export const WellnessSuggestions = React.memo(
  ({ suggestions, onReset }: WellnessSuggestionsProps) => {
    return (
      <ScrollView
        flex={1}
        padding="$4"
        backgroundColor="$background"
        marginTop="$5"
        contentContainerStyle={styles.contentContainerStyle}
      >
        <YStack gap="$4">
          <Text fontSize="$8" fontWeight="bold" marginBottom="$2">
            {locales.wellnessScreen.suggestionsTitle}
          </Text>
          {suggestions.map((suggestion, index) => (
            <SuggestionCard
              key={suggestion.text}
              suggestion={suggestion.text}
              icon={suggestion.icon}
              delay={index * 200}
            />
          ))}
        </YStack>
        <ViewFadeAnimated style={styles.buttonContainer} delay={1000}>
          <Button backgroundColor="$blue6" marginTop="$4" onPress={onReset}>
            {locales.wellnessScreen.startOver}
          </Button>
        </ViewFadeAnimated>
      </ScrollView>
    );
  },
);

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: 12,
    flexGrow: 1,
  },
  buttonContainer: {
    marginTop: 'auto',
  },
});
