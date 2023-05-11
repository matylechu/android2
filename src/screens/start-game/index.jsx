import React, {useState} from 'react';
import {Button, Text,TextInput,View, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import {styles} from "./styles"
import { Card, Header, NumberContainer } from '../../components/index';
import {theme} from '../../constants'

const StartGame = ( {onStartGame} ) => {
  const [numberOption, setNumberOption] = useState('')
  const [confirm, setConfirm] = useState(false)
  const [numberConfirm, setNumberConfirm] = useState(null)

  const onHandlerChangeText = text => {

    setNumberOption(text.replace(/[^0-9]/g, ''));
  }

  const Confirm = () => {
    const numeroElegido = Number(numberOption)
    if(isNaN(numeroElegido) || numeroElegido <= 0 || numeroElegido > 99) {
      Alert.alert('El numero que ingresaste es incorrecto','Debe elegir un numero entre 1 y 99', [{text:"Entendido", style: 'destructive', onPress: () => setNumberOption('')}])
    } else {
      setConfirm(true)
      setNumberConfirm(numeroElegido)
      setNumberOption('')
    }
  }

  const Reset = () => {
    setNumberOption('')
    setConfirm(false)
    setNumberConfirm(null)
  }

  const onHandlerStartGame = () => {
    onStartGame(numberConfirm)
  }


  const Comenzar = () =>
   confirm ? (
    <Card style={styles.confirmedContainer}>
      <Text style={styles.confirmedTitle}>Numero Seleccionado</Text>
      <NumberContainer number={numberConfirm} />
      <Button title='Iniciar Juego' onPress={onHandlerStartGame} color={theme.colores.primario}></Button>
    </Card>
  ) : null;

  

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      <Text style={styles.title}>Comencemos!</Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.label}>Elige un Numero!</Text>
        <TextInput placeholder='0' style={styles.input} keyboardType='number-pad' maxLength={2} autoCapitalize='none' autoCorrect={false} blurOnSubmit onChangeText={onHandlerChangeText} value={numberOption}/>
        <View style={styles.buttonContainer}>
          <Button
          title='Limpiar'
          onPress={Reset}
          color='red'
          />
          <Button
          title='Confirmar'
          onPress={Confirm}
          color='red'
          disabled={numberOption === ''}
          />
        </View>
      </Card>
    <Comenzar />
    </View>
    </TouchableWithoutFeedback>
  );
}

export default StartGame;