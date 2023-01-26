import { SafeAreaView } from 'react-native';
import HomeScreen from './screens/HomeScreen';
export default function App() {
  return (
    <SafeAreaView style={{
      flex: 1, // ekranı kapla demek
    }}>
      <HomeScreen />
    </SafeAreaView>
  );
}
