import {Text, View, Image, Button } from 'react-native';
import {Card} from '../../components/index'

import {styles} from "./styles"

const GameOver = ({rondas, userNumber, onRestart}) => {
  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Image 
        style={styles.image} 
        source={{uri:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/game-over-poster-design-template-f174e42fa3ca42485b8b49e986ac46f4_screen.jpg?ts=1616307984'}}
        resizeMode='cover'
        />
        <Text style={styles.rondas}>Rondas : {rondas} </Text>
        <Text style={styles.numeroElegido}>Numero Elegido : {userNumber} </Text>
        <View style={styles.buttonContainer}>
        <Button color={'red'} title='Restart' onPress={onRestart}></Button>
        </View>
      </Card>
    </View>
  );
}

export default GameOver;