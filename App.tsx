import 'react-native-gesture-handler';

import { Barlow_400Regular, Barlow_700Bold, Barlow_900Black, useFonts } from '@expo-google-fonts/barlow';
import { ActivityIndicator } from 'react-native';
import Routes from "./src/routes";

const [ fontsLoaded ] = useFonts({ Barlow_400Regular, Barlow_700Bold, Barlow_900Black })


export default function App() {
  return (
    fontsLoaded ? <Routes /> : <ActivityIndicator size="large" color="#11455B" />
  );
}