# Wellness Assistant

A React Native application for tracking daily wellness metrics and providing personalized suggestions.

## Tech Stack Used
- React Native
- react-native-reanimated (v2)
- Tamagui for styling

## Features

- **Mood Tracking**: Select your current mood from a visual picker
- **Sleep Monitoring**: Log your sleep hours with a slider
- **Notes**: Add additional wellness notes
- **Personalized Suggestions**: Get wellness tips based on your mood and sleep patterns
- **Submission Confirmation**: Visual feedback when submitting your wellness data

## Technical Highlights

- **Performance Optimized**: Uses React.memo, useCallback, and useMemo
- **Type Safety**: Comprehensive TypeScript integration
- **Modular Architecture**: Well-separated components and concerns
- **Localization Ready**: Text strings extracted to locale files

## Project Structure

```
WellnessAssistant/
├── src/
│   ├── apis/            # apis calls
│   │   ├── wellness/        # wellness calls
│   ├── components/            # Reusable UI components
│   │   ├── animatedCheckmark.tsx  # Checkmark animation
│   │   ├── animatedText.tsx   # Animated text components
│   │   ├── slider.tsx         # Generic slider component
│   │   ├── empty.tsx         # Generic empty component
│   │   ├── error.tsx         # Generic error component
│   │   ├── loading.tsx         # Generic loading component
│   │   ├── submissionConfirmation.tsx # Submission confirmation UI
│   │   └── viewFadeAnimated.tsx # Fade animation component
│   ├── constants/
│   │   ├── animation.ts       # Animation configurations
│   │   ├── moods.ts           # Mood definitions
│   │   └── suggestions.ts    # Wellness suggestions
│   ├── locales/               # Localization files
│   ├── screens/               # Application screens
│   │   ├── history/           # History screen
│   │       ├── components/    # Screen-specific components
│   │       └── historyEntryItem.tsx     # History entry item component
│   │   └── wellness/          # Wellness screen components
│   │       ├── components/    # Screen-specific components
│   │       │   ├── moodPicker.tsx     # Mood selection UI
│   │       │   ├── suggestionCard.tsx # Suggestion card component
│   │       │   ├── wellnessForm.tsx   # Wellness input form
│   │       │   └── wellnessSuggestions.tsx # Suggestions list
│   │       └── index.tsx      # Main screen component
│   └── types/                 # Type definitions
├── App.tsx                    # Main application component
├── WellnessAssistantBackend/  # Backend API server
│   ├── controllers/          # Business logic
│   ├── routes/               # API endpoint definitions
│   └── README.md            # Backend documentation
└── ...
```

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

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. run backend `npm run backend` in the root
4. For IOS cd ios then pod install then in the root `npm run ios`
5. For android just run `npm run android` and please change the base url in the env file localhost not work

## Requirements

- Node.js
- npm
- React Native development environment

## License

## Demo Video

Watch a comprehensive demo of the Wellness Assistant app:

[![▶️](https://raw.githubusercontent.com/primer/octicons/main/icons/play-24.svg)](https://www.loom.com/share/912b33280f924e11949ca35955b2314b)

This video demonstrates:
- Core app functionality
- User interface interactions 
- Real-time animations
- Data submission flow

MIT
