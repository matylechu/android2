import { View } from 'react-native';
import {styles} from "./styles"
import StartGame from './screens/start-game/index';
import { useState } from 'react';
import  Game  from './screens/game';
import { Header} from './components/index';

export default function App() {
  const [userNumber, setUserNumber] = useState(null)
  const headerTitle = userNumber ? 'Game' : 'Bienvenidos'


  const onStartGame = (number) => {
    setUserNumber(number)
  }

  const Content = () =>( userNumber ? <Game /> : <StartGame onStartGame={onStartGame}/>)


  return (
    <View style={styles.container}>
    <Header title= {headerTitle} />
    <Content/>
    </View>
  );
}