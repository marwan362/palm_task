import { createTamagui, TamaguiProvider } from 'tamagui';
import { defaultConfig } from '@tamagui/config/v4';

import WellnessScreen from './src/screens/wellness';

const config = createTamagui(defaultConfig);

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <WellnessScreen />
    </TamaguiProvider>
  );
}
