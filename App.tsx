import 'react-native-gesture-handler';

import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { TamaguiProvider, Theme } from 'tamagui';
import Routes from "./src/routes";
import config from './tamagui.config';

export default function App() {

  const colorScheme = useColorScheme()


  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return null
  }

  return (
    // fontsLoaded
      <TamaguiProvider config={config}>
          <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}>
            <Routes />
            <StatusBar style="auto" />
          </Theme>
        </TamaguiProvider>
      // : <ActivityIndicator size="large" color="#11455B" />
  );
}