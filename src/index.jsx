import { View } from 'react-native';
import {styles} from "./styles"
import StartGame from './screens/start-game';

export default function App() {
  return (
    <View style={styles.container}>
      <StartGame />
    </View>
  );
}