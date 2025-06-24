import React, { useState, useCallback, useEffect } from 'react';

import { MoodType } from '../../types';
import { suggestions } from '../../constants/suggestions';
import SubmissionConfirmation from '../../components/submissionConfirmation';
import { WellnessSuggestions } from './components/wellnessSuggestions';
import { WellnessForm } from './components/wellnessForm';
import locales from '../../locales';
import { useMutation } from '@tanstack/react-query';
import { createWellnessEntry } from '../../apis/wellness';

export default function WellnessScreen() {
  const [mood, setMood] = useState<MoodType>('neutral');
  const [sleepHours, setSleepHours] = useState(7);
  const [notes, setNotes] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const { mutate, isPending, isSuccess, isError, reset } = useMutation({
    mutationFn: () => {
      return createWellnessEntry({ mood, notes, sleep: sleepHours });
    },
  });

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => setShowSuggestions(true), 1500);
    }
  }, [isSuccess]);

  const handleSubmit = useCallback(() => {
    mutate();
  }, [mutate]);

  const resetForm = useCallback(() => {
    setShowSuggestions(false);
    setMood('neutral');
    setSleepHours(7);
    setNotes('');
    reset();
  }, [reset]);

  if (isSuccess && !showSuggestions) {
    return (
      <SubmissionConfirmation text={locales.wellnessScreen.confirmation} />
    );
  }

  if (showSuggestions) {
    return (
      <WellnessSuggestions suggestions={suggestions} onReset={resetForm} />
    );
  }

  return (
    <WellnessForm
      mood={mood}
      sleepHours={sleepHours}
      notes={notes}
      onMoodChange={setMood}
      onSleepHoursChange={setSleepHours}
      onNotesChange={setNotes}
      onSubmit={handleSubmit}
      isPending={isPending}
      isError={isError}
    />
  );
}
