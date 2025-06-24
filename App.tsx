import { createTamagui, TamaguiProvider } from 'tamagui';
import { defaultConfig } from '@tamagui/config/v4';
import Tabs from './src/navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const config = createTamagui(defaultConfig);

const queryClient = new QueryClient();

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Tabs />
      </QueryClientProvider>
    </TamaguiProvider>
  );
}
