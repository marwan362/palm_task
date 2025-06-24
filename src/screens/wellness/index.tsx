import React, { useState, useCallback } from 'react';

import { MoodType } from '../../types';
import { suggestions } from '../../constants/suggestions';
import SubmissionConfirmation from '../../components/submissionConfirmation';
import { WellnessSuggestions } from './components/wellnessSuggestions';
import { WellnessForm } from './components/wellnessForm';
import locales from '../../locales';
export default function WellnessScreen() {
  const [mood, setMood] = useState<MoodType>('neutral');
  const [sleepHours, setSleepHours] = useState(7);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSubmit = useCallback(() => {
    setSubmitted(true);
    setTimeout(() => setShowSuggestions(true), 1500);
  }, []);

  const resetForm = useCallback(() => {
    setSubmitted(false);
    setShowSuggestions(false);
    setMood('neutral');
    setSleepHours(7);
    setNotes('');
  }, []);

  if (submitted && !showSuggestions) {
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
    />
  );
}
