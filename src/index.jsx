import { ActivityIndicator, View } from 'react-native';
import {styles} from "./styles"
import StartGame from './screens/start-game/index';
import {useFonts} from 'expo-font'
import { useState } from 'react';
import  Game  from './screens/game';
import { Header} from './components/index';

export default function App() {
  const [userNumber, setUserNumber] = useState(null)
  const [loaded] = useFonts({
    "Crimson-Regular": require("../assets/fonts/CrimsonText-Regular.ttf"),
    "Crimson-Bold" : require("../assets/fonts/CrimsonText-Bold.ttf"),
    "Crimson-Italic" : require("../assets/fonts/CrimsonText-Italic.ttf")
  })
  if(!loaded){
    return <View style={styles.loaderContainer}><ActivityIndicator size='large' color='red'/></View>
  }

  const headerTitle = userNumber ? 'Game' : 'Bienvenidos'


  const onStartGame = (number) => {
    setUserNumber(number)
  }

  const Content = () =>( userNumber ? <Game userNumber={userNumber} /> : <StartGame onStartGame={onStartGame}/>)


  return (
    <View style={styles.container}>
    <Header title= {headerTitle} />
    <Content/>
    </View>
  );
}