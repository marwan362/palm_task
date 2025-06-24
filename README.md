# Wellness Assistant

A React Native application for tracking daily wellness metrics and providing personalized suggestions.

## Features

- **Mood Tracking**: Select your current mood from a visual picker
- **Sleep Monitoring**: Log your sleep hours with a slider
- **Notes**: Add additional wellness notes
- **Personalized Suggestions**: Get wellness tips based on your mood and sleep patterns
- **Submission Confirmation**: Visual feedback when submitting your wellness data

## Project Structure

```
WellnessAssistant/
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── animatedCheckmark.tsx  # Checkmark animation
│   │   ├── animatedText.tsx   # Animated text components
│   │   ├── slider.tsx         # Generic slider component
│   │   ├── submissionConfirmation.tsx # Submission confirmation UI
│   │   └── viewFadeAnimated.tsx # Fade animation component
│   ├── constants/
│   │   ├── animation.ts       # Animation configurations
│   │   ├── moods.ts           # Mood definitions
│   │   └── suggestions.ts    # Wellness suggestions
│   ├── locales/               # Localization files
│   ├── screens/               # Application screens
│   │   └── wellness/          # Wellness screen components
│   │       ├── components/    # Screen-specific components
│   │       │   ├── moodPicker.tsx     # Mood selection UI
│   │       │   ├── suggestionCard.tsx # Suggestion card component
│   │       │   ├── wellnessForm.tsx   # Wellness input form
│   │       │   └── wellnessSuggestions.tsx # Suggestions list
│   │       └── index.tsx      # Main screen component
│   └── types/                 # Type definitions
├── App.tsx                    # Main application component
└── ...
```

## Tech Stack Used
- React Native
- react-native-reanimated (v2)
- Tamagui for styling

## Implementation Approach
- Utilized react-native-reanimated's shared values and animated styles for smooth animations
- Created reusable animated components following the project's existing patterns
- Implemented both fade-in and scale animations for better visual feedback

## Key Design Decisions
1. **Component Reuse**:
   - Extended Tamagui's Text component via createAnimatedComponent rather than creating a separate animated text component
   - This maintains consistency with the existing design system while adding animation capabilities

2. **Animation Logic**:
   - Used easing functions (Easing.out) for natural motion
   - Combined opacity and scale transforms for a polished effect
   - Timed the animation to follow the existing checkmark animation sequence

3.  **UI structure**:
   - I use camelcase file names and folder
   - I follow the approach for make reusable components in the root and each screen has each component folder

## Technical Highlights

- **Performance Optimized**: Uses React.memo, useCallback, and useMemo
- **Type Safety**: Comprehensive TypeScript integration
- **Modular Architecture**: Well-separated components and concerns
- **Localization Ready**: Text strings extracted to locale files

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. For IOS cd ios then pod install then in the root `npx react-native run-ios`
4. For android just run `npx react-native run-android`

## Requirements

- Node.js
- npm
- React Native development environment

## License

MIT
