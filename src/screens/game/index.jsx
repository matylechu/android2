import {Alert, Button, Text, View } from 'react-native';
import {styles} from "./styles"
import { Card, NumberContainer } from '../../components';
import {theme} from '../../constants'
import { useState, useRef, useEffect} from 'react';

const MIN_NUMBER = 1
const MAX_NUMBER = 99

const generateRandomNumber = (min,max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max)
  const randomNumber = Math.floor(Math.random() * (max - min) + min)
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude)
  } else {
    return randomNumber
  }
}

const Game = ({ userNumber, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(MIN_NUMBER, MAX_NUMBER, userNumber))


  const [rondas, setRondas] = useState(0)
  
  const currentLow = useRef(MIN_NUMBER)
  const currentHigh = useRef(MAX_NUMBER) 

  const onHandlerNextGuess = direction => {
    if(
      (direction === 'Menor' && currentGuess < userNumber || 
       direction === 'Mayor' && currentGuess > userNumber)
    ) {
      Alert.alert('Atencion!', 'La opción que elegiste es incorrecta!', [{text: 'Volver a Intentar', style:'cancel'}])
      return
    }

    if(direction === 'Menor') {
      currentHigh.current = currentGuess
    } else {
      currentLow.current = currentGuess
    } 

    const otroNumero = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess) 
    setCurrentGuess(otroNumero)
    setRondas((currentRondas) => currentRondas + 1)
    
  }
  useEffect(() => {
    if (currentGuess === userNumber) onGameOver(rondas)
  }, [currentGuess, userNumber, onGameOver])

  return (
    <View style={styles.container}>
      <Card style={styles.content}>
       <Text style={styles.title}>Adivina el Numero</Text>
       <NumberContainer number={currentGuess}/>
       <View style={styles.buttonContainer}>
        <Button title='Menor' color={theme.colores.primario} onPress={() => onHandlerNextGuess('Menor')}/>
        <Button title='Mayor' color={theme.colores.primario}  onPress={() => onHandlerNextGuess('Mayor')}/>
       </View>
      </Card>
    </View>
  );
}

export default Game;